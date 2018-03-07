import { Inventory } from './inventory';
import { Stack, Item } from './item';

class Crafting
{
    recipes: Recipe[];
    itemRecipeIndex: {[key: string]: Recipe[]};

    constructor() {
        this.recipes = [];
        this.itemRecipeIndex = {};
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);

        recipe.output.forEach((o: IRecipeOutput) => {
            if ( o instanceof ItemRecipeOutput ) {
                const id = o.stack.item.id;
                if ( this.itemRecipeIndex[id] === undefined ) {
                    this.itemRecipeIndex[id] = [];
                }
                this.itemRecipeIndex[id].push(recipe);
            }
        });
    }

    findRecipesForItem(id: string): Recipe[] {
        if ( this.itemRecipeIndex[id] === undefined ) {
            return [];
        }
        return this.itemRecipeIndex[id];
    }

    getAvailableRecipes(inventory: Inventory): Recipe[] {
        let indexed = inventory.getIndexedQuantities();
        return this.recipes.filter((r: Recipe) => r.canCraft(indexed));
    }
}

export interface IRecipeInput {
}

export interface IRecipeOutput {
}

export class ItemRecipeInput implements IRecipeInput {
    constructor(public stack: Stack) {
    }
}

export class EnergyRecipeInput implements IRecipeInput {
    /**
     * 
     * @param type Type of energy input.
     * @param amount The amount of energy required, as joules. Input rate is amount / recipe time (watts).
     */
    constructor(public type: EnergyType, public amount: number) {

    }
}

export class FluidRecipeInput implements IRecipeInput {

}

export class ItemRecipeOutput implements IRecipeOutput {
    constructor(public stack: Stack) {
    }
}

// temp, move to energy code later.
enum EnergyType {
    Electric, Kinetic, Thermal
}

interface IEnergyStack {
    compare(other: IEnergyStack): number;
}

class KineticEnergyStack implements IEnergyStack {
    constructor(public torque: number, public speed: number) {
    }

    compare(other: IEnergyStack): number {
        if ( other !instanceof KineticEnergyStack ) {
            throw new Error("Energy types incompatible");
        }
        
        const o = other as KineticEnergyStack;
        return o.torque - this.torque;
    }
}

// end temp.

export class EnergyRecipeOutput implements IRecipeOutput {
    constructor(public energy: IEnergyStack) {

    }
}

/**
 * A recipe can start crafting once all input requirements are met, including energy.
 * Unlike Minecraft mod machines, it won't start processing and only increment progress as power comes in.
 * If something requires 1000J with a recipe time of 10s, it will start once there's 1000J in the input
 * port, then draw 100W for 10 seconds.
 */
class Recipe
{
    constructor(public input: IRecipeInput[], public output: IRecipeOutput[], public time: number) {
    }

    canCraft(items: {[key: string]: number}, desiredQty: number = 1): boolean {
        return this.input.every((i: IRecipeInput) => {
            if ( i instanceof ItemRecipeInput ) {
                let id = i.stack.item.id;
                return items[id] !== undefined && items[id] >= i.stack.qty * desiredQty;
            }
        });
    }
}

// test
const stone = new Item('stone', 'Stone', 1);
const lavaRecipe = new Recipe([new ItemRecipeInput(stone.stack(1)), new EnergyRecipeInput(EnergyType.Thermal, 100000)],
    [new ItemRecipeOutput(new Item('lava', 'Lava', 1).stack(1))], 20);
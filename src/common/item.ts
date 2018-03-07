export class Item
{
    public traitList: ItemTrait[];

    constructor(public id: string, public name: string, public volume: number) {
        this.traitList = [];
    }

    stack(qty: number): Stack {
        var stack = new Stack(this, qty);
        this.traitList.forEach((t) => t.onNewStack(stack));
        return stack;
    }

    traits(...ts: ItemTrait[]): Item {
        this.traitList.push(...ts);
        return this;
    }

    hasTrait(name: string): boolean {
        return this.traitList.some((t) => t.name == name);
    }

    getTrait(name: string): ItemTrait {
        let trait: ItemTrait = null;
        this.traitList.some(t => {
            if ( t.name == name ) {
                trait = t;
                return true;
            }
        });

        return trait;
    }
}

export class Stack
{
    public data: {[key: string]: any};

    constructor(public item: Item, public qty: number) {

    }

    itemsEqual(other: Stack): boolean {
        return other && this.item.id == other.item.id
            && Object.keys(this.data).length == 0 && Object.keys(other.data).length == 0;
    }

    merge(other: Stack): Stack {
        if ( !this.itemsEqual(other) ) {
            return null;
        }
        return this.uncheckedMerge(other);
    }

    uncheckedMerge(other: Stack): Stack {
        return new Stack(this.item, this.qty + other.qty);
    }

    get volume(): number {
        return this.item.volume * this.qty;
    }
}

export class ItemTrait
{
    constructor(public name: string) {

    }

    onNewStack(stack: Stack) {

    }
}
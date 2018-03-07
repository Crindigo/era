import { Stack, Item } from './item';

export class Inventory
{
    items: Stack[];
    maxVolume: number;

    constructor(maxVolume: number = -1) {
        this.items = [];
        this.maxVolume = maxVolume;
    }

    add(stack: Stack) {
        let foundStack: Stack = null;
        this.items.some(s => {
            if ( s.itemsEqual(stack) ) {
                foundStack = s;
                return true;
            }
        });

        if ( foundStack ) {
            foundStack.qty += stack.qty;
        } else {
            this.items.push(stack);
            this.items.sort((a, b) => a.item.name.localeCompare(b.item.name));
        }
    }

    findStack(item: Item): Stack {
        let foundStack: Stack = null;
        this.items.some(s => {
            if ( s.item.id == item.id ) {
                foundStack = s;
                return true;
            }
        });

        return foundStack;
    }

    remove(stack: Stack) {
        let index = this.items.indexOf(stack);
        if ( index != -1 ) {
            this.items.splice(index, 1);
        }
    }

    decrement(stack: Stack, by: number = 1, simulate: boolean): boolean {
        if ( stack.qty < by ) {
            return false;
        }

        if ( !simulate ) {
            stack.qty -= by;
            if ( stack.qty <= 0 ) {
                this.remove(stack);
            }
        }
        return true;
    }

    accepts(stack: Stack): boolean {
        return true;
    }

    getIndexedQuantities(): {[key: string]: number} {
        let items = this.items;
        let indexed: {[key: string]: number} = {};
        items.forEach((s: Stack) => {
            if ( indexed[s.item.id] === undefined ) {
                indexed[s.item.id] = 0;
            }
            indexed[s.item.id] += s.qty;
        });

        return indexed;
    }
}
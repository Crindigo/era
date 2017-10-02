/*
 * Copyright (c) Steven Harris. All rights reserved.
 * Licensed under the MIT License. See LICENSE.txt in the project root for license information.
 */

import { Farm } from './farm';

export interface GrowthModifierFn {
    (temperature: number, minTemp: number, maxTemp: number): number;
}

export function defaultGrowthModifier(temperature: number, minTemp: number, maxTemp: number): number {
    return 1;
}

export function linearGrowthModifier(temperature: number, minTemp: number, maxTemp: number): number {
    let mid = (minTemp + maxTemp) / 2; // optimal temperature
    let half = (maxTemp - minTemp) / 2; // deviation before efficiency becomes 0
    let modifier = 1 - (Math.abs(temperature - mid) / half);
    return Math.max(0, modifier);
}

interface Item {}

export interface ICrop
{
    name: string;
    dailyGrowthIncrement: number;
    maxGrowth: number;

    isPlantable(farm: Farm): boolean;
    harvestDrops(): Item[]

    // possibly implement at a later date.
    minTemperature: number;
    maxTemperature: number;
    tempGrowthModifier: GrowthModifierFn;
}

export class BaseCrop implements ICrop
{
    name: string;
    dailyGrowthIncrement: number;
    maxGrowth: number;

    minTemperature = -100;
    maxTemperature = 100;
    tempGrowthModifier = defaultGrowthModifier;

    constructor(name: string, dailyGrowthIncrement: number, maxGrowth: number, dropSpec: string) {
        this.name = name;
        this.dailyGrowthIncrement = dailyGrowthIncrement;
        this.maxGrowth = maxGrowth;
    }

    isPlantable(farm: Farm): boolean {
        return true;
    }

    harvestDrops(): Item[] {
        return [];
    }
}

export class BaseGrainCrop extends BaseCrop
{
    isPlantable(farm: Farm): boolean {
        return farm.upgrades.indexOf("threshing") >= 0;
    }
}

export class CropRegistry
{
    private readonly crops: {[key: string]: ICrop} = Object.create(null)
    private static inst: CropRegistry = null;

    static instance(): CropRegistry {
        if ( CropRegistry.inst == null ) {
            CropRegistry.inst = new CropRegistry();
        }
        return CropRegistry.inst;
    }

    private constructor() {
    }

    addCrop(id: string, crop: ICrop): void {
        this.crops[id] = crop;
    }

    getCrop(id: string): ICrop {
        return this.crops[id];
    }
}

let registry = CropRegistry.instance();

// dropSpec:
// itemId=min-max;itemId2=min-max;...

registry.addCrop("era:rye", new BaseGrainCrop("Rye", 10, 100, "era:ryeSeed=10-20"));

abstract class BaseMachine 
{
    public itemInputs: ItemInputPort[];
    public itemOutputs: ItemOutputPort[];
    public fluidInputs: FluidInputPort[];
    public fluidOutputs: FluidOutputPort[];
    public energyInputs: EnergyInputPort[];
    public energyOutputs: EnergyOutputPort[];

    constructor() {
        
    }
}

class ItemInputPort
{
    public locked: boolean;
    public filter: string;
    public limit: number;
}

class ItemOutputPort
{
    public filter: string;
    public limit: number;
}

class FluidInputPort
{

}

class FluidOutputPort
{

}

class EnergyInputPort
{

}

class EnergyOutputPort
{

}

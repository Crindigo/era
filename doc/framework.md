# Framework

Describes how the mechanics operate, not necessarily the content.

## UI Layer

VueJS user interface. Events from user are routed to the worker layer. Receives
events from the worker layer to update the UI.

## Worker Layer

Worker layer receives events in Main.onMessageHandler(e: MessageEvent). The
worker performs operations on a tick-based model. The tick length should be
variable, between 1 and 10 per second. Unlike systems like Minecraft, times
for crafting, machines, etc. are defined in seconds, so everything should
still function correctly no matter the tick length.

## Event Definitions



## Machines & Ports

Machines are structures that perform some work, taking in input and producing
output. They can have 0 or more input and output ports. Ports can be for items,
fluids, or energy (any type). A flour mill could have one input for kinetic
energy, one input for grain, and one output for flour. Each recipe specifies
the required inputs, the output(s), and the time in seconds to finish. Item
input ports can only hold one type of item, energy input ports one type of
energy, and fluid input ports one type of fluid.

Connecting ports: Use conveyors to connect the base inventory, or other 
machines' item output ports to machine input ports. Conveyors from the base
inventory need to have an item filter set. Conveyors connections can be
many-to-one or one-to-many. The former would be like sending from the inventory
and from a machine into one input port of another machine. The latter would be
routing some output from a machine into another machine, and the rest of the
output into the base inventory. When coming from the inventory, limits can be
set so it will only keep X items in the destination, or keep X items in the
base. If multiple conveyors are connected to the same output, but with the same
item filter, it will round-robin.

The UI for this:

Click a machine. Center window shows overview with input, output ports, and all
connections for each port. Can add connections (show modal for item filter,
limit, destination/source).

## The Worker Run Loop

The worker runs code to progress the game every tick. This increments time,
machine progress, community hunger/thirst, etc.
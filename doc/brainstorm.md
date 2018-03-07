# Community

Other people in the community can do the following things:

- Gather materials (woodcutting, mining, foraging, hunting, farming)
  aka lumberjack, miner, forager, hunter, farmer.
- Assistance for machines requiring multiple people to operate, until
  mechanical power is invented. Like forcing air into a blast furnace.
- Automatic crafting of a resource (includes cooking). Options to keep X
  amount of resource stocked.

Each person has food and water requirements to maintain a balanced diet,
consumed at the end of the day. If not enough is available, it becomes
rationed which can reduce their health and hurt efficiency, and if it's
bad enough it can kill them.

Later in the game, your community can be supplemented with robot helpers
which require power, oil, and maintenance instead of food & water. In code,
there should probably be an ICitizen interface and people/robots implement it.

# Land

Buildings don't get more expensive as you create them, however land is limited
and it DOES get more expensive to expand the more you do it. Maybe send out
explorers to tame the wilds, requiring weapons and armor.

# Reworking Land

Your territory is split up among regions. Each region has a limited amount of
land, can hold buildings, and each has its own inventory. Everything is shared,
buildings can pull and push to the region's shared inventory. Then, for complex
processing chains, you connect your regions together via transport networks.

Regions connect via a network of straight edges. Connection types include
roads, train tracks, power lines, pipelines. Items/fluids are limited by speed.
The cost to build connections is multiplied by distance. Some connections need
specific buildings, like rail depots, power substations, pumping stations.

# Farming

Use some land to create a farm. Farms require a farmer to automate, and each
can grow a limited number of crops.

# Seasons

Spring, Summer, Autumn, Winter. Temperature and rain fluctuations that can
change what crops can grow, change their growth rate or kill them. You'll want
to upgrade farms with clay buckets which allow farmers to keep irrigation more
consistent, so they can pull from a river/lake (which we will assume exists).
Each day lasts one minute in real life.

# Food & Nutrition

Natural (fruits/vegetables), Grain (wheat, corn, barley, rye, rice, oats),
Protein (beef, pork, chicken, fish, peanuts, beans). Natural resouces can
be foraged/farmed, grain farmed/foraged, and protein is hunted/farmed/foraged.

# Factories

Farther in the future, you can create a production line composed of multiple
machines by organizing them in a factory. Factories can range in size, and
depending on size can hold a maximum number of machines. I/O slots of machines
can then be linked. Items can be input into factories from global storage and
output back into global storage.

# Research & Progression

Unlocking the tech tree requires a research station & scientist(s) to manage
it. Research stations require a number of materials to discover a new
technology, and the number of scientists will affect the speed the materials
are processed. As technology progresses, your community's jobs can shift from
low-tech to high-tech like science, as old jobs can be done by machinery. So
while later tech requires more time/resources, it will be offset somewhat by
having more scientists.

# Early-Game Glue

Birch tar. Maybe craft birch log into birch bark + birch wood. Creation similar
to charcoal. The pit requires a moderate amount of baked clay to create. Each
crafting operation turns 100 dirt + 100 bark + 20 plant fiber = 10L of birch 
tar over a 5 day period. May work with other bark types. This may actually be
a little too complex for super-early, in real life it happened in late Paleo
to early Meso.

# Fluid Handling

Fluid units are liters, which is great since solid storage is measured in dm^3
already, and they are the same volume. Fluid storage items can be kept in solid
storage, like buckets. Fluid-specific storage can also be placed for cheaper
storage, in the form of larger tanks.

# Power Systems

Possibly have multiple power systems, or energy systems, and ways to convert
among them. Kinetic (rad/s, Nm, Nm*rad/s = J), heat (BTU, ~1000J), electric (J).

Power Source: An "outlet" for a type of power. Like a wind turbine can have an 
outlet for kinetic power. AKA "output port".

Power Sink: An "inlet" for a type of power. Like a mill can accept kinetic
power to create flour from grain. AKA "input port".

Power can be transferred between different types, like kinetic power going
into a generator to create electric power. Electric power is special in
that one source can handle infinite sinks. However, transferring power types
back and forth incurs a loss of efficiency.

Kinetic splitter/joiner: machines that take one kinetic input and divide the
power between multiple outputs, or take multiple inputs and combine their
power into one output. Tiers can have different max output rates and
efficiencies. Wood, iron, steel, tungsten.

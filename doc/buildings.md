# Buildings

Buildings are structures, farmland, or other types of placed object that
consumes a set amount of land. Some buildings are limited to 1, and others
have no limits. Buildings can have upgrades added to give extra features, make
them faster, or more efficient. Some upgrades are removable, especially if it
involves adding a single item. Most buildings can be dismantled to free up 
land, you may or may not receive a (partial) refund on the material cost.

1 Land = 1m^2. Start with 1000 land.

## Research Station

You get this for free at the start. Cannot be dismantled.

- Land: 0
- Cost: Free
- Upgrades:
  - Tech Level 2
  - Tech Level 3
  - ...

## Storage

DEPRECATED: I don't think I will even worry about storage limits. It's getting
too complicated to implement. Most of the time you're just going to be routing
items between machines anyway. And the "wait" mechanic will just be for
waiting on machines and not waiting until you can buy more storage.

HOWEVER, we will still need storage limits for some purposes, like sending
items into space via rocket or mass driver.

Storage is free at its lowest level, which is just a place to drop items on
your land. Upgrades may increase land usage but also increase efficiency to 
allow storing a higher volume of items per land. Starting storage is 500 dm^3. 
So, about a single layer of items ~2in tall across 10m^2.

- Land: 10
- Cost: Free
- Upgrades:
  - Shed; storage=1000 (req: Construction)
  - Barn; land+140 storage=30k (200/land)
  - Warehouse; land+350 storage=150k (300/land) (req: Architecture)
  - Pallet Racking; storage=400k (800/land) (uses fuel, forklifts)
  - Automated Storage/Retrieval; storage=1250k (2.5k/land) (uses electricity)
  - Pocket Dimension; storage=5000k (10k/land) (uses handwavium, endgame)

Dedicated liquid storage is also a thing. Fluid units are 1L, the same as dm^3.
Liquid storage can hold quite a bit of liquid, but only in a limited number of
liquid types.

- Land: 1
- Cost: 10 large clay jugs
- Base storage: 50L x10

Gas storage should exist later in the tech tree. Gas can be compressed to store
quite a large amount.

## Farm

Requires Agriculture research. Requires at least one farmer to operate. Farm
can hold 100 plots. Crop growth ticks are daily. Each crop grows at different
rates. Harvesting time also varies per crop, e.g. grain requires threshing so
it takes longer to get the results.

- Land: 100
- Cost: Free
- Upgrades:
  - Clay Bucket; crop growth speed +5%
  - Metal Bucket; crop growth speed +5%
  - Watering Can; crop growth speed +10%
  - Aqueduct; crop growth speed +10%
  - Water Tank; required for Irrigation Pipes & Automated Irrigation
  - Irrigation Pipes; crop growth speed +20%
  - Automated Irrigation; crop growth speed +20% (uses electricity)
  - Fertilization; crop growth speed +30% (consumes Fertilizer daily)
  - Flail Threshing; allows grain planting & harvesting
  - Sickle; grain harvest speed +10%
  - Ox Threshing; grain harvest speed +20% (requires ox)
  - Metal Sickle; grain harvest speed +10%
  - Mechanical Threshing; grain harvest speed +30% (requires ox)
  - Fuel Powered Threshing; grain harvest speed +50% (requires fuel)
  - Electric Threshing; grain harvest speed +50% (requires electricity)
  - Metal Scythe; all harvest speed +20%
  - Fuel Powered Harvester; all harvest speed +50%
  - Electric Harvester; all harvest speed +50%

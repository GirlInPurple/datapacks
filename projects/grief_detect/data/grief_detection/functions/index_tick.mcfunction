# There are 4 item indexes, they all worke the exact same way; number of ticks they're in your inv x number of items. The higher the number the more likely you are to be monitored

# lava_index
execute if entity @a[nbt={Inventory:[{id:"minecraft:lava_bucket"}]}] as @a[nbt={Inventory:[{id:"minecraft:lava_bucket"}]}] run scoreboard players add @s lava_bucket_index 1

# water_index (useless? i think not.)
execute if entity @a[nbt={Inventory:[{id:"minecraft:water_bucket"}]}] as @a[nbt={Inventory:[{id:"minecraft:water_bucket"}]}] run scoreboard players add @s water_bucket_index 1

# gunpowder_index
execute if entity @a[nbt={Inventory:[{id:"minecraft:gunpowder"}]}] as @a[nbt={Inventory:[{id:"minecraft:gunpowder"}]}] run scoreboard players add @s gunpowder_index 1

# crystal_index
execute if entity @a[nbt={Inventory:[{id:"minecraft:end_crystal"}]}] as @a[nbt={Inventory:[{id:"minecraft:end_crystal"}]}] run scoreboard players add @s end_crystal_index 1
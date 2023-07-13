# anywhere thats not tagged as whitelisted or removed
execute as @e[type=tnt,nbt={Fuse:1s},tag=!tnt_whitelisted] in overworld run tag @e[type=tnt,nbt={Fuse:1s},tag=!tnt_whitelisted] add tnt_alarm

# an armor stand to whitelist tnt
execute at @e[tag=tnt_wl_10,type=armor_stand] run tag @e[distance=..10,type=tnt] add tnt_whitelisted

# an armor stand to tag tnt to be removed
execute at @e[tag=tnt_rm_50,type=armor_stand] run tag @e[distance=..50,type=tnt] add tnt_remove

# drops a tnt item
execute at @e[tag=tnt_remove,type=tnt] run summon minecraft:item ~ ~ ~ {Age: -32768s, Item: {id:"minecraft:tnt", Count: 1b}}

# says where the tnt was removed
execute at @e[tag=tnt_remove,type=tnt] run tellraw @a [{"text":"A TNT was ignited and removed at XYZ = "},{"nbt":"Pos[0]","entity":"@e[type=tnt, distance=..2]"},{"text":", "},{"nbt":"Pos[1]","entity":"@e[type=tnt, distance=..2]"},{"text":", "},{"nbt":"Pos[2]","entity":"@e[type=tnt, distance=..2]"},{"text":". "},{"selector":"@p"},{"text":" seems to be near it (but it might not be them who ignited the TNT!)."}]

# kills the tnt
execute at @e[tag=tnt_remove,type=tnt] run kill @e[tag=tnt_remove,type=tnt]
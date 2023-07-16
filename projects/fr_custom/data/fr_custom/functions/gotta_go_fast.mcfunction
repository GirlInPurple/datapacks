execute as @e[type=#fr_custom:fast_entities] at @s if block ~ ~ ~ #fr_custom:fast_blocks run attribute @s minecraft:generic.movement_speed modifier add 423-223-323-123-23 path.speed 0.8 multiply_base
execute as @e[type=#fr_custom:fast_entities] at @s unless block ~ ~-0.5 ~ #fr_custom:fast_blocks run execute unless block ~ ~-0.5 ~ air run attribute @s minecraft:generic.movement_speed modifier remove 423-223-323-123-23
schedule function fr_custom:gotta_go_fast 1t replace
# This is ripped directly from https://modrinth.com/datapack/fast-path, modified to work with our needs and version 1.19.4.
# The original owner of this code may request this is removed at any time.
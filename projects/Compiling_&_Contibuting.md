# Contributing

## Adding recipes

### Rarity Guidelines

- Common Rarity
  - Most items in the game, everything from dirt to diamonds
- Uncommon Rarity
  - Things like prismarine crystals or dragons breath, items that cen be autocrafted or
- Epic Rarity

### Item Uses

- Dragons Breath
  - An Uncommon rarity item that can be used a catalyst for rarer/more op items.

### Formatting Guidelines

To help keep consistency across files, use 4 tab spaces, as shown in the example below:

- The `group` option is now required as of commit `placeholder`
  - Do not add `nc_` or `craftless` to the group, they are from older versions of the pack
- Keys are case-sensitive, meaning you can use g for gold ingot and G for gold block.

```json
{
    "type": "crafting_shaped",
    "group": "mob drops",
    "pattern": [
        "BMG",
        "MMB",
        "GGG"
    ],
    "key": {
        "B": {
            "item": "minecraft:blaze_powder"
        },
        "M": {
            "tag": "craftful:mushrooms" # this is a common error, 'tag' != 'item'
        },
        "G": {
            "item": "minecraft:barrier" # use 'minecraft:barrier' as a placeholder when necessary
        }
    },
    "result": {
        "item": "minecraft:milk_bucket",
        "count": 1
    }
}
```

Here is a list of existing groups and tags:

- Groups
  - Note: Non-exhaustive list
  - `block ores`
  - `craftful` (deprecated)
  - `craftless` (deprecated)
  - `cutting` (stonecutter crafts only)
  - `discs`
  - `dust`
  - `d block ores`
  - `end` (deprecated/unused)
  - `mob drops`
  - `op item`
  - `spawn_egg` (unused)
  - `stones`
  - `raw`
- Tags
  - Note: There are duplicates tags with vanilla equivalents, submit a issue if you want to remove/edit one as editing something could cause recipes to scramble.
  - (carpets)[]
  - (coal)[]
  - (crimson_plants)[]
  - (dirt)[]
  - (flowers_without_wr)[]
    - meaning "Flowers Without Wither Rose"
  - (grasses)[]
  - (heads)[]
  - (leaves)[]
  - (mushrooms)[]
  - (netherite_tools)[]
  - (purpur_blocks)[]
  - (quartz_blocks)[]
  - (sands_like)[]
  - (sands_only)[]
  - (sands_without_sand)[]
    - these three have *no* reason to exist, but yet they do. 90% sure they're not even used. Someone please make an issue about this
  - (stones)[]
  - (vines)[]
  - (warped_plants)[]

# Compiling and Running

## Datapacks

- Clone or download the repo,
- Run [zip_files.py](/projects/zip_files.py),
  - Note: The file above requires Python 3.8 or higher to run.
  - You can do this manually using either [WinRAR](https://www.win-rar.com/download.html?&L=0) or [7-zip](https://www.7-zip.org/download.html). On Windows 10 or above, select all the files inside the folder, right click, hover "Send to" and click "Compressed (zipped) folder". **Do not** zip the root folder, it will result in a folder in a zip, and the datapack won't work.
  - Linux users: Again, you can either use [7-zip](https://www.7-zip.org/download.html) or the "Compress" context menu if your operating system has that.
- there are a few options in the python file for you if you want certain things or not,
- The datapacks should then be made in the same folder as the .py file is.

## World Downloads

### Prism Launcher / MutliMC

- Make your way to your main instance's world tab
- Drop the world file onto the app from your file explorer (only tested on Prism)
- Load the game

### Offical Launcher

- Make sure you have the `Hidden Items` option checked in your File Explorer, if you prefer navigating yourself or have different game folder.
- Find your way to `%userprofile%\AppData\Roaming\.minecraft\saves` folder (You can paste this into the run dialog/explorer address bar)
- From there, drop the uncompressed world file into that folder, and launch Minecraft.

# Our TODO

- [ ] GitHub Repository
  - [ ] Finish the TODO ([ironic](https://youtu.be/dKqLhzHSARI))
  - [X] Add/Finish the following pages:
    - [X] Credits
    - [X] Contributing
    - [x] Compiling
- [ ] Datapacks
  - [ ] Add the ability to save file space on the Datapack by removing:
    - [ ] CREDITS.md
    - [ ] Icon.png
    - [ ] Individual Functions

# Contributing

## Adding recipes

### Rarity Guidelines

- Common Rarity
  - Most items in the game, everything from dirt to diamonds
- Uncommon Rarity
  - Things like prismarine crystals or dragons breath, items that cen be autocrafted or

### Item Uses

- Dragons Breath
  - An Uncommon rarity item that can be used a catalyst for rarer/more op items.

### Formatting Guidelines

To help keep consistency across files, use 4 tab spaces and uppercase keys, as shown in the example below:

- The `group` option is completely optional, and is currently not used in Craftful
- Do not add `nc_` to the beginning either, that is from an older version of the pack

```json
{
    "type": "crafting_shaped",
    "group": "milk_bucket",
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
            "item": "minecraft:mangrove_roots"
        },
        "G": {
            "item": "minecraft:golden_carrot"
        }
    },
    "result": {
        "item": "minecraft:milk_bucket",
        "count": 1
    }
}
```

# Compiling and Running

## Datapacks

- Clone or download the repo,
- Run [zip_files.py](/projects/zip_files.py),
  - Note: requires Python 3.8 or higher to run.
  - You can do this manually using either [WinRAR](https://www.win-rar.com/download.html?&L=0) or by default on Windows 11 or above.
  - Linux users know how to do this already
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

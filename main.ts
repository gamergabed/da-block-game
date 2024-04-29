namespace SpriteKind {
    export const Treeeeeee = SpriteKind.create()
    export const NPC = SpriteKind.create()
}
function setMap () {
    tiles.setCurrentTilemap(tileUtil.createSmallMap(tilemap`CityMap`))
    for (let value of tiles.getTilesByType(assets.tile`treeSpawn`)) {
        if (0 <= SpriteLimit) {
            mySprite2 = sprites.create(assets.image`treee`, SpriteKind.Treeeeeee)
            SpriteLimit += -1
            tiles.placeOnTile(mySprite2, value)
        }
    }
    for (let value2 of tiles.getTilesByType(assets.tile`stone`)) {
        if (Math.percentChance(0.0001)) {
            tiles.setTileAt(value2, assets.tile`stoneMoneyDrop`)
        }
    }
    for (let index = 0; index <= 4; index++) {
    	
    }
}
function setPlayer () {
    mySprite = sprites.create(assets.image`PersonA`, SpriteKind.Player)
    controller.moveSprite(mySprite, 75, 75)
    scene.cameraFollowSprite(mySprite)
    tiles.placeOnRandomTile(mySprite, assets.tile`stone`)
    sprites.setDataImageValue(mySprite, "ImgA", assets.image`PersonA`)
    sprites.setDataImageValue(mySprite, "ImgB", assets.image`PlayerB`)
    sprites.setDataImageValue(mySprite, "ImgAH", assets.image`PersonAhold`)
    sprites.setDataImageValue(mySprite, "ImgBH", assets.image`PersonBhold`)
    sprites.readDataImage(mySprite, "ImgA").replace(8, 13)
    sprites.readDataImage(mySprite, "ImgA").replace(5, 2)
    sprites.readDataImage(mySprite, "ImgB").replace(8, 13)
    sprites.readDataImage(mySprite, "ImgB").replace(5, 2)
    sprites.readDataImage(mySprite, "ImgAH").replace(8, 13)
    sprites.readDataImage(mySprite, "ImgAH").replace(5, 2)
    sprites.readDataImage(mySprite, "ImgBH").replace(8, 13)
    sprites.readDataImage(mySprite, "ImgBH").replace(5, 2)
}
function personOddTile (X: number, Y: number) {
    if ((X + Y) % 2 == 0) {
        return true
    } else {
        return false
    }
}
function SetGameSettings () {
    BeffyMode = game.ask("Is your system not trash?")
    if (BeffyMode) {
        SpriteLimit = 75
    } else {
        SpriteLimit = 50
    }
    if (!(game.ask("Is the settings good?"))) {
        game.splash("Ill say it again.")
        SetGameSettings()
    }
}
function Init () {
    BeffyMode = game.ask("Allow extra sprites?")
    if (BeffyMode) {
        SpriteLimit = 75
    } else {
        SpriteLimit = 50
    }
    TelephoneNames = ["Gun shop", "Red real estate house", "Blue real estate house"]
    HouseNames = [
    "Blue Meh house (NE)",
    "Red Small house (N)",
    "Blue Small house (NE)",
    "Bland Modern house (NW)"
    ]
    HouseCosts = [
    0,
    0,
    0,
    9999
    ]
    MenuUp = true
    TitleScreen = true
}
let TitleScreen = false
let MenuUp = false
let HouseCosts: number[] = []
let HouseNames: string[] = []
let TelephoneNames: string[] = []
let BeffyMode = false
let mySprite: Sprite = null
let mySprite2: Sprite = null
let SpriteLimit = 0
Init()
game.splash("Ominouswolf presents...")
scene.setBackgroundImage(assets.image`TitleEnlarge`)
game.setDialogCursor(assets.image`PressA`)
game.setDialogFrame(assets.image`Blank`)
game.setDialogTextColor(1)
game.showLongText("v1 By Ominouswolf", DialogLayout.Bottom)
game.setDialogTextColor(15)
game.setDialogFrame(assets.image`TextBox`)
let myMenu = miniMenu.createMenu(
miniMenu.createMenuItem("PLAY", assets.image`playIcon`),
miniMenu.createMenuItem("INSTRUCTIONS", assets.image`QUESTIONN`),
miniMenu.createMenuItem("GAME SETTINGS", assets.image`gameset`),
miniMenu.createMenuItem("SYST SETTINGS", assets.image`consset`),
miniMenu.createMenuItem("CLEAR GAME", assets.image`DestroyDataaaaa`)
)
myMenu.setPosition(80, 90)
// (Funny consept for homes)
// 
// Red & Blue: 3/4 added
// 
// Red: 1/2 added
// 
// Blue: 1/4 added
// 
// No color: Normal cost
game.onUpdate(function () {
    if (MenuUp) {
        if (TitleScreen) {
            myMenu.onButtonPressed(controller.A, function (selection, selectedIndex) {
                if (selectedIndex == 0) {
                    setMap()
                    setPlayer()
                    myMenu.close()
                    TitleScreen = false
                    MenuUp = false
                } else if (selectedIndex == 1) {
                    game.showLongText("Move with your favorite way to move. Press [B] to switch between tools. Press [A] to use the tool. Press [MENU] to open Invintory/Pause menu. Goal? Psshh, there's no goal! Do what you want here! (I do hear that you can own the entire block)- Mark", DialogLayout.Full)
                } else if (selectedIndex == 2) {
                    game.splash("I'm gonna ask you a couple of questions. Okay?", "A: Okay.")
                    if (game.ask("Do you want to continue?")) {
                        SetGameSettings()
                    }
                } else if (selectedIndex == 3) {
                    scene.systemMenu.showSystemMenu()
                } else if (selectedIndex == 4) {
                    if (game.ask("WHOA WHOA WHOA", "Are you sure?")) {
                        if (game.ask("Like are you really sure?", "It would be gone forever!")) {
                            if (game.ask("please dont hurt me", "Last chance to back away!")) {
                                game.splash("Welp that's a shame.")
                                game.splash("Ill get on with it")
                                blockSettings.clear()
                                game.splash("There ive deleted the data")
                                while (true) {
                                    game.splash("Now restart the game please.")
                                }
                            }
                        }
                    }
                }
            })
        } else {
        	
        }
    } else {
        if (personOddTile(mySprite.tilemapLocation().column, mySprite.tilemapLocation().row)) {
            if (controller.A.isPressed()) {
                mySprite.setImage(sprites.readDataImage(mySprite, "ImgBH"))
            } else {
                mySprite.setImage(sprites.readDataImage(mySprite, "ImgB"))
            }
        } else {
            if (controller.A.isPressed()) {
                mySprite.setImage(sprites.readDataImage(mySprite, "ImgAH"))
            } else {
                mySprite.setImage(sprites.readDataImage(mySprite, "ImgA"))
            }
        }
        for (let value3 of sprites.allOfKind(SpriteKind.NPC)) {
        	
        }
    }
})

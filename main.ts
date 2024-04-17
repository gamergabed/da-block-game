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
    for (let index = 0; index <= 4; index++) {
    	
    }
}
function setPlayer () {
    mySprite = sprites.create(assets.image`PersonA`, SpriteKind.Player)
    controller.moveSprite(mySprite)
    scene.cameraFollowSprite(mySprite)
    tiles.placeOnRandomTile(mySprite, assets.tile`stone`)
    sprites.setDataImageValue(mySprite, "ImgA", assets.image`PersonA`)
    sprites.setDataImageValue(mySprite, "ImgB", assets.image`PlayerB`)
    sprites.readDataImage(mySprite, "ImgA").replace(8, 13)
    sprites.readDataImage(mySprite, "ImgA").replace(5, 2)
    sprites.readDataImage(mySprite, "ImgB").replace(8, 13)
    sprites.readDataImage(mySprite, "ImgB").replace(5, 2)
}
/**
 * (Funny consept for homes)
 * 
 * Red & Blue: 3/4 added
 * 
 * Red: 1/2 added
 * 
 * Blue: 1/4 added
 * 
 * No color: Normal cost
 */
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
}
let HouseCosts: number[] = []
let HouseNames: string[] = []
let TelephoneNames: string[] = []
let BeffyMode = false
let mySprite: Sprite = null
let mySprite2: Sprite = null
let SpriteLimit = 0
game.splash("Ominouswolf presents...")
game.splash("A game heavily inspired by a room in RecRoom...", "That was inspired by the hit game GTA...")
scene.setBackgroundImage(assets.image`TitleEnlarge`)
game.setDialogCursor(assets.image`PressA`)
game.setDialogFrame(assets.image`Blank`)
game.setDialogTextColor(1)
game.showLongText("v1 By Ominouswolf", DialogLayout.Bottom)
game.setDialogTextColor(15)
game.setDialogFrame(assets.image`TextBox`)
game.showLongText("Move with your favorite way to move. Press [B] to switch between tools. Press [A] to use the tool. Press [MENU] to open Invintory/Pause menu. Goal? Psshh, there's no goal! Do what you want here! (I do hear that you can own the entire block)- Mark", DialogLayout.Bottom)
Init()
setMap()
setPlayer()
game.onUpdate(function () {
    if (!(mySprite.x % 8 == 0) || !(mySprite.y % 8 == 0)) {
        mySprite.setImage(sprites.readDataImage(mySprite, "ImgB"))
    } else {
        mySprite.setImage(sprites.readDataImage(mySprite, "ImgA"))
    }
    for (let value of sprites.allOfKind(SpriteKind.NPC)) {
    	
    }
})

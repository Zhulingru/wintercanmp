namespace SpriteKind {
    export const 物件 = SpriteKind.create()
    export const 迷霧 = SpriteKind.create()
    export const NPC = SpriteKind.create()
    export const 水 = SpriteKind.create()
}
controller.player2.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Released, function () {
    if (!(tiles.tileAtLocationIsWall(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).tilemapLocation().getNeighboringLocation(CollisionDirection.Bottom)))) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setImage(assets.image`角色2下`)
        玩家二Ｙ = 玩家二Ｙ + 1
        tiles.placeOnTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), tiles.getTileLocation(玩家二Ｘ, 玩家二Ｙ))
        pause(200)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC, function (sprite, otherSprite) {
	
})
controller.player3.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Released, function () {
    if (!(tiles.tileAtLocationIsWall(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)).tilemapLocation().getNeighboringLocation(CollisionDirection.Right)))) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)).setImage(assets.image`角色3右`)
        玩家三Ｘ = 玩家三Ｘ + 1
        tiles.placeOnTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)), tiles.getTileLocation(玩家三Ｘ, 玩家三Ｙ))
        pause(200)
    }
})
controller.player4.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Released, function () {
    if (!(tiles.tileAtLocationIsWall(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)).tilemapLocation().getNeighboringLocation(CollisionDirection.Bottom)))) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)).setImage(assets.image`角色4下`)
        玩家四Ｙ = 玩家四Ｙ + 1
        tiles.placeOnTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)), tiles.getTileLocation(玩家四Ｘ, 玩家四Ｙ))
        pause(200)
    }
})
controller.player3.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Released, function () {
    if (!(tiles.tileAtLocationIsWall(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)).tilemapLocation().getNeighboringLocation(CollisionDirection.Bottom)))) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)).setImage(assets.image`角色3下`)
        玩家三Ｙ = 玩家三Ｙ + 1
        tiles.placeOnTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)), tiles.getTileLocation(玩家三Ｘ, 玩家三Ｙ))
        pause(200)
    }
})
controller.player4.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Released, function () {
    if (!(tiles.tileAtLocationIsWall(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)).tilemapLocation().getNeighboringLocation(CollisionDirection.Right)))) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)).setImage(assets.image`角色4右`)
        玩家四Ｘ = 玩家四Ｘ + 1
        tiles.placeOnTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)), tiles.getTileLocation(玩家四Ｘ, 玩家四Ｙ))
        pause(200)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.水, function (sprite, otherSprite) {
    pause(200)
    if (sprite == mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One))) {
        玩家一Ｘ = 玩家一Ｘ - 1
        玩家一Ｙ = 玩家一Ｙ - 1
        tiles.placeOnTile(sprite, tiles.getTileLocation(玩家一Ｘ, 玩家一Ｙ))
    }
    if (sprite == mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two))) {
        玩家二Ｘ = 玩家二Ｘ - 1
        玩家二Ｙ = 玩家二Ｙ - 1
        tiles.placeOnTile(sprite, tiles.getTileLocation(玩家二Ｘ, 玩家二Ｙ))
    }
    if (sprite == mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three))) {
        玩家三Ｘ = 玩家三Ｘ - 1
        玩家三Ｙ = 玩家三Ｙ - 1
        tiles.placeOnTile(sprite, tiles.getTileLocation(玩家三Ｘ, 玩家三Ｙ))
    }
    if (sprite == mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four))) {
        玩家四Ｘ = 玩家四Ｘ - 1
        玩家四Ｙ = 玩家四Ｙ - 1
        tiles.placeOnTile(sprite, tiles.getTileLocation(玩家四Ｘ, 玩家四Ｙ))
    }
    otherSprite.setFlag(SpriteFlag.Invisible, false)
    game.showLongText("這裡是深海，看起來需要什麼才能過去。。。", DialogLayout.Center)
})
function 所有NPC建立角色效果初始化 (角色們: Sprite[]) {
    for (let index = 0; index <= 角色們.length - 1; index++) {
        角色們[index].setFlag(SpriteFlag.Ghost, true)
        角色們[index].setFlag(SpriteFlag.Invisible, true)
    }
}
controller.player4.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Released, function () {
    scene.cameraFollowSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)))
})
controller.player1.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Released, function () {
    if (!(tiles.tileAtLocationIsWall(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).tilemapLocation().getNeighboringLocation(CollisionDirection.Top)))) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setImage(assets.image`角色1上`)
        玩家一Ｙ = 玩家一Ｙ - 1
        tiles.placeOnTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), tiles.getTileLocation(玩家一Ｘ, 玩家一Ｙ))
        pause(200)
    }
})
controller.player2.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Released, function () {
    if (!(tiles.tileAtLocationIsWall(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).tilemapLocation().getNeighboringLocation(CollisionDirection.Left)))) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setImage(assets.image`角色2左`)
        玩家二Ｘ = 玩家二Ｘ - 1
        tiles.placeOnTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), tiles.getTileLocation(玩家二Ｘ, 玩家二Ｙ))
        pause(200)
    }
})
function NPC清單 () {
    薛之交 = sprites.create(assets.image`薛之交`, SpriteKind.NPC)
    火鍋店家 = sprites.create(assets.image`火鍋店家`, SpriteKind.NPC)
    冰淇淋店家 = sprites.create(assets.image`冰淇淋店家`, SpriteKind.NPC)
    小明 = sprites.create(assets.image`小明`, SpriteKind.NPC)
    小王 = sprites.create(assets.image`小王`, SpriteKind.NPC)
    小白 = sprites.create(assets.image`小白`, SpriteKind.NPC)
    小黑 = sprites.create(assets.image`小黑`, SpriteKind.NPC)
    小黃 = sprites.create(assets.image`小黃`, SpriteKind.NPC)
    全部的角色 = [
    小王,
    冰淇淋店家,
    火鍋店家,
    小黑,
    小明,
    小白,
    薛之交,
    小黃
    ]
}
controller.player3.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Released, function () {
    scene.cameraFollowSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)))
})
controller.player3.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Released, function () {
    if (!(tiles.tileAtLocationIsWall(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)).tilemapLocation().getNeighboringLocation(CollisionDirection.Left)))) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)).setImage(assets.image`角色3左`)
        玩家三Ｘ = 玩家三Ｘ - 1
        tiles.placeOnTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)), tiles.getTileLocation(玩家三Ｘ, 玩家三Ｙ))
        pause(200)
    }
})
function ＮＰＣ屬性表 (角色Ｘ座標: number, 角色Ｙ座標: number, 有沒有踩到: number, 有沒有離開: number) {
    ＮＰＣ屬性表(1, 1, 1, 1)
    薛之交屬性 = [
    5,
    5,
    0,
    0
    ]
}
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Released, function () {
    if (!(tiles.tileAtLocationIsWall(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).tilemapLocation().getNeighboringLocation(CollisionDirection.Top)))) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setImage(assets.image`角色2上`)
        玩家二Ｙ = 玩家二Ｙ - 1
        tiles.placeOnTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), tiles.getTileLocation(玩家二Ｘ, 玩家二Ｙ))
        pause(200)
    }
})
controller.player2.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Released, function () {
    if (!(tiles.tileAtLocationIsWall(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).tilemapLocation().getNeighboringLocation(CollisionDirection.Right)))) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setImage(assets.image`角色2右`)
        玩家二Ｘ = 玩家二Ｘ + 1
        tiles.placeOnTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), tiles.getTileLocation(玩家二Ｘ, 玩家二Ｙ))
        pause(200)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`我的貼圖1`, function (sprite, location) {
    sprites.destroyAllSpritesOfKind(SpriteKind.迷霧)
    sprites.destroyAllSpritesOfKind(SpriteKind.水)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setFlag(SpriteFlag.Invisible, true)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setFlag(SpriteFlag.Invisible, true)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)).setFlag(SpriteFlag.Invisible, true)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)).setFlag(SpriteFlag.Invisible, true)
    tiles.setTileAt(location, assets.tile`我的貼圖0`)
    tiles.setCurrentTilemap(tilemap`層級3`)
    scene.setBackgroundImage(assets.image`我的影像2`)
    game.showLongText("發現一艘船！", DialogLayout.Bottom)
    game.showLongText("可以渡海了！", DialogLayout.Bottom)
    game.splash("一群人遇到什麼樣的冒險呢？")
})
function 所有NPC的位置 () {
    tiles.placeOnTile(薛之交, tiles.getTileLocation(5, 5))
    tiles.placeOnTile(火鍋店家, tiles.getTileLocation(6, 6))
    tiles.placeOnTile(冰淇淋店家, tiles.getTileLocation(5, 16))
    tiles.placeOnTile(小王, tiles.getTileLocation(20, 3))
    tiles.placeOnTile(小白, tiles.getTileLocation(18, 8))
    tiles.placeOnTile(小明, tiles.getTileLocation(10, 20))
    tiles.placeOnTile(小黃, tiles.getTileLocation(12, 16))
    tiles.placeOnTile(小黑, tiles.getTileLocation(12, 2))
}
controller.player1.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Released, function () {
    if (!(tiles.tileAtLocationIsWall(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).tilemapLocation().getNeighboringLocation(CollisionDirection.Bottom)))) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setImage(assets.image`角色1下`)
        玩家一Ｙ = 玩家一Ｙ + 1
        tiles.placeOnTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), tiles.getTileLocation(玩家一Ｘ, 玩家一Ｙ))
        pause(200)
    }
})
controller.player1.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Released, function () {
    if (!(tiles.tileAtLocationIsWall(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).tilemapLocation().getNeighboringLocation(CollisionDirection.Right)))) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setImage(assets.image`角色1右`)
        玩家一Ｘ = 玩家一Ｘ + 1
        tiles.placeOnTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), tiles.getTileLocation(玩家一Ｘ, 玩家一Ｙ))
        pause(200)
    }
})
controller.player3.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Released, function () {
    if (!(tiles.tileAtLocationIsWall(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)).tilemapLocation().getNeighboringLocation(CollisionDirection.Top)))) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)).setImage(assets.image`角色3上`)
        玩家三Ｙ = 玩家三Ｙ - 1
        tiles.placeOnTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)), tiles.getTileLocation(玩家三Ｘ, 玩家三Ｙ))
        pause(200)
    }
})
function 新增迷霧 () {
    Ｘ軸 = 0
    Ｙ軸 = 0
}
function 玩家與遊戲初始化 () {
    tiles.setCurrentTilemap(tilemap`背景1`)
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(assets.image`我的影像11`, SpriteKind.Player))
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(assets.image`角色2`, SpriteKind.Player))
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three), sprites.create(assets.image`角色3`, SpriteKind.Player))
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four), sprites.create(assets.image`角色4`, SpriteKind.Player))
    tiles.placeOnTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), tiles.getTileLocation(玩家一Ｘ, 玩家一Ｙ))
    tiles.placeOnTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), tiles.getTileLocation(玩家二Ｘ, 玩家二Ｙ))
    tiles.placeOnTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)), tiles.getTileLocation(玩家三Ｘ, 玩家三Ｙ))
    tiles.placeOnTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)), tiles.getTileLocation(玩家四Ｘ, 玩家四Ｙ))
}
controller.player1.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Released, function () {
    if (!(tiles.tileAtLocationIsWall(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).tilemapLocation().getNeighboringLocation(CollisionDirection.Left)))) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setImage(assets.image`角色1左`)
        玩家一Ｘ = 玩家一Ｘ - 1
        tiles.placeOnTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), tiles.getTileLocation(玩家一Ｘ, 玩家一Ｙ))
        pause(200)
    }
})
controller.player4.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Released, function () {
    if (!(tiles.tileAtLocationIsWall(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)).tilemapLocation().getNeighboringLocation(CollisionDirection.Left)))) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)).setImage(assets.image`角色4左`)
        玩家四Ｘ = 玩家四Ｘ - 1
        tiles.placeOnTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)), tiles.getTileLocation(玩家四Ｘ, 玩家四Ｙ))
        pause(200)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.迷霧, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
})
controller.player4.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Released, function () {
    if (!(tiles.tileAtLocationIsWall(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)).tilemapLocation().getNeighboringLocation(CollisionDirection.Top)))) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)).setImage(assets.image`角色4上`)
        玩家四Ｙ = 玩家四Ｙ - 1
        tiles.placeOnTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)), tiles.getTileLocation(玩家四Ｘ, 玩家四Ｙ))
        pause(200)
    }
})
controller.player2.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Released, function () {
    scene.cameraFollowSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)))
})
controller.player1.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Released, function () {
    scene.cameraFollowSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))
})
function NPC出現 (NPCＸ: number, NPCＹ: number) {
    角色座標陣列 = [
    玩家一Ｘ,
    玩家一Ｙ,
    玩家二Ｘ,
    玩家二Ｙ,
    玩家三Ｘ,
    玩家三Ｙ,
    玩家四Ｘ,
    玩家四Ｙ
    ]
    for (let index = 0; index <= 3; index++) {
        if (角色座標陣列[index * 2] - NPCＸ == 0 && 角色座標陣列[index * 2 + 1] - NPCＹ == 0) {
            誰踩到 = index + 1
        }
    }
    if (!(誰踩到 == 0) && (!(角色座標陣列[(誰踩到 - 1) * 2] - NPCＸ == 0) || !(角色座標陣列[誰踩到 * 2 - 1] - NPCＹ == 0))) {
        有沒有人離開了 = 1
    }
    if (!(有沒有人離開了 == 0)) {
        for (let index = 0; index <= 3; index++) {
            if (角色座標陣列[index * 2] - NPCＸ == 0 && 角色座標陣列[index * 2 + 1] - NPCＹ == 0) {
                薛之交.setFlag(SpriteFlag.Invisible, false)
                薛之交.setFlag(SpriteFlag.Ghost, false)
                誰踩到 = 0
                有沒有人離開了 = 0
            }
        }
    }
}
function 初始化變數 () {
    玩家一Ｘ = 1
    玩家一Ｙ = 1
    玩家二Ｘ = 24
    玩家二Ｙ = 2
    玩家三Ｘ = 2
    玩家三Ｙ = 21
    玩家四Ｘ = 11
    玩家四Ｙ = 6
    誰踩到 = 0
    有沒有人離開了 = 0
}
let 有沒有人離開了 = 0
let 誰踩到 = 0
let 角色座標陣列: number[] = []
let Ｙ軸 = 0
let Ｘ軸 = 0
let 薛之交屬性: number[] = []
let 小黃: Sprite = null
let 小黑: Sprite = null
let 小白: Sprite = null
let 小王: Sprite = null
let 小明: Sprite = null
let 冰淇淋店家: Sprite = null
let 火鍋店家: Sprite = null
let 薛之交: Sprite = null
let 玩家一Ｙ = 0
let 玩家一Ｘ = 0
let 玩家四Ｘ = 0
let 玩家四Ｙ = 0
let 玩家三Ｙ = 0
let 玩家三Ｘ = 0
let 玩家二Ｘ = 0
let 玩家二Ｙ = 0
let 水: Sprite = null
let 全部的角色: Sprite[] = []
初始化變數()
玩家與遊戲初始化()
所有NPC建立角色效果初始化(全部的角色)
所有NPC的位置()
新增迷霧()
for (let index = 0; index <= 20; index++) {
    水 = sprites.create(img`
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        `, SpriteKind.水)
    水.setFlag(SpriteFlag.Invisible, true)
    tiles.placeOnTile(水, tiles.getTileLocation(33 - index, 2 + index))
}
game.setDialogFrame(img`
    .....cccccccccccccc.....
    ...cbd111111111111dbc...
    ..cd1111111111111111dc..
    .cd111111111111111111dc.
    .b11111111111111111111b.
    cd11111111111111111111dc
    c1111111111111111111111c
    c1111111111111111111111c
    c1111111111111111111111c
    c1111111111111111111111c
    c1111111111111111111111c
    c1111111111111111111111c
    c1111111111111111111111c
    c1111111111111111111111c
    c1111111111111111111111c
    c1111111111111111111111c
    c1111111111111111111111c
    cd11111111111111111111dc
    .b11111111111111111111b.
    .cd111111111111111111dc.
    ..cd1111111111111111dc..
    ..b11d111111111111dbc...
    .b11bcccccccccccccc.....
    ccccc...................
    `)
game.showLongText("來自四面八方的勇者小隊穿越時空，回到了170年前的時代...", DialogLayout.Full)
scene.cameraFollowSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))
tiles.setTileAt(tiles.getTileLocation(20, 14), assets.tile`我的貼圖1`)
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setImage(assets.image`我的影像12`)
pause(10)
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setImage(assets.image`我的影像10`)
pause(10)
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setImage(assets.image`我的影像4`)
pause(10)
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setImage(assets.image`我的影像9`)
pause(10)
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setImage(assets.image`我的影像`)
pause(10)
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setImage(assets.image`我的影像0`)
pause(10)
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setImage(assets.image`我的影像7`)
forever(function () {
    if (玩家一Ｘ == 1 && 玩家一Ｙ == 2 || 玩家一Ｘ == 2 && 玩家一Ｙ == 1) {
        story.spriteSayText(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), "這裡是哪裡，到處看看吧！", 15, 1, story.TextSpeed.Slow)
    }
})
forever(function () {
	
})

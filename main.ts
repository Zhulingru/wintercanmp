namespace SpriteKind {
    export const 物件 = SpriteKind.create()
    export const 迷霧 = SpriteKind.create()
    export const NPC = SpriteKind.create()
    export const 水 = SpriteKind.create()
    export const 其他勇者 = SpriteKind.create()
    export const 頭像 = SpriteKind.create()
    export const 補牌 = SpriteKind.create()
    export const 重置 = SpriteKind.create()
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
    pause(100)
    if (otherSprite == 薛之交) {
        if (渡海搜集 == 1 && (火鍋搜集 == 1 && 冰淇淋搜集 == 1)) {
            story.spriteSayText(otherSprite, "什麼！？你要度海啊", 15, 1, story.TextSpeed.Slow)
            story.spriteSayText(otherSprite, "其實我也是一名木材商人", 15, 1, story.TextSpeed.Slow)
            story.spriteSayText(otherSprite, "這個拿去吧，你會用到", 15, 1, story.TextSpeed.Slow)
            story.spriteSayText(otherSprite, "去找那隻黃色的鴨子吧", 15, 1, story.TextSpeed.Slow)
            game.splash("你獲得了木材")
            渡海搜集 = 2
        } else if (火鍋搜集 == 1 && 冰淇淋搜集 == 1) {
            story.spriteSayText(otherSprite, "謝謝你！其實我叫薛之交", 15, 1, story.TextSpeed.Slow)
            story.spriteSayText(otherSprite, "我教你一招：傳統文化占卜術！", 15, 1, story.TextSpeed.Slow)
            game.splash("習得技能！")
        } else {
            story.spriteSayText(otherSprite, "好冷。。好熱。。", 15, 1, story.TextSpeed.Slow)
            story.spriteSayText(otherSprite, "幫幫我。。。。", 15, 1, story.TextSpeed.Slow)
            story.spriteSayText(otherSprite, "我想吃火鍋，也想吃冰淇淋", 15, 1, story.TextSpeed.Slow)
        }
    } else if (otherSprite == 火鍋店家) {
        story.spriteSayText(otherSprite, "我是一個火鍋店家", 15, 1, story.TextSpeed.Slow)
        story.spriteSayText(otherSprite, "我的火鍋可以治療冷熱病", 15, 1, story.TextSpeed.Slow)
        story.spriteSayText(otherSprite, "但是我把它忘在外面了", 15, 1, story.TextSpeed.Slow)
        story.spriteSayText(otherSprite, "去找找看吧！", 15, 1, story.TextSpeed.Slow)
    } else if (otherSprite == 冰淇淋店家) {
        story.spriteSayText(otherSprite, "我是一個冰淇淋店家", 15, 1, story.TextSpeed.Slow)
        story.spriteSayText(otherSprite, "最近的冷熱病真的好可怕", 15, 1, story.TextSpeed.Slow)
        story.spriteSayText(otherSprite, "你要注意身體啊！", 15, 1, story.TextSpeed.Slow)
    } else if (otherSprite == 小王) {
        if (渡海搜集 == 2) {
            story.spriteSayText(otherSprite, "這樣啊。。你帶來木材", 15, 1, story.TextSpeed.Slow)
            story.spriteSayText(otherSprite, "那你可以有特權", 15, 1, story.TextSpeed.Slow)
            story.spriteSayText(otherSprite, "這個給你吧，船快要開了！", 15, 1, story.TextSpeed.Slow)
            渡海搜集 = 3
            game.splash("獲得：船票")
        } else {
            story.spriteSayText(otherSprite, "在右下角有一片海洋。。", 15, 1, story.TextSpeed.Slow)
            story.spriteSayText(otherSprite, "想要渡海，就必須要有船", 15, 1, story.TextSpeed.Slow)
        }
    } else if (otherSprite == 小白) {
        story.spriteSayText(otherSprite, "要渡海就去找薛之交吧", 15, 1, story.TextSpeed.Slow)
        story.spriteSayText(otherSprite, "那傢伙有香蕉不吃", 15, 1, story.TextSpeed.Slow)
        story.spriteSayText(otherSprite, "特別喜歡火鍋冰淇淋", 15, 1, story.TextSpeed.Slow)
        story.spriteSayText(otherSprite, "但他脾氣古怪", 15, 1, story.TextSpeed.Slow)
        story.spriteSayText(otherSprite, "需要先討他開心", 15, 1, story.TextSpeed.Slow)
        渡海搜集 = 1
    } else if (otherSprite == 小明) {
        story.spriteSayText(otherSprite, "你們看起來不像村裡的人", 15, 1, story.TextSpeed.Slow)
        story.spriteSayText(otherSprite, "在村子裡有一個可怕的魔王", 15, 1, story.TextSpeed.Slow)
        story.spriteSayText(otherSprite, "建議你組隊才有機會打敗他", 15, 1, story.TextSpeed.Slow)
    } else if (otherSprite == 小黃) {
        story.spriteSayText(otherSprite, "最近的洪患真可怕", 15, 1, story.TextSpeed.Slow)
        story.spriteSayText(otherSprite, "還有魔王小兵帶來的疾病", 15, 1, story.TextSpeed.Slow)
        story.spriteSayText(otherSprite, "快煩死了", 15, 1, story.TextSpeed.Slow)
    } else if (otherSprite == 小黑) {
        story.spriteSayText(otherSprite, "東南方的海域很可怕", 15, 1, story.TextSpeed.Slow)
        story.spriteSayText(otherSprite, "什麼？你說東南方在哪", 15, 1, story.TextSpeed.Slow)
        story.spriteSayText(otherSprite, "當然是在右下角。。", 15, 1, story.TextSpeed.Slow)
    } else if (otherSprite == mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two))) {
        story.spriteSayText(otherSprite, "你也是來到這裡的人嗎？", 15, 1, story.TextSpeed.Slow)
        story.spriteSayText(otherSprite, "讓我加入你一起打敗魔王吧！", 15, 1, story.TextSpeed.Slow)
        story.spriteSayText(otherSprite, "對了，這是我在路上撿到的", 15, 1, story.TextSpeed.Slow)
        game.splash("獲得：翻譯吐司")
        game.splash("同安加入了隊伍")
        sprites.destroy(otherSprite, effects.smiles, 500)
        隊伍人數 += 1
        角色二頭像.setFlag(SpriteFlag.Invisible, false)
    } else if (otherSprite == mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three))) {
        story.spriteSayText(otherSprite, "總共有四個人掉落到這。。", 15, 1, story.TextSpeed.Slow)
        story.spriteSayText(otherSprite, "我就勉為其難跟你一隊吧", 15, 1, story.TextSpeed.Slow)
        story.spriteSayText(otherSprite, "我來到這後手上多了這個。。", 15, 1, story.TextSpeed.Slow)
        game.splash("獲得：月亮")
        game.splash("薛樂加入了隊伍")
        sprites.destroy(otherSprite, effects.rings, 500)
        隊伍人數 += 1
        角色三頭像.setFlag(SpriteFlag.Invisible, false)
    } else if (otherSprite == mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four))) {
        story.spriteSayText(otherSprite, "勇者小隊的大家在哪裡？", 15, 1, story.TextSpeed.Slow)
        story.spriteSayText(otherSprite, "我剛剛在右下角發現海洋", 15, 1, story.TextSpeed.Slow)
        story.spriteSayText(otherSprite, "我跟你一起去找大家！", 15, 1, story.TextSpeed.Slow)
        game.splash("柯寂獠加入了隊伍")
        sprites.destroy(otherSprite, effects.hearts, 500)
        隊伍人數 += 1
        角色四頭像.setFlag(SpriteFlag.Invisible, false)
    } else if (otherSprite == 火鍋) {
        story.spriteSayText(sprite, "地上怎麼可能會有火鍋？")
        game.splash("獲得：火鍋")
        火鍋搜集 = 1
    } else if (otherSprite == 冰淇淋) {
        story.spriteSayText(sprite, "這麼大的冰淇淋第一次見到。。")
        game.splash("獲得：冰淇淋")
        冰淇淋搜集 = 1
        sprites.destroy(otherSprite, effects.spray, 500)
    } else {
    	
    }
    延遲()
})
function 補牌點 (X: number, Y: number) {
    補牌 = sprites.create(img`
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        `, SpriteKind.補牌)
    tiles.placeOnTile(補牌, tiles.getTileLocation(X, Y))
}
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
function 所有NPC建立角色效果初始化 (角色們: any[]) {
	
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.補牌, function (sprite, otherSprite) {
    pause(100)
    game.splash("補充體力～～～！")
    延遲()
})
function 補牌統整 () {
    補牌點(1, 4)
    補牌點(1, 16)
    補牌點(5, 10)
    補牌點(9, 1)
    補牌點(13, 11)
    補牌點(12, 17)
    補牌點(9, 22)
    補牌點(19, 13)
    補牌點(19, 5)
    補牌點(24, 1)
    補牌點(27, 6)
    補牌點(33, 1)
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.重置, function (sprite, otherSprite) {
    pause(100)
    game.splash("重置啦！！繼續挑戰")
    延遲()
})
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
    if (渡海搜集 == 3 && 隊伍人數 == 3) {
        sprites.destroyAllSpritesOfKind(SpriteKind.迷霧)
        sprites.destroyAllSpritesOfKind(SpriteKind.水)
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setFlag(SpriteFlag.Invisible, true)
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setFlag(SpriteFlag.Invisible, true)
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)).setFlag(SpriteFlag.Invisible, true)
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)).setFlag(SpriteFlag.Invisible, true)
        tiles.setTileAt(location, assets.tile`我的貼圖0`)
        tiles.setCurrentTilemap(tilemap`層級3`)
        scene.setBackgroundImage(assets.image`我的影像2`)
        角色二頭像.setFlag(SpriteFlag.Invisible, true)
        角色三頭像.setFlag(SpriteFlag.Invisible, true)
        角色四頭像.setFlag(SpriteFlag.Invisible, true)
        game.showLongText("發現一艘船！", DialogLayout.Bottom)
        game.showLongText("隊伍人數足夠", DialogLayout.Bottom)
        game.showLongText("使用黃色小鴨的船票", DialogLayout.Bottom)
        game.showLongText("可以渡海了！", DialogLayout.Bottom)
        game.splash("警告：冷熱病的兇手入侵")
        game.splash("請準備戰鬥")
        game.splash("更換：打敗魔王檔案")
    } else {
        game.showLongText("發現一艘船！", DialogLayout.Center)
        game.showLongText("前方有點危險，隊伍人數可能不夠", DialogLayout.Center)
        game.showLongText("而且沒有船票。。", DialogLayout.Center)
        game.showLongText("還是回村莊看看們好了。。", DialogLayout.Center)
        玩家一Ｘ = 玩家一Ｘ - 1
        玩家一Ｙ = 玩家一Ｙ - 1
        tiles.placeOnTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), tiles.getTileLocation(玩家一Ｘ, 玩家一Ｙ))
    }
})
function 所有NPC的位置 () {
    tiles.placeOnTile(薛之交, tiles.getTileLocation(5, 5))
    tiles.placeOnTile(火鍋店家, tiles.getTileLocation(8, 8))
    tiles.placeOnTile(冰淇淋店家, tiles.getTileLocation(5, 16))
    tiles.placeOnTile(小明, tiles.getTileLocation(10, 20))
    tiles.placeOnTile(小王, tiles.getTileLocation(20, 3))
    tiles.placeOnTile(小白, tiles.getTileLocation(18, 8))
    tiles.placeOnTile(小黑, tiles.getTileLocation(12, 2))
    tiles.placeOnTile(小黃, tiles.getTileLocation(12, 16))
    tiles.placeOnTile(火鍋, tiles.getTileLocation(17, 17))
    tiles.placeOnTile(冰淇淋, tiles.getTileLocation(3, 16))
}
controller.player1.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Released, function () {
    if (!(tiles.tileAtLocationIsWall(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).tilemapLocation().getNeighboringLocation(CollisionDirection.Bottom)))) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setImage(assets.image`角色1下`)
        玩家一Ｙ = 玩家一Ｙ + 1
        tiles.placeOnTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), tiles.getTileLocation(玩家一Ｘ, 玩家一Ｙ))
        pause(200)
    }
})
function 重置統整 () {
    重置點(5, 8)
    重置點(9, 10)
    重置點(8, 16)
    重置點(13, 21)
    重置點(17, 2)
    重置點(15, 5)
    重置點(10, 1)
}
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
    迷霧角色 = sprites.create(assets.image`我的影像3`, SpriteKind.迷霧)
    tiles.placeOnTile(迷霧角色, tiles.getTileLocation(Ｘ軸 + 1, Ｙ軸 + 1))
}
function 玩家與遊戲初始化 () {
    tiles.setCurrentTilemap(tilemap`背景1`)
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(assets.image`我的影像11`, SpriteKind.Player))
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(assets.image`角色2`, SpriteKind.NPC))
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three), sprites.create(assets.image`角色3`, SpriteKind.NPC))
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four), sprites.create(assets.image`角色4`, SpriteKind.NPC))
    tiles.placeOnTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), tiles.getTileLocation(玩家一Ｘ, 玩家一Ｙ))
    tiles.placeOnTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), tiles.getTileLocation(玩家二Ｘ, 玩家二Ｙ))
    tiles.placeOnTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)), tiles.getTileLocation(玩家三Ｘ, 玩家三Ｙ))
    tiles.placeOnTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)), tiles.getTileLocation(玩家四Ｘ, 玩家四Ｙ))
    角色二頭像 = sprites.create(assets.image`角色二頭像`, SpriteKind.頭像)
    角色三頭像 = sprites.create(assets.image`角色三頭像`, SpriteKind.頭像)
    角色四頭像 = sprites.create(assets.image`角色四頭像`, SpriteKind.頭像)
    角色二頭像.setFlag(SpriteFlag.Invisible, true)
    角色三頭像.setFlag(SpriteFlag.Invisible, true)
    角色四頭像.setFlag(SpriteFlag.Invisible, true)
}
function 角色清單 () {
    薛之交 = sprites.create(assets.image`薛之交`, SpriteKind.NPC)
    火鍋店家 = sprites.create(assets.image`火鍋店家`, SpriteKind.NPC)
    冰淇淋店家 = sprites.create(assets.image`冰淇淋店家`, SpriteKind.NPC)
    小明 = sprites.create(assets.image`小明`, SpriteKind.NPC)
    小王 = sprites.create(assets.image`小王`, SpriteKind.NPC)
    小白 = sprites.create(assets.image`小白`, SpriteKind.NPC)
    小黑 = sprites.create(assets.image`小黑`, SpriteKind.NPC)
    小黃 = sprites.create(assets.image`小黃`, SpriteKind.NPC)
    火鍋 = sprites.create(assets.image`火鍋`, SpriteKind.NPC)
    冰淇淋 = sprites.create(assets.image`冰淇淋`, SpriteKind.NPC)
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
function 重置點 (X: number, Y: number) {
    重置格 = sprites.create(assets.image`重置`, SpriteKind.重置)
    tiles.placeOnTile(重置格, tiles.getTileLocation(X, Y))
}
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
function NPC物件表 () {
	
}
function 延遲 () {
    pause(200)
    pauseUntil(() => controller.anyButton.isPressed())
    pause(200)
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
    火鍋搜集 = 0
    渡海搜集 = 0
    隊伍人數 = 0
}
let 重置格: Sprite = null
let 迷霧角色: Sprite = null
let Ｙ軸 = 0
let Ｘ軸 = 0
let 玩家一Ｙ = 0
let 玩家一Ｘ = 0
let 玩家四Ｘ = 0
let 玩家四Ｙ = 0
let 玩家三Ｙ = 0
let 玩家三Ｘ = 0
let 補牌: Sprite = null
let 角色四頭像: Sprite = null
let 角色三頭像: Sprite = null
let 角色二頭像: Sprite = null
let 隊伍人數 = 0
let 冰淇淋搜集 = 0
let 火鍋搜集 = 0
let 渡海搜集 = 0
let 冰淇淋: Sprite = null
let 火鍋: Sprite = null
let 小黑: Sprite = null
let 小黃: Sprite = null
let 小明: Sprite = null
let 小白: Sprite = null
let 小王: Sprite = null
let 冰淇淋店家: Sprite = null
let 火鍋店家: Sprite = null
let 薛之交: Sprite = null
let 玩家二Ｘ = 0
let 玩家二Ｙ = 0
let 水: Sprite = null
初始化變數()
玩家與遊戲初始化()
角色清單()
所有NPC的位置()
補牌統整()
重置統整()
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
game.showLongText("來自四面八方的四位勇者小隊穿越時空，回到了170年前的時代...", DialogLayout.Full)
game.showLongText("掉落到一個村莊。。。", DialogLayout.Full)
game.showLongText("先去探索一下環境吧", DialogLayout.Full)
scene.cameraFollowSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))
tiles.setTileAt(tiles.getTileLocation(20, 14), assets.tile`我的貼圖1`)
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setImage(assets.image`我的影像12`)
pause(100)
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setImage(assets.image`我的影像10`)
pause(100)
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setImage(assets.image`我的影像4`)
pause(100)
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setImage(assets.image`我的影像9`)
pause(100)
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setImage(assets.image`我的影像`)
pause(100)
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setImage(assets.image`我的影像0`)
pause(100)
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setImage(assets.image`我的影像7`)
game.onUpdate(function () {
    角色二頭像.setPosition(scene.cameraProperty(CameraProperty.X) - 55, scene.cameraProperty(CameraProperty.Y) + 50)
    角色三頭像.setPosition(scene.cameraProperty(CameraProperty.X) - 35, scene.cameraProperty(CameraProperty.Y) + 50)
    角色四頭像.setPosition(scene.cameraProperty(CameraProperty.X) - 15, scene.cameraProperty(CameraProperty.Y) + 50)
})
forever(function () {
    if (玩家一Ｘ == 1 && 玩家一Ｙ == 2 || 玩家一Ｘ == 2 && 玩家一Ｙ == 1) {
        story.spriteSayText(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), "這裡是哪裡，到處看看吧！", 15, 1, story.TextSpeed.Slow)
    }
})
// 本來要寫碰觸NPC，離開後，再碰到一次才有效果，但失敗。
forever(function () {
	
})

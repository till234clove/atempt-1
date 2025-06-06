controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (true) {
    	
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile16`, function (sprite, location) {
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprites.destroy(stars, effects.starField, 100)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(asteroids, effects.fire, 100)
    info.changeLifeBy(-1)
})
let asteroids: Sprite = null
let stars: Sprite = null
let hero = sprites.create(img`
    ........................
    ........................
    ........................
    ........ff.....f........
    .........ff...ff........
    ..........ff.ff.........
    ...........fff..........
    ...fffffffffffffffff....
    ...f24455776688aa33f....
    ...f24455776688aa33f....
    ...f241117766811133f....
    ...f241117766811133f....
    ...f2411f77668f1133f....
    ...f24455776688aa33f....
    ...f24455776688aa33f....
    ...f2445ff76ff8aa33f....
    ...f24455ffff88aa33f....
    ...f24455776688aa33f....
    ...fffffffffffffffff....
    .....fff.......fff......
    .....fff.......fff......
    ........................
    ........................
    ........................
    `, SpriteKind.Player)
controller.moveSprite(hero)
tiles.setTilemap(tilemap`level2`)
hero.setStayInScreen(false)
scene.cameraFollowSprite(hero)
info.startCountdown(10000)
info.setLife(3)
game.setGameOverScoringType(game.ScoringType.HighScore)
tiles.placeOnRandomTile(hero, assets.tile`myTile15`)
game.onUpdateInterval(5000, function () {
    stars = sprites.createProjectileFromSide(img`
        . . . . . . . b b . . . . . . . 
        . . . . . . b d d b . . . . . . 
        . . . . . b d 5 5 d b . . . . . 
        . . . . b b 5 5 5 5 b b . . . . 
        . . . . b 5 5 5 5 5 5 b . . . . 
        b b b b b 5 5 5 5 1 1 d b b b b 
        b 5 5 5 5 5 5 5 5 1 1 1 5 5 5 b 
        b d d 5 5 5 5 5 5 1 1 1 5 d d b 
        . b d d 5 5 5 5 5 5 5 5 d d b . 
        . . b b 5 5 5 5 5 5 5 5 b b . . 
        . . c b 5 5 5 5 5 5 5 5 b c . . 
        . . c 5 5 5 5 d d 5 5 5 5 c . . 
        . . c 5 5 d b b b b d 5 5 c . . 
        . . c 5 d b c c c c b d 5 c . . 
        . . c c c c . . . . c c c c . . 
        . . . . . . . . . . . . . . . . 
        `, 50, randint(-50, 50))
    asteroids = sprites.createProjectileFromSide(img`
        ....................
        ....................
        ....................
        ......ffffff........
        .....ff3f333f.......
        ....f3333333ff......
        ....f33331113ffff...
        ...f333331f13f444ff.
        ...f333331113f44fff.
        ...ff33333333ffff...
        ....f3333333fff.....
        .....ffffffff.......
        .....ff33333ff......
        ....ff3333333f......
        .....f3333333f......
        .....f333333ff......
        .....ffff3fff.......
        .......ffffff.......
        .......f....f.......
        ......ffff..fff.....
        `, randint(-50, 50), randint(-50, 50))
    asteroids.setKind(SpriteKind.Enemy)
})

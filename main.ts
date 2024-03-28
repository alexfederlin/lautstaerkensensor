input.calibrateCompass()
basic.forever(function () {
    if (input.soundLevel() > 0 && input.soundLevel() < 20) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
    }
    if (input.soundLevel() > 20 && input.soundLevel() < 40) {
        basic.showLeds(`
            . . # . .
            . . . . .
            # . # . #
            . . . . .
            . . # . .
            `)
    }
    if (input.soundLevel() >= 40 && input.soundLevel() < 60) {
        basic.showLeds(`
            # # . # #
            # # # # #
            . # . # .
            # # # # #
            # # . # #
            `)
    }
    if (input.soundLevel() >= 60 && input.soundLevel() < 80) {
        basic.showLeds(`
            . . # . .
            . # . # .
            # # # # #
            . # . # .
            . . # . .
            `)
    }
    if (input.soundLevel() >= 80 && input.soundLevel() < 100) {
        basic.showLeds(`
            # . # . #
            # . # . #
            # . # . #
            # . # . #
            # . # . #
            `)
    }
    if (input.soundLevel() > 100) {
        basic.showLeds(`
            # # . # #
            # # . # #
            # # . # #
            # # . # #
            . # . # .
            `)
    }
})

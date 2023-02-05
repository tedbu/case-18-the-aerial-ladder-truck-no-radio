input.onButtonPressed(Button.A, function () {
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S7, 72)
})
input.onButtonPressed(Button.AB, function () {
    wuKong.stopAllMotor()
    basic.showLeds(`
        . . . . .
        # # . # #
        . . . . .
        . # # # .
        # . . . #
        `)
})
input.onButtonPressed(Button.B, function () {
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S7, 20)
})
basic.showIcon(IconNames.Duck)

function jedRovne () {
    wuKong.setAllMotor(-80, -80)
    basic.showIcon(IconNames.House)
}
input.onButtonPressed(Button.A, function () {
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S7, 72)
})
function jedDoleva () {
    wuKong.setAllMotor(0, -80)
    basic.showLeds(`
        . . # . .
        . # # # #
        # # # # .
        . # # # #
        . . # . .
        `)
}
input.onButtonPressed(Button.AB, function () {
    wuKong.stopAllMotor()
    basic.showLeds(`
        # # . # #
        # # # # #
        . # # # .
        # # # # #
        # # . # #
        `)
})
input.onButtonPressed(Button.B, function () {
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S7, 20)
})
function jedDoprava () {
    wuKong.setAllMotor(-80, 0)
    basic.showLeds(`
        . . # . .
        # # # # .
        . # # # #
        # # # # .
        . . # . .
        `)
}
basic.showIcon(IconNames.Duck)
pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P2) == 0) {
        jedRovne()
    } else if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P2) == 1) {
        jedDoprava()
    } else if (pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P2) == 0) {
        jedDoleva()
    }
})

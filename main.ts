radio.onReceivedNumberDeprecated(function (receivedNumber) {
    received = receivedNumber
})
let received = 0
radio.setGroup(1)
received = 4
basic.forever(function () {
    if (received == 0) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        pins.analogWritePin(AnalogPin.P0, 100)
        pins.analogWritePin(AnalogPin.P1, 10)
    } else if (received == 1) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        pins.analogWritePin(AnalogPin.P0, 10)
        pins.analogWritePin(AnalogPin.P1, 100)
    } else if (received == 2) {
        pins.analogWritePin(AnalogPin.P0, 20)
        pins.analogWritePin(AnalogPin.P1, 20)
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else if (received == 3) {
        pins.analogWritePin(AnalogPin.P0, 80)
        pins.analogWritePin(AnalogPin.P1, 80)
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else if (true) {
        pins.analogWritePin(AnalogPin.P0, 0)
        pins.analogWritePin(AnalogPin.P1, 0)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})

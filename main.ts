function blinkAllSingleColor (color: number) {
    Strip1.showColor(color)
    Strip2.showColor(color)
    Strip3.showColor(color)
    Strip4.showColor(color)
    basic.pause(1000)
    Strip1.showColor(neopixel.colors(NeoPixelColors.Black))
    Strip3.showColor(neopixel.colors(NeoPixelColors.Black))
    Strip2.showColor(neopixel.colors(NeoPixelColors.Black))
    Strip4.showColor(neopixel.colors(NeoPixelColors.Black))
    basic.pause(1000)
}
function circleAllRainbow () {
    Strip1.showRainbow(1, 360)
    basic.pause(500)
    Strip1.showColor(neopixel.colors(NeoPixelColors.Black))
    Strip2.showRainbow(1, 360)
    basic.pause(500)
    Strip2.showColor(neopixel.colors(NeoPixelColors.Black))
    Strip3.showRainbow(1, 360)
    basic.pause(500)
    Strip3.showColor(neopixel.colors(NeoPixelColors.Black))
    Strip4.showRainbow(1, 360)
    basic.pause(500)
    Strip4.showColor(neopixel.colors(NeoPixelColors.Black))
}
function rotateAllRainbow () {
    Strip1.showRainbow(1, 360)
    Strip2.showRainbow(1, 360)
    Strip3.showRainbow(1, 360)
    Strip4.showRainbow(1, 360)
    for (let index = 0; index <= Strip1.length(); index++) {
        Strip1.rotate(1)
        Strip1.show()
        Strip2.rotate(1)
        Strip2.show()
        Strip3.rotate(1)
        Strip3.show()
        Strip4.rotate(1)
        Strip4.show()
        basic.pause(200)
    }
}
function showAllRainbow () {
    Strip1.showRainbow(1, 360)
    Strip2.showRainbow(1, 360)
    Strip3.showRainbow(1, 360)
    Strip4.showRainbow(1, 360)
}
function showFourSingleColor (color1: number, color2: number, color3: number, color4: number) {
    Strip1.showColor(color1)
    Strip2.showColor(color2)
    Strip3.showColor(color3)
    Strip4.showColor(color4)
}
input.onButtonPressed(Button.A, function () {
    if (RTC_DS1307.getTime(RTC_DS1307.TimeType.HOUR) < 23) {
        RTC_DS1307.setTime(RTC_DS1307.TimeType.HOUR, RTC_DS1307.getTime(RTC_DS1307.TimeType.HOUR) + 1)
    } else {
        RTC_DS1307.setTime(RTC_DS1307.TimeType.HOUR, 0)
    }
})
function circleAllSingleColor (color: number) {
    Strip1.showColor(color)
    basic.pause(500)
    Strip1.showColor(neopixel.colors(NeoPixelColors.Black))
    Strip2.showColor(color)
    basic.pause(500)
    Strip2.showColor(neopixel.colors(NeoPixelColors.Black))
    Strip3.showColor(color)
    basic.pause(500)
    Strip3.showColor(neopixel.colors(NeoPixelColors.Black))
    Strip4.showColor(color)
    basic.pause(500)
    Strip4.showColor(neopixel.colors(NeoPixelColors.Black))
}
function shiftAllRainbow () {
    Strip1.showRainbow(1, 360)
    Strip2.showRainbow(1, 360)
    Strip3.showRainbow(1, 360)
    Strip4.showRainbow(1, 360)
    for (let index2 = 0; index2 <= Strip1.length(); index2++) {
        Strip1.shift(1)
        Strip1.show()
        Strip2.shift(1)
        Strip2.show()
        Strip3.shift(1)
        Strip3.show()
        Strip4.shift(1)
        Strip4.show()
        basic.pause(500)
    }
}
function blinkAllRainbowColor () {
    Strip1.showRainbow(1, 360)
    Strip2.showRainbow(1, 360)
    Strip3.showRainbow(1, 360)
    Strip4.showRainbow(1, 360)
    basic.pause(1000)
    Strip1.showColor(neopixel.colors(NeoPixelColors.Black))
    Strip3.showColor(neopixel.colors(NeoPixelColors.Black))
    Strip2.showColor(neopixel.colors(NeoPixelColors.Black))
    Strip4.showColor(neopixel.colors(NeoPixelColors.Black))
    basic.pause(1000)
}
function blinkFourSingleColor (color1: number, color2: number, color3: number, color4: number) {
    Strip1.showColor(color1)
    Strip2.showColor(color2)
    Strip3.showColor(color3)
    Strip4.showColor(color4)
    basic.pause(1000)
    Strip1.showColor(neopixel.colors(NeoPixelColors.Black))
    Strip2.showColor(neopixel.colors(NeoPixelColors.Black))
    Strip3.showColor(neopixel.colors(NeoPixelColors.Black))
    Strip4.showColor(neopixel.colors(NeoPixelColors.Black))
    basic.pause(1000)
}
function showAllSingleColor (color: number) {
    Strip1.showColor(color)
    Strip2.showColor(color)
    Strip3.showColor(color)
    Strip4.showColor(color)
}
input.onButtonPressed(Button.B, function () {
    if (RTC_DS1307.getTime(RTC_DS1307.TimeType.MINUTE) < 59) {
        RTC_DS1307.setTime(RTC_DS1307.TimeType.MINUTE, RTC_DS1307.getTime(RTC_DS1307.TimeType.MINUTE) + 1)
    } else {
        RTC_DS1307.setTime(RTC_DS1307.TimeType.MINUTE, 0)
    }
})
input.onGesture(Gesture.Shake, function () {
    modeNumber = randint(0, 10)
    colorNumber = randint(0, 8)
    colorNumber1 = colorList[randint(0, 8)]
    colorNumber2 = colorList[randint(0, 8)]
    colorNumber3 = colorList[randint(0, 8)]
    colorNumber4 = colorList[randint(0, 8)]
})
function shiftAllSingleColor (color: number) {
    basic.pause(200)
    Strip1.showColor(color)
    Strip2.showColor(color)
    Strip3.showColor(color)
    Strip4.showColor(color)
    for (let index3 = 0; index3 <= Strip1.length(); index3++) {
        Strip1.shift(1)
        Strip1.show()
        Strip2.shift(1)
        Strip2.show()
        Strip3.shift(1)
        Strip3.show()
        Strip4.shift(1)
        Strip4.show()
        basic.pause(200)
    }
}
let time = 0
let colorNumber4 = 0
let colorNumber3 = 0
let colorNumber2 = 0
let colorNumber1 = 0
let colorList: number[] = []
let colorNumber = 0
let modeNumber = 0
let Strip4: neopixel.Strip = null
let Strip3: neopixel.Strip = null
let Strip2: neopixel.Strip = null
let Strip1: neopixel.Strip = null
Strip1 = neopixel.create(DigitalPin.P13, 15, NeoPixelMode.RGB)
Strip1.showColor(neopixel.colors(NeoPixelColors.Black))
Strip2 = neopixel.create(DigitalPin.P14, 15, NeoPixelMode.RGB)
Strip2.showColor(neopixel.colors(NeoPixelColors.Black))
Strip3 = neopixel.create(DigitalPin.P15, 15, NeoPixelMode.RGB)
Strip3.showColor(neopixel.colors(NeoPixelColors.Black))
Strip4 = neopixel.create(DigitalPin.P16, 15, NeoPixelMode.RGB)
Strip4.showColor(neopixel.colors(NeoPixelColors.Black))
let Display = TM1637.create(
DigitalPin.P2,
DigitalPin.P1,
7,
4
)
Display.clear()
modeNumber = 0
colorNumber = 0
colorList = [
neopixel.colors(NeoPixelColors.Red),
neopixel.colors(NeoPixelColors.Orange),
neopixel.colors(NeoPixelColors.Yellow),
neopixel.colors(NeoPixelColors.Green),
neopixel.colors(NeoPixelColors.Blue),
neopixel.colors(NeoPixelColors.Indigo),
neopixel.colors(NeoPixelColors.Violet),
neopixel.colors(NeoPixelColors.Purple),
neopixel.colors(NeoPixelColors.White)
]
RTC_DS1307.DateTime(
2025,
7,
25,
20,
25,
0
)
basic.forever(function () {
    time = RTC_DS1307.getTime(RTC_DS1307.TimeType.HOUR) * 100
    time = time + RTC_DS1307.getTime(RTC_DS1307.TimeType.MINUTE)
    Display.showNumber(time)
    Display.showDP(1, true)
    basic.showNumber(modeNumber)
    if (modeNumber == 0) {
        showAllSingleColor(colorNumber)
    }
    if (modeNumber == 1) {
        showFourSingleColor(colorNumber1, colorNumber2, colorNumber3, colorNumber4)
    }
    if (modeNumber == 2) {
        showAllRainbow()
    }
    if (modeNumber == 3) {
        shiftAllSingleColor(colorNumber)
    }
    if (modeNumber == 4) {
        shiftAllRainbow()
    }
    if (modeNumber == 5) {
        rotateAllRainbow()
    }
    if (modeNumber == 6) {
        blinkAllSingleColor(colorNumber)
    }
    if (modeNumber == 7) {
        blinkFourSingleColor(colorNumber1, colorNumber2, colorNumber3, colorNumber4)
    }
    if (modeNumber == 8) {
        blinkAllRainbowColor()
    }
    if (modeNumber == 9) {
        circleAllSingleColor(colorNumber)
    }
    if (modeNumber == 10) {
        circleAllRainbow()
    }
})

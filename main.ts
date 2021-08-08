function calc () {
    basic.clearScreen()
    calcVar1 = 0
    calcVar2 = 0
    calcVarOp = 0
    calcMenu1Pause = 1
    while (calcMenu1Pause == 1) {
        if (SysCall_ScrollUp == 1) {
            calcVar1 = calcVar1 + 1
            SysCall_ScrollUp = 0
            basic.showNumber(calcVar1)
        } else if (SysCall_ScrollDown == 1) {
            calcVar1 = calcVar1 - 1
            SysCall_ScrollDown = 0
            basic.showNumber(calcVar1)
        } else if (SysCall_OK == 1) {
            SysCall_OK = 0
            basic.clearScreen()
            calcMenu1Pause = 0
        }
    }
    calcMenu2Pause = 1
    while (calcMenu2Pause == 1) {
        if (SysCall_ScrollUp == 1) {
            calcVar2 = calcVar2 + 1
            SysCall_ScrollUp = 0
            basic.showNumber(calcVar2)
        } else if (SysCall_ScrollDown == 1) {
            calcVar2 = calcVar2 - 1
            SysCall_ScrollDown = 0
            basic.showNumber(calcVar2)
        } else if (SysCall_OK == 1) {
            SysCall_OK = 0
            basic.clearScreen()
            calcMenu2Pause = 0
        }
    }
    calcMenu3Pause = 1
    while (calcMenu3Pause == 1) {
        if (SysCall_ScrollUp == 1) {
            calcVarOp = calcVarOp + 1
            SysCall_ScrollUp = 0
            basic.showNumber(calcVarOp)
        } else if (SysCall_ScrollDown == 1) {
            calcVarOp = calcVarOp - 1
            SysCall_ScrollDown = 0
            basic.showNumber(calcVarOp)
        } else if (SysCall_OK == 1) {
            SysCall_OK = 0
            basic.clearScreen()
            calcMenu3Pause = 0
        }
    }
    currentProcess = "calc"
    if (calcVarOp == 0) {
        basic.showString("" + (calcVar1 + calcVar2))
        loadMenu()
    } else if (calcVarOp == 1) {
        basic.showString("" + (calcVar1 - calcVar2))
        loadMenu()
    } else if (calcVarOp == 2) {
        basic.showString("" + (calcVar1 * calcVar2))
        loadMenu()
    } else if (calcVarOp == 3) {
        basic.showString("" + (calcVar1 / calcVar2))
        loadMenu()
    } else {
        basic.showString("Error")
        loadMenu()
    }
}
input.onButtonPressed(Button.A, function () {
    SysCall_ScrollUp = 1
})
function loadMenu () {
    basic.clearScreen()
    menuPause = 1
    while (menuPause == 1) {
        if (SysCall_ScrollUp == 1) {
            selectedOption = selectedOption + 1
            SysCall_ScrollUp = 0
            basic.showNumber(selectedOption)
        } else if (SysCall_ScrollDown == 1) {
            selectedOption = selectedOption - 1
            SysCall_ScrollDown = 0
            basic.showNumber(selectedOption)
        } else if (SysCall_OK == 1) {
            SysCall_OK = 0
            basic.clearScreen()
            menuPause = 0
        }
    }
    bootTo(selectedOption)
}
function bootTo (num: number) {
    basic.clearScreen()
    if (num == 0) {
        basic.clearScreen()
        loadMenu()
    } else if (num == 1) {
        basic.showString("OpenROM v1.2")
        loadMenu()
    } else if (num == 2) {
        music.playMelody("C5 G A D F B E C ", 120)
        loadMenu()
    } else if (num == 3) {
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
        loadMenu()
    } else if (num == 4) {
        radio.sendString("MbitDRSent")
        loadMenu()
    } else if (num == 5) {
        calc()
        loadMenu()
    } else {
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
    }
}
input.onButtonPressed(Button.AB, function () {
    SysCall_OK = 0
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "MbitDRSent") {
        basic.showString("Message Recieved. Send back?")
        radio.sendString("MbitDRReply")
        loadMenu()
    } else if (receivedString == "MbitDRReply") {
        basic.showString("Message Reply detected.")
        loadMenu()
    }
})
input.onButtonPressed(Button.B, function () {
    SysCall_ScrollDown = 0
})
let selectedOption = 0
let calcVarOp = 0
let calcVar2 = 0
let calcVar1 = 0
let SysCall_ScrollUp = 0
let SysCall_ScrollDown = 0
let SysCall_OK = 0
let currentProcess = ""
let menuPause = 0
let calcMenu3Pause = 0
let calcMenu2Pause = 0
let calcMenu1Pause = 0
calcMenu1Pause = 0
calcMenu2Pause = 0
calcMenu3Pause = 0
menuPause = 0
currentProcess = "boot"
SysCall_OK = 0
SysCall_ScrollDown = 0
SysCall_ScrollUp = 0
let bootScreenPause = 1
while (bootScreenPause == 1) {
    if (SysCall_OK == 1) {
        SysCall_OK = 0
        bootScreenPause = 0
        loadMenu()
    }
}
basic.showLeds(`
    . . # . .
    # # # . .
    # # # # #
    . . # # #
    . . # . #
    `)

let Text_MinMax = ""
let Text_Temp = ""
let Temp = 0
let Min_Temp = 100
let Max_Temp = 0
basic.forever(function () {
    Temp = input.temperature()
    if (Temp > Max_Temp) {
        Max_Temp = Temp
    }
    if (Temp < Min_Temp) {
        Min_Temp = Temp
    }
    Text_Temp = "Temperatur:" + Temp
    Text_MinMax = "Min: " + Min_Temp + " Max: " + Max_Temp
    display.writeString(Text_Temp, 0, 0)
    display.writeString(Text_MinMax, 1, 0)
    basic.pause(2000)
})

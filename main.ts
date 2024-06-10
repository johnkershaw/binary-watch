function tick () {
    if (tick_en == 1) {
        led.plot(4, 0)
        basic.pause(1000)
        led.unplot(4, 0)
        basic.pause(1000)
    }
}
let tick_en = 0
tick_en = 1
basic.forever(function () {
    tick()
})

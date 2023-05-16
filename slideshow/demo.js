var interval = setInterval(demo, 2000)

setTimeout(function() {
    console.log("Timeout !")
    clearInterval(interval)
}, 1000*20)

function demo() {
    console.log("demo")
}
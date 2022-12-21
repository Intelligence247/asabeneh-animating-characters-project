

let arr = ['30', 'DAYS', 'OF', 'JAVASCRIPT', 'CHALLENGE', '2020', 'ASABENEH', 'YETAYEH']

let section = document.querySelector('section')

let p1 = document.querySelector('#p1')
let p2 = document.querySelector('#p2')
let p3 = document.querySelector('#p3')
let p4 = document.querySelector('#p4')
let p5 = document.querySelector('#p5')
let p6 = document.querySelector('#p6')
let p7 = document.querySelector('#p7')
let p8 = document.querySelector('#p8')
for (const c of arr[0]) {
    let p = document.createElement('p')
    p.textContent = c
    p1.appendChild(p)
    p1.style.display = 'flex'
    function color() {
        let color = '#' + Math.random().toString(16).substr(2, 6)
        p.style.color = color
        p.style.transition = 'all 1s linear'
        p.style.color = color
    }
    setInterval(color, 100)
}

for (const c of arr[1]) {
    let p = document.createElement('p')
    p.textContent = c
    p2.appendChild(p)
    p2.style.display = 'flex'
    function color() {
        let color = '#' + Math.random().toString(16).substr(2, 6)
        p.style.color = color
        p.style.transition = 'all 1s linear'
        p.style.color = color
    }
    setInterval(color, 100)
}


for (const c of arr[2]) {
    let p = document.createElement('p')
    p.textContent = c
    p3.appendChild(p)
    p3.style.display = 'flex'
    function color() {
        let color = '#' + Math.random().toString(16).substr(2, 6)
        p.style.color = color
        p.style.transition = 'all 1s linear'
        p.style.color = color
    }
    setInterval(color, 100)
}


for (const c of arr[3]) {
    let p = document.createElement('p')
    p.textContent = c
    p4.appendChild(p)
    p4.style.display = 'flex'
    function color() {
        let color = '#' + Math.random().toString(16).substr(2, 6)
        p.style.color = color
        p.style.transition = 'all 1s linear'
        p.style.color = color
    }
    setInterval(color, 100)
}



for (const c of arr[4]) {
    let p = document.createElement('p')
    p.textContent = c
    p5.appendChild(p)
    p5.style.display = 'flex'
    function color() {
        let color = '#' + Math.random().toString(16).substr(2, 6)
        p.style.color = color
        p.style.transition = 'all 1s linear'
        p.style.color = color
    }
    setInterval(color, 100)
}


for (const c of arr[5]) {
    let p = document.createElement('p')
    p.textContent = c
    p6.appendChild(p)
    p6.style.display = 'flex'
    function color() {
        let color = '#' + Math.random().toString(16).substr(2, 6)
        p.style.color = color
        p.style.transition = 'all 1s linear'
        p.style.color = color
    }
    setInterval(color, 100)
}


for (const c of arr[6]) {
    let p = document.createElement('p')
    p.textContent = c
    p7.appendChild(p)
    p7.style.display = 'flex'
    function color() {
        let color = '#' + Math.random().toString(16).substr(2, 6)
        p.style.color = color
        p.style.transition = 'all 1s linear'
        p.style.color = color
    }
    setInterval(color, 1000)
}


for (const c of arr[7]) {
    let p = document.createElement('p')
    p.textContent = c
    p8.appendChild(p)
    p8.style.display = 'flex'
    function color() {
        let color = '#' + Math.random().toString(16).substr(2, 6)
        p.style.color = color
        p.style.transition = 'all 1s linear'
        p.style.color = color
    }
    setInterval(color, 1000)
}

const functSect = () => {
    let color = '#' + Math.random().toString(16).substr(2, 6)
    section.style.backgroundColor = color
    section.style.transition = 'all 1s linear'
}
setInterval(functSect, 1000)



let aee = ['-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"', 'Times New Roman']





















/*
let main = document.querySelector('main')
let h1 = document.querySelector('h1')
h1.style.display = 'flex'
h1.style.flexWrap = 'wrap'
let xx = `30 DAYS OF JAVASCRIPT CHALLENGE 2020 ASABENEH YETAYEH`
let sp = xx.split('')

for (let i = 0; i < xx.length; i++) {

    let container = document.createElement('div')

    container.style.display = 'flex'
    container.style.flexWrap = 'wrap'
    container.style.gap = '1rem'
    let h2 = document.createElement('h1')
    h2.textContent = xx[i]
    console.log(xx[i])
    container.appendChild(h2)
    h1.appendChild(container)


    if (i == 1 || i == 6 || i == 9 || i == 20 || i == 30 || i == 35 || i == 44) {
        h2.style.marginRight = '1.5rem'
    }
    const func = () => {
        let color = '#' + Math.random().toString(16).substr(2, 6)
        container.style.color = color
        container.style.transition = 'all 1s linear'

    }
    setInterval(func, 100)
}



const func = () => {
    let color = '#' + Math.random().toString(16).substr(2, 6)
    main.style.backgroundColor = color
    main.style.transition = 'all 1s linear'
}
setInterval(func, 100)*/
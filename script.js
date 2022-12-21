let main = document.querySelector('main')
let h1 = document.querySelector('h1')
let xx = `30 DAYS OF JAVASCRIPT CHALLENGE 2020 ASABENEH YETAYEH`
let sp = xx.split('')
h1.style.display = 'flex'
h1.style.flexWrap = 'wrap'



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
    setInterval(func, 1000)
}



const func = () => {
    let color = '#' + Math.random().toString(16).substr(2, 6)
    main.style.backgroundColor = color
    main.style.transition = 'all 1s linear'
}
setInterval(func, 1000)




const changeColor = () => {

}
























// for (let i = 0; i < p.length; i++) {
//     console.log(p[i])
//     const func = () => {

//         let color = '#' + Math.random().toString(16).substr(2, 6)
//         p[i].style.color = color
//     }
//     setInterval(func, 1000)
// }
let left = document.querySelector(".left-input");
let right = document.querySelector(".right-input");
let btnRub = document.querySelectorAll(".btn button")
let btnUsd = document.querySelectorAll(".btn-usd button")
let defaultCurr1 = "RUB"
let defaultCurr2 = "USD"
let inputValue1 = 0
let inputValue2 = 0

fetch(`https://api.exchangerate.host/latest?base=${defaultCurr1}&symbols=${defaultCurr2}`)
    .then(res => res.json())
    .then(data => {
        let rate = data.rates
        let ratesValue = Object.values(rate)
        let ratesKeys = Object.keys(rate)
        left.addEventListener("keyup", () => {
            let inputValue1 = Number(left.value)
            let inputValue2 = (right.value)
            right.value = inputValue1 * ratesValue
        })

    }
    )


btnRub.forEach((item, index) => {
    item.addEventListener("click", (e) => {
        let childBtn=e.target.parentElement.children
        for (let i = 0; i < childBtn.length; i++) {
            childBtn[i].classList.remove("active")
        }
        e.target.classList.add('active')
        defaultCurr1 = e.target.id
        fetch(`https://api.exchangerate.host/latest?base=${defaultCurr1}&symbols=${defaultCurr2}`)
        .then(res => res.json())
        .then(data => {
            let rate = data.rates
            let ratesValue = Object.values(rate)
            let ratesKeys = Object.keys(rate)
            let inputValue1 = Number(left.value)
            let inputValue2 = (right.value)
            right.value = inputValue1 * ratesValue
           
    
        }
        )
    })
})
btnUsd.forEach((item, index) => {
    item.addEventListener("click", (e) => {
        let childBtn=e.target.parentElement.children
        for (let i = 0; i < childBtn.length; i++) {
            childBtn[i].classList.remove("active")
        }
        e.target.classList.add('active')
        defaultCurr2 = e.target.id
        fetch(`https://api.exchangerate.host/latest?base=${defaultCurr2}&symbols=${defaultCurr1}`)
        .then(res => res.json())
        .then(data => {
            let rate = data.rates
            let ratesValue = Object.values(rate)
            let ratesKeys = Object.keys(rate)
            console.log(data);
            let inputValue1 = Number(left.value)
            let inputValue2 = Number(right.value)
            left.value = inputValue2 * ratesValue
        }
        )
    })
})

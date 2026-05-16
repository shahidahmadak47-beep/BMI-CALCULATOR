let form = document.querySelector('.form-page')
console.log(form)
form.addEventListener('submit', (e) => {
    e.preventDefault()
    let height = Number(document.querySelector('#height').value) / 100
    let weight = Number(document.querySelector('#weight').value)

    const bmiValue = (weight / (height ** 2)).toFixed(2)
    console.log(bmiValue)

    let result = document.querySelector('.result')

    if (bmiValue < 18) {
        result.innerHTML = `BMI Value is ${bmiValue}, You are underweight!`
        result.style.color = "red"
    }
    else if (bmiValue <= 24) {
        result.innerHTML = `BMI Value is ${bmiValue}, You are normal weight!`
        result.style.color = "green"
    }
    else if (bmiValue <= 28) {
        result.innerHTML = `BMI Value is ${bmiValue}, You are overweight!`
        result.style.color = "orange"
    }
    else {
        result.innerHTML = `BMI Value is ${bmiValue}, You are obese!`
        result.style.color = "red"
    }
})
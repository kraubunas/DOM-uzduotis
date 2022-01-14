"use strict"

var heading = document.getElementById("heading")
var playingTo = document.getElementById("to")
var input = document.getElementById("input")
var playerOne = document.getElementById("playerOne")
var playerTwo = document.getElementById("playerTwo")
var reset = document.getElementById("reset")

var number = 0
var inputNumber = 0
var number1 = 0
var number2 = 0
var maxNumber = 0

heading.textContent = `${number1} to ${number2}`
playingTo.textContent = `Playing to: ${number}`

playerOne.addEventListener("click", function () {
    if (number1 < maxNumber) {
        number1++
        heading.textContent = `${number1} to ${number2}`
        maxNumber = input.value
    } else {
        number2 = maxNumber
        heading.style.color = "green"
    } {
    }
})
playerTwo.addEventListener("click", function () {
    if (number2 < maxNumber) {
        number2++
        heading.textContent = `${number1} to ${number2}`
        maxNumber = input.value
    } else {
        number1 = maxNumber
        heading.style.color = "red"
    }
})

reset.addEventListener("click", function () {
    if (number1 = maxNumber) {
        number1 = 0
        heading.textContent = `${number1} to ${number2}`
        heading.style.color = ("black")
    }
    if (number2 = maxNumber) {
        number2 = 0
        heading.textContent = `${number1} to ${number2}`
        heading.style.color = ("black")
    }
})

input.addEventListener("change", function () {
    if (number != maxNumber) {
        maxNumber = input.value
        playingTo.textContent = `Playing to: ${maxNumber}`
        console.log(maxNumber)
    } else {
        maxNumber = 1
    }
})


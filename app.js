const button = document.querySelector('.button')
const body = document.body
const input = document.querySelector('input')
const help = document.querySelector('.help')
help.addEventListener('click', () => {
  input.value = 'Влад: Мне уже пора!'
})
button.addEventListener('click', () => {
  body.classList.toggle('dark-theme')
  input.value = 'Данил: Так, что тебе еще рассказать?!'
})
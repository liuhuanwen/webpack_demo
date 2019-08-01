import _ from 'lodash'
import './style.css'
import headerPhoto from './assets/header.jpg'

function component() {
  var element = document.createElement('div')
  element.innerHTML = _.join(['Hello', 'webpack'], ' ')
  element.classList.add('hello')
  var image = new Image()
  image.src = headerPhoto
  element.appendChild(image)
  return element
}

document.body.appendChild(component())
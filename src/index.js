import _ from 'lodash'
import './style.css'
import Logo from './logo.png'

function component() {
    let element = document.createElement('div')
    element.innerHTML = _.join(['Hello', 'webpack'], ' ')
    element.classList.add('hello')

    let logo = new Image()
    logo.src = Logo
    element.appendChild(logo)

    return element
}

document.body.appendChild(component())
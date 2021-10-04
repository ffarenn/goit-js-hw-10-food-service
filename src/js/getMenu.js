import menu from '../menu.json'
import template from '../templates/menuArray.handlebars'
import data from '../js/refs'

const {menuList} = data

let result = template(menu)
menuList.insertAdjacentHTML('afterBegin', result)

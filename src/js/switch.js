import data from '../js/refs'

const { changeTheme } = data

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const {LIGHT, DARK} = Theme

changeTheme.addEventListener('change', (e) => {
    document.querySelector('body').classList.toggle(LIGHT)
    document.querySelector('body').classList.toggle(DARK)
    let switcher = e.target.checked ? DARK : LIGHT
    localStorage.setItem('theme', switcher)
})

let permanentLight = localStorage.getItem('theme')

    if (!permanentLight) {
    permanentLight = LIGHT
}
document.querySelector('body').classList.add(permanentLight)
    changeTheme.checked = permanentLight === LIGHT ? false : true


export default class ShowBurger {
    constructor (triggers, menuClass) {
        this.btns = document.querySelectorAll(triggers);
        this.menu = document.querySelector(menuClass);
    }

    init() {
        this.btns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const clickBurger = btn.closest('.header__burger');
                
                clickBurger.classList.toggle('burger-active');
                this.menu.classList.toggle('burger-hide');
            }); 
        });
    }
}
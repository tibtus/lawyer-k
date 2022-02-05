export default class ModalWindow {
    constructor (triggers, selectorModal, closed, body) {
        this.btns = document.querySelectorAll(triggers);
        this.model = document.querySelector(selectorModal);
        this.closedBtns = document.querySelectorAll(closed);
    
    }

    init() {

        this.btns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.model.classList.add('modal_active');
            }); 
        });

        this.closedBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.model.classList.remove('modal_active');
               
            }); 
        });

        this.model.addEventListener('click', (e) => {
            if (e.target.classList.contains("modal")) {
                this.model.classList.remove('modal_active');
            }
            

        }); 


    }
}
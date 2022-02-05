export default class DataFotter {
    constructor (block) {
        this.list = document.querySelector(block);
               
    }

    init() {
        try {
            this.list.innerHTML = new Date().getFullYear();
        
        } catch (e) {}    
                             
    }
}
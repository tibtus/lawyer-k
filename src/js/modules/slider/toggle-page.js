export default class TogglePage {
    constructor (triggersNext, triggersPrev, triggersNumber, page, logo, pageBurger) {
        this.btnsNext = document.querySelector(triggersNext);
        this.btnsPrev = document.querySelector(triggersPrev);
        this.btnsNumber = document.querySelector(triggersNumber);
        this.pagesList = document.querySelectorAll(page);
        this.logo = document.querySelector(logo);
        this.pagesListBurger = document.querySelectorAll(pageBurger);
      
    }

    clickLogo() {
        this.logo.addEventListener('click', (e) => { 
                this.btnsNumber.innerHTML =  1;  
                this.getNumber();
                this.getNumberBurger();
               
      
        }); 
    }
    

    clickBtns() {
         
        this.btnsNext.addEventListener('click', (e) => {       
                                        
            if (this.btnsNumber.innerHTML < 5) {
                this.btnsNumber.innerHTML = +this.btnsNumber.innerHTML + 1;  
                this.getNumber();
                this.getNumberBurger();
              
            }


        }); 
        this.btnsPrev.addEventListener('click', (e) => {        
            
            if (this.btnsNumber.innerHTML > 1) {
                this.btnsNumber.innerHTML -= 1;   
                this.getNumber();
                this.getNumberBurger();
            }


        });
    } 

    clickBurgerMenuList() {

        this.pagesListBurger.forEach((page) => {
            
            page.addEventListener('click', (e) => { 
                let target = e.target.getAttribute('data-index-burger');
               
                switch(target) {
                    case '1':
                        this.btnsNumber.innerHTML =  1;  
                        this.getNumber();
                        this.getNumberBurger();
                        break;
                    case '2':                        
                        this.btnsNumber.innerHTML =  2;  
                        this.getNumber();
                        this.getNumberBurger();                        
                        break;
                    case '3':
                        this.btnsNumber.innerHTML =  3;  
                        this.getNumber();
                        this.getNumberBurger(); 
                        break;
                    case '4':
                        this.btnsNumber.innerHTML =  4;  
                        this.getNumber();
                        this.getNumberBurger(); 
                        break;
                    case '5':
                        this.btnsNumber.innerHTML =  5;  
                        this.getNumber();
                        this.getNumberBurger(); 
                        break;
                    default:
                        this.btnsNumber.innerHTML =  1;  
                        this.getNumber();
                        this.getNumberBurger();
                        break;    

                } 
               
                                        
                            
                    
            }); 

        });


    }

    


      getNumber() {       
        let number = this.btnsNumber.innerHTML;  
        

        this.pagesList.forEach((page, i) => {
            let index = page.getAttribute('data-index-card'); 
                     
            if (number === index) {
                page.classList.remove('card-hide');
               
            } else {
                page.classList.add('card-hide');
            }
            
        });
      
      }

      getNumberBurger() {       
        let number = this.btnsNumber.innerHTML;  
        

        this.pagesListBurger.forEach((page, i) => {
            let indexBurger = page.getAttribute('data-index-burger'); 
                     
            if (number === indexBurger) {
                page.classList.add('active-block');
               
            } else {
                page.classList.remove('active-block');
            }
            
        });
      
      }

    init() {
      

        this.clickBtns();
        this.clickLogo();
        this.getNumber();
        this.getNumberBurger();
        this.clickBurgerMenuList();



    }
}
export default class AutoSlide {
    constructor (block, numberItem) {
        this.list = document.querySelector(block);
        this.number = numberItem;
       
    }

    

    nextItem() {
        let number = +this.list.getAttribute("data-index-slide");

        if (number < this.number) {
            this.list.setAttribute("data-index-slide", number + 1 ); 
            this.list.style.background = `url('./img/slides/lawerk-img-${number + 1}.jpg') no-repeat 50%/cover`;
        } else if (number == this.number) {
            this.list.setAttribute("data-index-slide", 1 ); 
            this.list.style.background = `url('./img/slides/lawerk-img-1.jpg') no-repeat 50%/cover`;
        }


    }

    init() {
        try {
 
        const playIntervalSlider = setInterval( () => this.nextItem(), 6000); 
        playIntervalSlider;  
        /* try { 
            this.list.addEventListener('mouseover', (e) => {                    
                clearInterval(playIntervalSlider);
                console.log(e);
            }); 

            
        } catch (e) {}   
        try { 


            this.list.addEventListener('mouseout', (e) => {                    
                setInterval(playIntervalSlider); 
                console.log(e);
            });
  
            
        } catch (e) {} */

        
        } catch (e) {}    
                             
    }
}
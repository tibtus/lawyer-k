/* import MainSlider from "./modules/slider/slider-main";
import MiniSlider from "./modules/slider/slider-mini";
import VideoPlayer from "./modules/playVideo";
import Difference from "./modules/difference";
import Form from "./modules/form";
import ShowInfo from "./modules/showInfo";
import Download from "./modules/download" */
import ShowBurger from "./modules/burger";
import AutoSlide from "./modules/autoSlide";
import DataFotter from "./modules/dataFotter";
import TogglePage from "./modules/slider/toggle-page";
import ModalWindow from "./modules/modal";




window.addEventListener('DOMContentLoaded', () => {

    new ShowBurger('.header__burger', '.main__burger').init();

    new ModalWindow('.btn', '.modal', '.modal-close').init();

    new AutoSlide('.presentation', 9).init();

    new DataFotter('.dataYear').init();

    new TogglePage('.nav__next', '.nav__prev', '.number_value', '.main__card', '.nav__logo', '.main__burger-menu').init();

/*     const showUpSlider = new MiniSlider({
        container: '.main__slider', 
        activeClass: 'card-active',
        animate: true,
        autoplay: true
    });
    showUpSlider.init(); */

   

/*     const slider = new MainSlider({btns: '.next', container: '.page'});
    slider.render();

    const modulePageSlider = new MainSlider({container: '.moduleapp', btns: '.next'});
    modulePageSlider.render();

    const showUpSlider = new MiniSlider({
        container: '.showup__content-slider', 
        prev: '.showup__prev',
        next: '.showup__next',
        activeClass: 'card-active',
        animate: true,
        autoplay: true
    });
    showUpSlider.init();

    const modulesSlider = new MiniSlider({
        container: '.modules__content-slider', 
        prev: '.modules__info-btns .slick-prev',
        next: '.modules__info-btns .slick-next',
        activeClass: 'card-active',
        animate: true,
        autoplay: true
    });
    modulesSlider.init();

    const feedSlider = new MiniSlider({
        container: '.feed__slider', 
        prev: '.feed__slider .slick-prev',
        next: '.feed__slider .slick-next',
        activeClass: 'feed__item-active'
        
    });
    feedSlider.init();
    

    new VideoPlayer('.showup .play', '.overlay').init();
    new VideoPlayer('.module__video-item .play', '.overlay').init();

    new Difference('.officerold', '.officernew', '.officer__card-item').init();
    new Form('.form').init();

    new ShowInfo('.plus__content').init();

    new Download('.download').init(); */

});
document.addEventListener(`DOMContentLoaded`, () => {
    //Меню
    const burger = document.querySelector(`.header__burger`),
        menu = document.querySelector(`.menu`),
        close = document.querySelector(`.menu__close`),
        menuLink = document.querySelectorAll(`.menu__item a`),
        body = document.querySelector(`body`),
        html = document.querySelector(`html`)
    
    burger.addEventListener(`click`, (e) =>{
        menu.classList.add(`menu__active`);
        body.classList.add(`overflow`);
    });

    close.addEventListener(`click`, (e) =>{
        menu.classList.remove(`menu__active`);
        body.classList.remove(`overflow`);
    });

    menuLink.forEach( link =>{
        link.addEventListener(`click`, (e) =>{
            menu.classList.remove(`menu__active`);
            body.classList.remove(`overflow`);
        });
    });
    const swiperScroll = document.querySelector(`.swiper-scroll`);
    const swiperFour = new Swiper('.benefit__swiper', {
        speed: 600,
        slidesPerView: 1,
        direction: 'vertical',
        autoHeight: true,
        loop: false,
        allowTouchMove: true,
        mousewheelControl: true,
        spaceBetween: 30,
        mousewheel: {
            enabled: true,
            eventsTarged: `.benefits__rigth, .benefits__left`,
            sensitivity: 1,
          },
      });

    new fullpage('#fullpage', {
        scrollHorizontally: false,
        scrollOverflow: false,
        fixedElements: '.header',
        menu: '#menu',
        fitToSection: true,
	    fitToSectionDelay: 600,
        css3: true,
        scrollingSpeed: 1000,
        anchors:[`main`,'services', 'benefits', `reviews`,`about`,`aboutTwo`,`aboutThree`,`partners`,`certificates`,`team`],
        onLeave : function(origin, destination, direction, trigger){
            var origin = this;
            if(swiperFour.activeIndex < 2 && origin.anchor == 'services'){
                fullpage_api.setAllowScrolling(false);
                down(swiperFour);
            }
        },
    });


    const down = function(swiperMy){
        window.addEventListener(`wheel` , (e) =>{
            if(swiperMy.activeIndex == 2 && swiperMy.progress == 1){
                swiperMy.allowSlidePrev = false;
                swiperMy.allowSlideNext = false;
                fullpage_api.setAllowScrolling(true);
            }
        });
        
    }



    const arrowDown = document.querySelectorAll(`.down`);
    arrowDown.forEach((arrow) =>{
        arrow.addEventListener(`click`, (e)=>{
            fullpage_api.moveSectionDown();
            fullpage_api.setAllowScrolling(true);
        });
    });

    const swiper = new Swiper('.reviews__swiper', {
        speed: 400,
        spaceBetween: 160,
        slidesPerView: 2,
        navigation: {
            nextEl: '.reviews__arrow',
            
        },
        allowTouchMove: false,
        direction: 'horizontal',
        loop: true,
        
      });

      const swiperTwo = new Swiper('.certificates__swiper', {
        speed: 400,
        slidesPerView: 1,
        navigation: {
            nextEl: '.certificates__arrow',  
        },
        allowTouchMove: false,
        direction: 'horizontal',
        loop: true,
        
      });

      const swiperThree = new Swiper('.team__swiper', {
        speed: 400,
        slidesPerView: 1,
        navigation: {
            nextEl: '.team__arrow',  
        },
        allowTouchMove: false,
        direction: 'horizontal',
        loop: true,
        
      });


      

      //Аккардион на мобилке
      const accordions = document.querySelectorAll(".accordion");
        const openAccordion = (accordion) => {
            const content = accordion.querySelector(".accordion__content");
            accordion.classList.add("accordion__active");
            content.style.maxHeight = content.scrollHeight + "px";
        };

        const closeAccordion = (accordion) => {
            const content = accordion.querySelector(".accordion__content");
            accordion.classList.remove("accordion__active");
            content.style.maxHeight = null;
        };

        accordions.forEach((accordion) => {
            const intro = accordion.querySelector(".accordion__intro");
            const content = accordion.querySelector(".accordion__content");
            if(accordion.classList.contains == `accordion__active`){
                accordions.forEach((accordion) => closeAccordion(accordion));
                openAccordion(accordion);
            }
            intro.onclick = () => {
                if (content.style.maxHeight) {
                    closeAccordion(accordion);
                } else {
                    accordions.forEach((accordion) => closeAccordion(accordion));
                    openAccordion(accordion);
                }
            };
        });
    
});
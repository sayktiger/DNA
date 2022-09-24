document.addEventListener(`DOMContentLoaded`, () => {
    //Меню
    const burger = document.querySelector(`.header__burger`),
        menu = document.querySelector(`.menu`),
        close = document.querySelector(`.menu__close`),
        menuLink = document.querySelectorAll(`.menu__item a`),
        body = document.querySelector(`body`);
    
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

   // Активный класс на ссылку при скролле
    // window.addEventListener('scroll', () => {
    //     let scrollDistance = window.scrollY;
    //     if (window.innerWidth > 768) {
    //         document.querySelectorAll('.section_menu').forEach((el, i) => {
    //             if (el.offsetTop - document.querySelector('.menu__block').clientHeight <= scrollDistance) {
    //                 document.querySelectorAll('.menu__block a').forEach((el) => {
    //                     if (el.classList.contains('menu__item_link_active')) {
    //                         el.classList.remove('menu__item_link_active');
    //                     }
    //                 });

    //                 document.querySelectorAll('.menu__block li')[i].querySelector('a').classList.add('menu__item_link_active');
    //             }
    //         });
    //     }
    // });
        

    new fullpage('#fullpage', {
        scrollHorizontally: false,
        scrollOverflow: false,
        fixedElements: '.header',
        menu: '#menu',
        fitToSection: true,
	    fitToSectionDelay: 600,
        css3: true,
        scrollingSpeed: 1000,
        anchors:[`main`,'services', 'benefits', `reviews`,`about`,`partners`,`certificates`,`team`],
    });

    const arrowDown = document.querySelectorAll(`.down`);
    arrowDown.forEach((arrow) =>{
        arrow.addEventListener(`click`, (e)=>{
            fullpage_api.moveSectionDown();
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

      const swiperFour = new Swiper('.benefit__swiper', {
        speed: 1000,
        slidesPerView: 1,
        navigation: {
            nextEl: '.benefits__arrow',  
        },
        direction: 'vertical',
        autoHeight: true,
        loop: true,
        allowTouchMove: false,
        autoplay: {
            delay: 5000,
            disableOnInteraction: true
          },
      });

      const swiperFive = new Swiper('.about__swiper', {
        speed: 1000,
        slidesPerView: 1,
        navigation: {
            nextEl: '.about__arrow',  
        },
        spaceBetween: 0,
        direction: 'vertical',
        autoHeight: `100%`,
        loop: true,
        allowTouchMove: false,
        autoplay: {
            delay: 8000,
            disableOnInteraction: true
          },
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
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
    window.addEventListener('scroll', () => {
        let scrollDistance = window.scrollY;
        if (window.innerWidth > 768) {
            document.querySelectorAll('.section_menu').forEach((el, i) => {
                if (el.offsetTop - document.querySelector('.menu__block').clientHeight <= scrollDistance) {
                    document.querySelectorAll('.menu__block a').forEach((el) => {
                        if (el.classList.contains('menu__item_link_active')) {
                            el.classList.remove('menu__item_link_active');
                        }
                    });

                    document.querySelectorAll('.menu__block li')[i].querySelector('a').classList.add('menu__item_link_active');
                }
            });
        }
    });
        
    



    //Скрипт для плавного скролла по якорям
    // собираем все якоря; устанавливаем время анимации и количество кадров
    const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
        animationTime = 600,
        framesCount = 120;

    anchors.forEach(function (item) {
        // каждому якорю присваиваем обработчик события
        item.addEventListener('click', function (e) {
            // убираем стандартное поведение
            e.preventDefault();

            // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
            let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;

            // запускаем интервал, в котором
            let scroller = setInterval(function () {
                // считаем на сколько скроллить за 1 такт
                let scrollBy = coordY / framesCount;

                // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
                // и дно страницы не достигнуто
                if (scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
                    // то скроллим на к-во пикселей, которое соответствует одному такту
                    window.scrollBy(0, scrollBy);
                } else {
                    // иначе добираемся до элемента и выходим из интервала
                    window.scrollTo(0, coordY);
                    clearInterval(scroller);
                }
                // время интервала равняется частному от времени анимации и к-ва кадров
            }, animationTime / framesCount);
        });
    });

    new fullpage('#fullpage', {
        //options here
        scrollHorizontally: true,
        scrollOverflow: false,
        fixedElements: '.header',
        menu: '#header',
        css3: true,
        scrollingSpeed: 1000,
    });

    const arrowDown = document.querySelectorAll(`#down`);
    arrowDown.forEach((arrow) =>{
        arrow.addEventListener(`click`, (e)=>{
            fullpage_api.moveSectionDown();
        });
    });
});
const header = document.querySelector('.header');

document.querySelector('.faq-accordion').addEventListener('click', (event) =>{
    if (event.target.closest('.faq-accordion__item')){
        event.target.closest('.faq-accordion__item')
        .classList.toggle('faq-accordion__item--active');
    }
})

document.querySelector('.btn-burger').addEventListener('click', (event) =>{
    
    header.classList.toggle('header--active-nav');

    if( header.classList.contains('header--active-nav')){
        hideScroll();
    }
    else{
        showScroll();
    }
    
})


const hideScroll = () =>{
    document.body.style.paddingRight = `${getScrollbarWidth()}px`;
    document.body.style.overflow = 'hidden';

    document.getElementById('main-navigation').style.paddingRight = `${getScrollbarWidth()}px`;

};

const resetNav = () =>{
    showScroll();
    header.classList.remove('header--active-nav');

};

window.addEventListener('resize', resetNav);

const showScroll = (event) =>{
    document.body.style.paddingRight = '';
    document.body.style.overflow = 'visible';

    document.getElementById('main-navigation').style.paddingRight = '';
}

const getScrollbarWidth = () => {
    const outer = document.createElement('div');

    outer.style.position = 'absolute';
    outer.style.top = '-9999px';
    outer.style.width = '50px';
    outer.style.height = '50px';
    outer.style.overflow = 'scroll';
    outer.style.visibility = 'hidden';

    document.body.appendChild(outer);
    const scrollBarrWidth = outer.offsetWidth - outer.clientWidth;
    document.body.removeChild(outer);

    return scrollBarrWidth;
}



new Swiper('.section-hero-image', {
    // Optional parameters
    // direction: 'vertical',
    // loop: true,
  
    // // If we need pagination
    pagination: {
      el: '.section-hero-image .dots',
      clickable:true,
    },
  
    // // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
  
    // // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
});

new Swiper('.slider-blog-container', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
  
    // // If we need pagination
    pagination: {
      el: '.section-blog .dots',
      clickable:true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.btn-blog--next',
      prevEl: '.btn-blog--prev',
    },
  
    // // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
});


new Swiper('.slider-quotes-container ', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    // spaceBetween:30,
    slidesPerView:'auto',

  
    // // If we need pagination
    pagination: {
      el: '.section-quotes .dots',
      clickable:true,
    },
  
    
});


Fancybox.bind('[data-fancybox="gallery"]', {
    // Your custom options for a specific gallery
  });
document.addEventListener('DOMContentLoaded', function () {
  // tabs
  document.querySelectorAll('.we-work__tab-btn').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (clickEvent) {
      const path = clickEvent.currentTarget.dataset.path

      document.querySelectorAll('.we-work__tab-btn').forEach(function (btn) {
        btn.classList.remove('we-work__btn--active')
      })
      clickEvent.currentTarget.classList.add('we-work__btn--active')

      document.querySelectorAll('.we-work__card').forEach(function (tabContent) {
        tabContent.classList.remove('visible-tab')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('visible-tab')
    })
  })

  // swiper
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  })

  // accordion
  $("#accordion").accordion({
    // icons: false,
    heightStyle: "content",
    collapsible: true,
    active: false
  })

  // search
  document.querySelector('.show-search').addEventListener('click', function () {
    document.querySelector('.header__search-form').classList.add('header__search-form--active')
    document.querySelector('.header__search').removeAttribute('aria-hidden')
    document.querySelector('.header__search').classList.add('header__search--active')
  })

  document.querySelector('.header__close-btn').addEventListener('click', function () {
    document.querySelector('.header__search-form').classList.remove('header__search-form--active')
    document.querySelector('.header__search').classList.remove('header__search--active')
    document.querySelector('.header__search').setAttribute('aria-hidden', 'true')
  })

  // burger

  document.querySelector('.header__menu-btn').addEventListener('click', function () {
    document.querySelector('.header__nav').classList.add('header__nav--active')
    document.querySelector('.header__nav').removeAttribute('aria-hidden')
  })

  document.querySelector('.header__nav-close-btn').addEventListener('click', function () {
    document.querySelector('.header__nav').classList.remove('header__nav--active')
    document.querySelector('.header__nav').setAttribute('aria-hidden', 'true')

  })

  const mediaQueryBelow1024 = window.matchMedia('(max-width: 1024px)')

  function disableMenuAria(e) {
    if (e.matches) {
      if (document.querySelector('.header__nav').classList.contains('header__nav--active') === false) {
        console.log('Media Query Matched! below 1024')
        document.querySelector('.header__nav').setAttribute('aria-hidden', 'true')
      }
    }
  }
  mediaQueryBelow1024.addListener(disableMenuAria)
  disableMenuAria(mediaQueryBelow1024)

  const mediaQueryAbove1024 = window.matchMedia('(min-width: 1025px)')

  function enableMenuAria(e) {
    if (e.matches) {
      console.log('Media Query Matched! above 1024')
      document.querySelector('.header__nav').removeAttribute('aria-hidden')
    }
  }
  mediaQueryAbove1024.addListener(enableMenuAria)
  enableMenuAria(mediaQueryAbove1024)

})

$(document).ready(function () {
        var homeSlider;
        var homeSliderSettings;
        var propDetailsSlider;
        var propDetailsSliderSettings;

        aboutCompanyInnerMenu();
        mobMenuItemsInit();

        function isMobile() {
            var trigger = $('.is-mobile'),
                triggerStyle = trigger.css('display');
            if (triggerStyle === "block") {
                // console.log('true');
                return true;
            } else {
                // console.log('false');
                return false;
            }
        }

        /*---header---*/

        //language dropdown
        $('.header__lang').on('click', function (e) {
            e.stopPropagation();
            if (!isMobile()) {
                $(this).find('.header__lang-dropdown').toggleClass('is-visible');
            }
        });

        $(document).on('click', function (e) {
            if ($('.header__lang-dropdown').is('.is-visible')) {
                if (!$(event.target).closest('.header-lang, .header__lang-dropdown.is-visible').length) {
                    $('.header__lang-dropdown.is-visible').removeClass('is-visible');
                }
            }
        });

        //share link dropdown

        $('.header__share-link').on('click', function (e) {
            e.stopPropagation();
            if (!isMobile()) {
                $('.header').find('.header__follow').toggleClass('is-visible');
            }
        });

        $(document).on('click', function (e) {
            if ($('.header__follow').is('.is-visible')) {
                if (!$(event.target).closest('.header__share-link, .header__follow.is-visible').length) {
                    $('.header__follow.is-visible').removeClass('is-visible');
                }
            }
        });

        function resetFollowDropdown() {
            $('.header__follow.is-visible').removeClass('is-visible');
        }

        //other sites dropdown

        $('.other-sites__wrap').on('click', function (e) {
            e.stopPropagation();
            $('.other-sites__dropdown').toggleClass('is-visible');
        });

        $(document).on('click', function (e) {
            if ($('.other-sites__dropdown').is('.is-visible')) {
                if (!$(event.target).closest('.other-sites__wrap, .other-sites__dropdown.is-visible').length) {
                    $('.other-sites__dropdown.is-visible').removeClass('is-visible');
                }
            }
        });

        //header search
        $('.header__search-link').on('click', function (e) {
            var $this = $(this),
                searchWrap = $('.header__search');
            searchWrap.toggleClass('is-active');
            setFocus();
        });

        function setFocus() {
            setTimeout(function () {
                $('.header__input-search').get(0).focus();
            }, 420);
        }

        $('.header__search-close').on('click', function (e) {
            $('.header__search').removeClass('is-active');
        });

        //open mob menu
        $('.hamburger').on('click', function (e) {
            e.preventDefault();

            $(this).toggleClass('is-active');
            $('body, html').toggleClass('no-scroll');
            $('.header').toggleClass('is-open');
            $('.header__search').removeClass('is-fixed').removeClass('is-active');
        });

        // dropdown submenu

        function mobMenuItemsInit() {
            var isiPhone = navigator.userAgent.toLowerCase().indexOf("iphone");
            var isiPad = navigator.userAgent.toLowerCase().indexOf("ipad");
            var isiPod = navigator.userAgent.toLowerCase().indexOf("ipod");
            if (isiPhone > -1 || isiPad > -1 || isiPod > -1) {
                $('.header-nav__dropdown-link').on('mouseenter', function (e) {
                    if (isMobile()) {
                        var $this = $(this),
                            parent = $this.parent(),
                            li = $('.header-nav__dropdown-item'),
                            sublist = $('.header-nav__sublist');
                        if (!parent.hasClass('is-open')) {
                            parent.siblings(li).removeClass('is-open').find('span').addClass('is-visible');
                            parent.addClass('is-open');
                            parent.siblings(li).find(sublist).removeClass('is-open');
                            parent.find(sublist).addClass('is-open');
                            $this.find('span').removeClass('is-visible');
                        }
                        else {
                            parent.removeClass('is-open');
                            parent.siblings(li).find(sublist).removeClass('is-open');
                            parent.find(sublist).removeClass('is-open');
                            $this.find('span').addClass('is-visible');
                        }
                    }
                })
            }
            else {
                $('.header-nav__dropdown-link').on('click', function (e) {
                    e.preventDefault();
                    var $this = $(this),
                        parent = $this.parent(),
                        li = $('.header-nav__dropdown-item'),
                        sublist = $('.header-nav__sublist');
                    if (isMobile()) {
                        if (!parent.hasClass('is-open')) {
                            parent.siblings(li).removeClass('is-open').find('span').addClass('is-visible');
                            parent.addClass('is-open');
                            parent.siblings(li).find(sublist).removeClass('is-open');
                            parent.find(sublist).addClass('is-open');
                            $this.find('span').removeClass('is-visible');
                        }
                        else {
                            parent.removeClass('is-open');
                            parent.siblings(li).find(sublist).removeClass('is-open');
                            parent.find(sublist).removeClass('is-open');
                            $this.find('span').addClass('is-visible');
                        }
                    }
                });
            }
        }

        $('.header-nav__sublist-link').on('click', function (e) {

            $('.header').removeClass('is-open');
            $('.hamburger').removeClass('is-active');
            $('body, html').removeClass('no-scroll');
            $(this).addClass('is-active').siblings('.header-nav__sublist-item').removeClass('is-active');
        });

        //menu on resize
        function menuReset() {
            var header = $('.header'),
                dropdownItem = $('.header-nav__dropdown-item'),
                span = dropdownItem.find('span'),
                menuBtn = $('.hamburger'),
                shareDropdown = $('.header__follow');
            if (isMobile()) {
                span.addClass('is-visible');
                shareDropdown.removeClass('is-visible');
            } else {
                $('body, html').removeClass('no-scroll');
                header.removeClass('is-open');
                menuBtn.removeClass('is-active');
            }
        }

        /*---- end of header------*/

        /*------Homepage-----*/
        $('.intro__slider').slick({
            dots: true
        });

        $('.featured-properties__slider').slick({
            dots: false,
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        arrows: true
                    }
                },
            ]

        });

        //home media slider
        homeSlider = $('.home-media__slider');
        homeSliderSettings = {
            dots: false,
            arrows: true,
            fade: true,
            adaptiveHeight: true,
            mobileFirst: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: "unslick"
                }
            ]
        };

        homeSlider.slick(homeSliderSettings);

        function homeSliderInit() {
            if ($(window).width() > 1024) {
                if (homeSlider.hasClass('slick-initialized')) {
                    homeSlider.slick('unslick');
                }
                return
            }

            if (!homeSlider.hasClass('slick-initialized')) {
                return homeSlider.slick(homeSliderSettings);
            }
        }

        /* ---about company page------ */
        $('.intro__menu-placeholder').on('click', function () {
            var $this = $(this);
            $this.parent().find('.controls').fadeToggle(0);
            $this.parent().find('.intro__menu').toggleClass('is-open');
        });

        function placeholderSetContent() {
            var placeholder = $('.intro__menu-placeholder'),
                listLink = $('.intro__menu-item.is-selected a');
            placeholder.text(
                listLink.text()
            )
        }

        function aboutCompanyInnerMenu() {
            $('.intro__menu-link').on('click', function (e) {
                var $this = $(this),
                    $thisAttr = $this.attr('href');

                if (!$this.hasClass('no-scroll')) {
                    e.preventDefault();

                    $('.intro__menu-item').removeClass('is-selected');
                    $this.parent().addClass('is-selected');

                    placeholderSetContent();

                    $('.intro__menu').removeClass('is-open');
                    $('.intro__menu-wrap').find('.controls').fadeToggle(0);

                    $('html, body').animate({
                        scrollTop: $($this.attr('href')).offset().top
                    }, 500);
                }
            })
        }

        $('.about-milestones__tab-link').on('click', function (e) {
            e.preventDefault();
            var $this = $(this),
                tabLink = $('.about-milestones__tab-link'),
                attr = $this.attr('href'),
                tabTarget = $('.about-milestones__tab'),
                tabParent = $('.about-milestones__tabs');
            $this.addClass('is-active').siblings(tabLink).removeClass('is-active');
            tabParent.find(tabTarget).removeClass('is-active');
            tabParent.find('.about-milestones__tab' + attr).addClass('is-active').siblings('.about-miletsones__tab');
        });


//about company slider
        $('.about-awards__slider').slick({
            dots: false,
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
            ]
        });

        /*-------news page-------*/
//tabs
        $('.news .intro__tab-link').on('click', function (e) {
            e.preventDefault();
            var $this = $(this),
                attr = $this.attr('href');
            $this.parent().siblings().removeClass('is-active');
            $this.parent().addClass('is-active');
            $('.news-tabs__lists-wrap').find('.news-tab__list').removeClass('is-active');
            $('.news-tabs__lists-wrap').find('.news-tab__list' + attr).addClass('is-active');
        });


        /*-------events page-------*/
//events page tab
        $('.events .intro__tab-link').on('click', function (e) {
            e.preventDefault();
            var $this = $(this),
                attr = $this.attr('href');
            $this.parent().siblings().removeClass('is-active');
            $this.parent().addClass('is-active');
            $('.events__lists-wrap').find('.events__list').removeClass('is-active');
            $('.events__lists-wrap').find('.events__list' + attr).addClass('is-active');
        });

        $('.events-details__slider').slick({
            arrows: true,
            dots: false
        });

        function selectChange() {
            $(".form__select-wrap").each(function () {
                $(this).find("p").text($(this).find("select option:selected").text());
            })
        }

        $(".form__select-wrap select").on('change', function () {
            selectChange();
        });

        selectChange();

        $('.events-details__list-slider').slick({
            dots: false,
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: true,
                        infinite: true
                    }
                }
            ]
        });

        /*-----Property Details page----*/
        $('.property-details__accordion-item').on('click', function (e) {
            var $this = $(this);
            $this.find('span').toggleClass('is-visible');
            $this.find('.property-details__accordion-body').slideToggle();
            $this.siblings('.property-details__accordion-item').find('.property-details__accordion-body').slideUp();
            $this.siblings('.property-details__accordion-item').find('.property-details__accordion-icon.close.is-visible').removeClass('is-visible');
            $this.siblings('.property-details__accordion-item').find('.property-details__accordion-icon.open').addClass('is-visible');
        });


//property details Slider
        //desktop
        $('.property-details__gallery-slider-desktop').slick({
            dots: false,
            arrows: true
        });
        //mob
        propDetailsSlider = $('.property-details__gallery-slider.show-in-mob');
        propDetailsSliderSettings = {
            dots: false,
            arrows: true,
            adaptiveHeight: false,
            mobileFirst: true,
            fade: true
            // responsive: [
            //     {
            //         breakpoint: 1024,
            //         settings: "unslick"
            //     }
            // ]
        };

        propDetailsSlider.slick(propDetailsSliderSettings);

        // function propDetailsSliderInit() {
        //     if ($(window).width() > 1024) {
        //         if (propDetailsSlider.hasClass('slick-initialized')) {
        //             propDetailsSlider.slick('unslick');
        //         }
        //         return
        //     }
        //
        //     if (!propDetailsSlider.hasClass('slick-initialized')) {
        //         return propDetailsSlider.slick(propDetailsSliderSettings);
        //     }
        // }

        $('.property-related__slider').slick({
            arrows: true,
            dots: false,
            slidesToShow:2,
            slidesToScroll:1,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });

        /*-----------About team page-----------*/

        $('.team__item').on('click', function (e) {
            var $this = $(this);
            if (!isMobile()) {
                $this.siblings('.team__item').find('.team__desc').removeClass('is-visible');
                $this.siblings('.team__item').find('.team__item-title').fadeIn();
                $this.find('.team__desc').addClass('is-visible');
                $this.find('.team__item-title').fadeOut();
                $('.team__about-heading').addClass('is-hidden');
            }
        });

        $('.team__desc-close').on('click', function (e) {
            e.stopPropagation();
            $(this).parent().removeClass('is-visible');
            $('.team__about-heading').removeClass('is-hidden');
            $(this).parents('.team__item').find('.team__item-title').fadeIn();
        });

        $('.team__about-heading').on('click', function () {
            $(this).find('.team__about-dropdown').toggleClass('is-open');
            $(this).find('span').toggleClass('is-visible');
        });

        $('.team__about-dropdown a').click(function () {
            var $this = $(this);
            $('html, body').animate({
                scrollTop: $($this.attr('href')).offset().top
            }, 500);

            $this.parents('.team__about-dropdown').removeClass('is-open');
            $this.parents('.team__about-heading').find('span').toggleClass('is-visible');

            return false;
        });

        /*Services page*/
        $('.services__intro-list-placeholder').on('click', function () {
            var $this = $(this);
            if (isMobile()) {
                $this.parent().find('.controls').fadeToggle(0);
                $this.parent().find('.services__intro-list').toggleClass('is-open');
            }
        });

        $(window).resize(function () {
            menuReset();
            homeSliderInit();
            // propDetailsSliderInit();
        });

        $(window).scroll(function () {

        });

    }
)
;
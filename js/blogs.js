$(document).ready(function () {

    loadListContent();
    blogsNavPlaceholder();

    $('.blog-categories__slider').slick({
        dots: false,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: true,
                    centerMode: false,
                    infinite: true,
                    variableWidth: true
                }
            },
        ]

    });

    $('.blog-categories__nav').on('click', function () {
        $('.blog-categories__nav-list').toggleClass('is-open');
    });

//blogs year tabs
    $('.blog-categories__nav-link').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        var $this = $(this),
            dataAttr = $this.data('year'),
            parent = $this.parent(),
            listItem = $('.blog-categories__nav-item'),
            listItemSelected = $('.blog-categories__nav-item.is-selected'),
            list = $('.blog-categories__nav-list');

        listItem.removeClass('is-selected');
        parent.addClass('is-selected');

        if (!$this.hasClass('all-years')) {
            $('.blogs__list-wrap').find('.blog__list.is-active .blog__list-item').hide();
            $('.blogs__list-wrap').find('.blog__list.is-active .blog__list-item' + '.' + dataAttr).show();
        }
        else {
            $('.blogs__list-wrap').find('.blog__list-item').show();
        }

        blogsNavPlaceholder();
        list.removeClass('is-open');
    });


//blog categories tab
    $('.blog-categories__slider-link').on('click', function (e) {
        e.preventDefault();
        var $this = $(this),
            link = $('.blog-categories__slider-link'),
            parent = $this.parent(),
            attr = $this.attr('href'),
            tabTargetParent = $('.blogs__list-wrap'),
            tabTarget = $('.blog__list'),
            tabTargetActive = $('.blog__list.is-active'),
            yearTablinkAttr = $('.blog-categories__nav-item.is-selected a').data('year');

        link.removeClass('is-active');
        $this.addClass('is-active');

        if (!$this.hasClass('all-categories')) {
            tabTarget.removeClass('is-active');
            tabTargetParent.find('.blog__list' + attr).addClass('is-active');
            yearTabSelect();
            $(".blogs__list-load").removeClass('is-inactive');
        }
        else {
            tabTarget.each(function (index) {
                $(this).addClass('is-active').find('.blog__list-item').hide();
                yearTabSelect();
            })
            $(".blogs__list-load").removeClass('is-inactive');
        }

    });

//showing\hiding blogs by year
    function yearTabSelect() {
        var tabLinkActive = $('.blog-categories__nav-item.is-selected a'),
            tabLinkDataAttr = tabLinkActive.data('year'),
            tabTargetParentActive = $('.blog__list.is-active');

        if (tabLinkActive.hasClass('all-years')) {
            tabTargetParentActive.find('.blog__list-item').slice(0, 5).show();
        } else {
            tabTargetParentActive.find('.blog__list-item').hide();
            tabTargetParentActive.find('.blog__list-item' + '.' + tabLinkDataAttr).slice(0, 5).show();
        }
    }

//setting content of blogs nav placeholder
    function blogsNavPlaceholder() {
        var placeholder = $('.blog-categories__nav-placeholder'),
            link = $('.blog-categories__nav-item.is-selected a'),
            list = $('.blog-categories__nav-list');

        placeholder.text(
            link.text()
        )
    }

//load content btn
    function loadListContent() {
        var tabLinkActive = $('.blog-categories__nav-item.is-selected a'),
            tabLinkDataAttr = tabLinkActive.data('year'),
            listItemActive = $(".blog__list.is-active .blog__list-item"),
            listItemActiveHidden = $(".blog__list.is-active .blog__list-item:hidden");

        listItemActive.slice(0, 5).show();


        $(".blogs__list-load").on('click', function (e) {
            e.preventDefault();
            console.log('click')
            $(".blog__list.is-active .blog__list-item:hidden").slice(0, 5).fadeIn();
            if ($(".blog__list.is-active .blog__list-item:hidden").length == 0) {
                $(".blogs__list-load").addClass('is-inactive');
            }
        });
    }

    $('.related-blog__slider').slick({
        arrows: true,
        dots: false
    })

});
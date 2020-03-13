var mobile = {
    homeSwiper: null,
    homeNav: false,
    init: function () {
        this.changePage();
        this.initSwiper();
        this.bind();
        $(window).on('load', function () {
            $('.loading').hide();
        })
    },
    bind: function () {
        var self = this;
        $(window).bind( 'hashchange', function(e) {
            self.changePage();
            if(!self.homeNav){
                $('.m-nav').trigger('click');
            }
            self.homeNav = false;
        })
        $('.m-nav').on('click', function () {
            $('.nav_list').toggle();
        })
        $('.nav_list').on('click', function (e) {
            e.preventDefault();
            $('.m-nav').trigger('click');
        })
        $('.nav_list li').on('click', function (e) {
            e.stopPropagation();
        })
        $('.banner_nav li').on('click', function () {
            self.homeNav = true;
        })
    },
    changePage: function () {
        var index = location.hash.replace('#','') || 0;
        $('.page').addClass('hidden');
        $('.page').eq(index).removeClass('hidden');
        if(index == 0){
            this.initSwiper();
        }
    },
    initSwiper: function () {
        if(this.homeSwiper){
            this.homeSwiper.destroy();
        }
        this.homeSwiper = new Swiper('.swiper-home', {
            pagination: {
                el: '.swiper-pagination',
            },
            autoplay: {
                delay: 5000,
            },
            loop: true
        });
    }
}
mobile.init();
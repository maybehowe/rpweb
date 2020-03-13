var rp = {
    init: function () {
        $(".lazy").lazyload({
            effect : "fadeIn",
            placeholder_data_img: ''
        });
        this.initTop();
        this.initSale(1);
        this.bind();
    },
    initTop: function () {
        var swiper = new Swiper('.swiper-banner', {
            pagination: {
                el: '.swiper-pagination',
            },
            autoplay: {
                delay: 5000,
            },
            loop: true,
        });
    },
    initSale: function (index) {
        var swiperObj = '.swiper-sale-' + index;
        var saleItemLength = $(swiperObj).find('.swiper-slide').length;
        var obj = $(swiperObj).closest('.content');
        var nextBtn = obj.find('.swiper-button-next');
        var prevBtn = obj.find('.swiper-button-prev');
        var swiper = new Swiper(swiperObj, {
            allowTouchMove: false,
            slidesPerView: 3,
            navigation: {
                nextEl: nextBtn,
                prevEl: prevBtn
            },
            lazy: true
        });
        if(saleItemLength <= 3){
            var obj = $(swiperObj).closest('.content');
            nextBtn.hide();
            prevBtn.hide();
        }
    },
    bind: function () {
        var self = this;
        $('.nav_item').on('click', function () {
            $('.nav_item').removeClass('active');
            $(this).addClass('active');
        });
        $('.saidao_des .tab_li').on('click', function () {
            var index = $(this).index();
            $('.saidao_des .tab_li').removeClass('active');
            $(this).addClass('active');
            $('.saidao_des .content').removeClass('active');
            $('.saidao_des .content').eq(index).addClass('active');
        });
        $('.sale_des .tab_li').on('click', function () {
            var index = $(this).index();
            $('.sale_des .tab_li').removeClass('active');
            $(this).addClass('active');
            $('.sale_des .content').removeClass('active');
            $('.sale_des .content').eq(index).addClass('active');
            self.initSale(index+1);
        });
        $('.back_top').on('click', function () {
            window.scrollTo(0, 0);
        })
    }
}
rp.init();
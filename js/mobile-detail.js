var detail = {
    init: function () {
        this.bind();
        this.detailChange();
        $(window).on('load', function () {
            $('.loading').hide();
        })
    },
    detailChange: function () {
        var hash = location.hash.replace('#','').split('-');
        var index = hash[0] || 0;
        var subIndex = hash[1] || 0;
        $('.detail_content').removeClass('active');
        $('.content_wrap').eq(index).find('.detail_content').eq(subIndex).addClass('active');
    },
    bind: function () {
        var self = this;

        $(window).bind( 'hashchange', function(e) {
            self.detailChange();
            $('.detail_nav').trigger('click');
        })
        $('.m-nav').on('click', function () {
            $('.nav_list').toggle();
        })
        $('.detail_nav').on('click', function () {
            $('.detail_nav_list').toggle();
            $('.nav_list').hide();
        })
        $('.nav_list').on('click', function (e) {
            e.preventDefault();
            $('.m-nav').trigger('click');
        })
        $('.detail_nav_list').on('click', function (e) {
            e.preventDefault();
            $('.detail_nav').trigger('click');
        })
        $('.nav_list li').on('click', function (e) {
            e.stopPropagation();
        })
        $('.detail_nav_list .detail_nav_sub li').on('click', function (e) {
            e.stopPropagation();
        })
    }
}
detail.init();
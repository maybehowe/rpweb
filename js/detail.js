var detail = {
    init: function () {
        // body...
        this.detailChange();
        this.bind();
    },
    bind: function () {
        var self = this;
        $(window).bind( 'hashchange', function(e) {
            self.detailChange();
        })
    },
    detailChange: function () {
      var hash = location.hash.replace('#','').split('-');
      var index = hash[0] || 0;
      var subIndex = hash[1] || 0;
      $('.detail_tab_sub li').removeClass('active');
      $('.detail_tab_li').eq(index).find('li').eq(subIndex).addClass('active');
      $('.content').removeClass('active');
      $('.content_wrap').eq(index).find('.content').eq(subIndex).addClass('active');
      this.initGallery(index, subIndex);
    },
    initGallery: function (index, subindex) {
        var obj = $('.content_wrap').eq(index).find('.content').eq(subindex);
        var thumbsObj = $(obj).find('.gallery-thumbs');
        var topObj = $(obj).find('.gallery-top');
        var nextBtn = $(obj).find('.swiper-button-next');
        var prevBtn = $(obj).find('.swiper-button-prev');
        var galleryThumbs = new Swiper(thumbsObj, {
          spaceBetween: 10,
          slidesPerView: 6,
          freeMode: true,
          watchSlidesVisibility: true,
          watchSlidesProgress: true,
          lazy: true
        });
        var galleryTop = new Swiper(topObj, {
          spaceBetween: 10,
          navigation: {
            nextEl: nextBtn,
            prevEl: prevBtn,
          },
          thumbs: {
            swiper: galleryThumbs
          }
        });
    }
};
detail.init();
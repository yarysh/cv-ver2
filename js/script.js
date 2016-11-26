(function($) {
    "use strict";
    $(window).load(function() {
        $("#loaderInner").fadeOut();
        $("#loader").delay(200).fadeOut("slow");
    });
    $(document).ready(function(){
        $(".percentage").each(function(){
            var  width= $(this).text();
            $(this).css("width", width).empty();
        });
        $('.box').magnificPopup({
            type: 'image',
            fixedContentPos: false,
            fixedBgPos: false,
            mainClass: 'mfp-no-margins mfp-with-zoom',
            image: {
                verticalFit: true
            },
            zoom: {
                enabled: true,
                duration: 300
            }
        });
        $('.filter li a').on("click", function(e){
            e.preventDefault();
            $(this).addClass('active');
            $(this).parent().siblings().find('a').removeClass('active');
            var filters = $(this).attr('data-filter');
            $(this).closest('.works').find('.item').removeClass('disable');
            if (filters !== 'all') {
                var selected =  $(this).closest('.works').find('.item');
                for(var i = 0; i < selected.length; i++){
                    if (!selected.eq(i).hasClass(filters)) {
                        selected.eq(i).addClass('disable');
                    }
                }
            }
        });
        $('#wrapper').easytabs({
            animate: true,
            updateHash: false,
            transitionIn: 'fadeIn',
            transitionOut: 'fadeOut',
            animationSpeed: 100,
            tabActiveClass: 'active',
            tabs: ' #main-nav.tabbed > ul > li ',
            transitionInEasing: 'linear',
            transitionOutEasing: 'linear'
        });
    });
})(jQuery);

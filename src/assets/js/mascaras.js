$(window).scroll(function() {
            $('.cuadrogris').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+400) {
                    $(this).addClass("mask");
                }
            });
        });
        
        $(window).scroll(function() {
            $('.markbrow').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+400) {
                    $(this).addClass("mask");
                }
            });
        });
        
        $(window).scroll(function() {
            $('.librooo').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+400) {
                    $(this).addClass("mask");
                }
            });
        });


        $(window).scroll(function() {
            $('.mapaa').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+400) {
                    $(this).addClass("mask");
                }
            });
        });


        $(window).scroll(function() {
            $('.comprahora').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+400) {
                    $(this).addClass("mask");
                }
            });
        });


        $(window).scroll(function() {
            $('.kitpromo').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+400) {
                    $(this).addClass("mask");
                }
            });
        });

        


$('.element-to-hide').css('visibility', 'hidden');
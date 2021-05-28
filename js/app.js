$(function() {
    var header =$("#header");
    var introH = $("#intro").innerHeight();
    var scrollOffset = $(window).scrollTop();
    checkScroll(scrollOffset)   

    $(window).on("scroll",function() {
            
            
            scrollOffset = $(this).scrollTop()
            checkScroll(scrollOffset)
           
        });


        function checkScroll(){ scrollOffset = $(this).scrollTop()
            

            if (scrollOffset >= introH) {
                header.addClass ("fixed");
               
            } else {
                header.removeClass ("fixed");
            }
        }



        /*Meny nav toggle*/

        $("#nav_toggle").on("click", function(event) {
            event.preventDefault();


            $(this).toggleClass("active");
            $("#nav").toggleClass("active");
        });


        $("[data-slider]").slick({
            infinite: true,
            fade: false,
            slidesToShow: 1,
            slidesToScroll: 1
        });
    


    });


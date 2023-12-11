
// $(document).ready(function(){
//   $(".navbar-brand").hide();
// });

$(document).ready(function(){

  $(".navbar-brand").hide(); //Hide the navigation bar first

    $(window).scroll(function () {  //Listen for the window's scroll event
        if (isScrolledAfterElement("#project")) { //if it has scrolled beyond the #content elment
            $('.navbar-brand').fadeIn("swing");  //Show the navigation bar
        } else {
            $('.navbar-brand').fadeOut(500); //Else hide it
        }
    });

    //Function that returns true if the window has scrolled beyond the given element
    function isScrolledAfterElement(elem) {
        var $elem = $(elem);
        var $window = $(window);

        var docViewTop = $window.scrollTop();
        var docViewBottom = docViewTop + $window.height();

        var elemTop = $elem.offset().top;

        return elemTop <= docViewBottom;
    }
});

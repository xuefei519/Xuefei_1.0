$(function() {
    $('body').on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({target: '.navbar-custom',offset:80})

 $('[data-toggle="tooltip"]').tooltip();

 $("#rate").on('DOMNodeRemoved', function(e) {
    document.getElementById("footer").style.padding='10px 0 10px 0';
});

var delay=800; //0.8s
setTimeout(function() {
  $('#line').append('<style>#line:before{opacity: 1;}</style>');
}, delay);

var delay=1000; //1 second
setTimeout(function() {
  $('#xuefei').append('<style>#xuefei{opacity: 1;}</style>');
}, delay);

$(function () { $("input,select,textarea").not("[type=submit]").jqBootstrapValidation(); } );

<<<<<<< HEAD
$(document).ready(function(){
    // Jquery Methods go

    // COLLECT HEIGHT AND WIDTH
    var slideCount = $('#shop-slider ul li').length; //3 number of items
    // var slideHeight = $('#shop-slider ul li').height(); 
    var slideWidth = $('#shop-slider ul li').width(); 
    var currentIndex = 0;

    setInterval(function(){
        currentIndex = (currentIndex + 1) % slideCount;
        $('#shop-slider ul').css('transform', 'translateX(' + (-currentIndex * slideWidth) + 'px)');
    }, 5000);
    


// TABBING
$(function(){
    // Hide all tab contents initially
    $('.tab-content').hide();

    // Show the content of the clicked tab
    $('#about-btn').click(function(){
        $('.footer-wrapper').hide();
        $('#about-content').show();
    });
    $('#faq-btn').click(function(){
        $('.footer-wrapper').hide();
        $('#faq-content').show();
    });
    $('#policy-btn').click(function(){
        $('.footer-wrapper').hide();
        $('#policy-content').show();
    });
    $('#contact-btn').click(function(){
        $('.footer-wrapper').hide();
        $('#contact-content').show();
    });

    $('.e-ad').click(function(){
        $('.footer-wrapper').hide();
        $('#contact-content').show();
    });
    $('.sub').click(function(){
        $('.footer-wrapper').hide();
        $('#subscribe-content').show();
    });




    // Add click event to h1 elements to scroll back to footer
    $('.tab-content h1').click(function(){
        $('.footer-wrapper').show();
        document.querySelector('.footer-wrapper').scrollIntoView({behavior:'smooth'})
        $('.tab-content').hide();
    });      
    

});

});



    
=======
$(document).ready(function(){
    // Jquery Methods go

    // COLLECT HEIGHT AND WIDTH
    var slideCount = $('#shop-slider ul li').length; //3 number of items
    // var slideHeight = $('#shop-slider ul li').height(); 
    var slideWidth = $('#shop-slider ul li').width(); 
    var currentIndex = 0;

    setInterval(function(){
        currentIndex = (currentIndex + 1) % slideCount;
        $('#shop-slider ul').css('transform', 'translateX(' + (-currentIndex * slideWidth) + 'px)');
    }, 5000);
    


// TABBING
$(function(){
    // Hide all tab contents initially
    $('.tab-content').hide();

    // Show the content of the clicked tab
    $('#about-btn').click(function(){
        $('.footer-wrapper').hide();
        $('#about-content').show();
    });
    $('#faq-btn').click(function(){
        $('.footer-wrapper').hide();
        $('#faq-content').show();
    });
    $('#policy-btn').click(function(){
        $('.footer-wrapper').hide();
        $('#policy-content').show();
    });
    $('#contact-btn').click(function(){
        $('.footer-wrapper').hide();
        $('#contact-content').show();
    });

    $('.e-ad').click(function(){
        $('.footer-wrapper').hide();
        $('#contact-content').show();
    });
    $('.sub').click(function(){
        $('.footer-wrapper').hide();
        $('#subscribe-content').show();
    });




    // Add click event to h1 elements to scroll back to footer
    $('.tab-content h1').click(function(){
        $('.footer-wrapper').show();
        document.querySelector('.footer-wrapper').scrollIntoView({behavior:'smooth'})
        $('.tab-content').hide();
    });      
    

});

});



    
>>>>>>> fe19015 (Updated .gitignore and removed unnecessary files)

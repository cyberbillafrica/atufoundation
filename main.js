(function ($) {
    "use strict";
    
    // loader
    var loader = function () {
        setTimeout(function () {
            if ($('#loader').length > 0) {
                $('#loader').removeClass('show');
            }
        }, 1);
    };
    loader();
  
    
    document.addEventListener('DOMContentLoaded', function() {
        const donationFormContainer = document.getElementById('donationFormContainer');
        const form = document.getElementById('donationForm');
        const amountButtons = document.querySelectorAll('.amount-button');
        const customAmountBtn = document.getElementById('customAmountBtn');
        const customAmountContainer = document.getElementById('customAmountContainer');
        const customAmountInput = document.getElementById('customAmount');
        const accountDetails = document.getElementById('accountDetails');
        const paidButton = document.getElementById('paidButton');
        const uploadSection = document.getElementById('uploadSection');
        const paymentProofForm = document.getElementById('paymentProofForm');
  
        let selectedAmount = null;
  
        amountButtons.forEach(button => {
          button.addEventListener('click', function() {
            amountButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            selectedAmount = this.dataset.amount;
            customAmountContainer.style.display = 'none';
            customAmountInput.required = false;
          });
        });
  
        customAmountBtn.addEventListener('click', function() {
          amountButtons.forEach(btn => btn.classList.remove('active'));
          this.classList.add('active');
          customAmountContainer.style.display = 'block';
          customAmountInput.required = true;
          selectedAmount = 'custom';
        });
  
        form.addEventListener('submit', function(e) {
          e.preventDefault();
          
          let donationAmount;
          if (selectedAmount === 'custom') {
            donationAmount = customAmountInput.value;
          } else {
            donationAmount = selectedAmount;
          }
  
          if (donationAmount) {
            donationFormContainer.style.display = 'none';
            accountDetails.style.display = 'block';
          } else {
            alert('Please select or enter a donation amount.');
          }
        });
  
        paidButton.addEventListener('click', function() {
          accountDetails.style.display = 'none';
          uploadSection.style.display = 'block';
  
          // Pre-fill donor details
          document.getElementById('donorName').value = document.getElementById('name').value;
          document.getElementById('donorEmail').value = document.getElementById('email').value;
        });
  
        paymentProofForm.addEventListener('submit', function(e) {
          e.preventDefault();
          const fileInput = document.getElementById('paymentProof');
          if (fileInput.files.length > 0) {
            alert('Thank you for your donation! Your payment proof and details have been submitted. We will contact you');
            // Here you would typically send the form data to a server
          } else {
            alert('Please select a file to upload.');
          }
        });
      });




    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
    
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass('nav-sticky');
        } else {
            $('.navbar').removeClass('nav-sticky');
        }
    });
    
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });

    
    // Main carousel
    $(".carousel .owl-carousel").owlCarousel({
        autoplay: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items: 1,
        smartSpeed: 300,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ]
    });
    
    
    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });
    
    
    // Causes carousel
    $(".causes-carousel").owlCarousel({
        autoplay: true,
        animateIn: 'slideInDown',
        animateOut: 'slideOutDown',
        items: 1,
        smartSpeed: 450,
        dots: false,
        loop: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
    
    // Causes progress
    $('.causes-progress').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});
    
    
    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel
    $(".testimonials-carousel").owlCarousel({
        center: true,
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
    
    // Related post carousel
    $(".related-slider").owlCarousel({
        autoplay: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            }
        }
    });
    
})(jQuery);


// Responsive Navigation
const body = document.querySelector("body"),
	nav = document.querySelector("nav"),
	sidebarOpen = document.querySelector(".sidebarOpen"),
	siderbarClose = document.querySelector(".siderbarClose");

	//   js code to toggle sidebar
	sidebarOpen.addEventListener("click" , () =>{
		nav.classList.add("active");
	});

	body.addEventListener("click" , e =>{
		let clickedElm = e.target;

		if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
		    nav.classList.remove("active");
		}
});

// Department Course Slider
$('.courses-department').owlCarousel({
    loop:true,
    margin:12,
    nav: false,
    dots: false,
    autoplay:true,
    lazyLoad: true,
    navText: ['<i class="fa-solid fa-arrow-left"></i>','<i class="fa-solid fa-arrow-right"></i>'],
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:2,
            dots: true,
            margin:12,
            autoplay:true,
            center: true,
            nav:false
        },
        575:{
            items: 3
        },
        768:{
            items:4,
        },
        992:{
            items:6,
            nav:true
        }
    }
});

// Course Slider
$('.course-carosel').owlCarousel({
    margin:2,
    dots: false,
    nav: true,
    loop: true,
    navText: ['<i class="fa-solid fa-arrow-left"></i>','<i class="fa-solid fa-arrow-right"></i>'],
    responsive:{
        0:{
            items:1,
            center: true,
    		nav: true,
        },
        575:{
            items: 3
        },
        768:{
            items:4,
        },
        992:{
            items:4,
        }
    }
});

// Mentor Slider
$('.mentor-carosel').owlCarousel({
    loop:true,
    margin:12,
    nav: false,
    dots: false,
    autoplay:true,
    lazyLoad: true,
    navText: ['<i class="fa-solid fa-arrow-left"></i>','<i class="fa-solid fa-arrow-right"></i>'],
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1,
            dots: true,
            margin:12,
            autoplay:true,
            center: true,
        },
        575:{
            items: 2,
        },
        768:{
            items:2
        },
        992:{
            items:3,
            nav: true
        }
    }
});

// review Slider
$('.review-carosel').owlCarousel({
    loop:true,
    margin:12,
    nav: true,
    dots: false,
    autoplay:true,
    lazyLoad: true,
    center: true,
    navText: ['<i class="fa-solid fa-arrow-left"></i>','<i class="fa-solid fa-arrow-right"></i>'],
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1,
            dots: true,
            margin: 12,
            nav:false,
            center: true,
        },
        575:{
            items: 1,
        },
        768:{
            items:2,
            nav: true
        },
        992:{
            items:3
        }
    }
});

// Slick Slider Workshop image section
$(".wokspece_img").slick({
  autoplay:false,
  slidesToShow:1,
  slidesToScroll:1,
  // fade:true,
  arrows:false,
  dots:false,
  asNavFor:".wokspece_navs"
})
$(".wokspece_navs").slick({
  autoplay:true,
  autoplaySpeed: 1000,
  slidesToShow:9,
  slidesToScroll:1,
  // fade:true,
  focusOnSelect:true,
  arrows:true,
  dots:false,
  asNavFor:".wokspece_img",
  prevArrow:'<i class="fa fa-angle-left workspecePrevArrow"></i>',
  nextArrow:'<i class="fa fa-angle-right workspeceNextArrow"></i>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 5
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 3
      }
    }
  ]
})

//video-popup
new VenoBox({
    selector: '.RICT_Videos',
});

// AutoColored Section
let sections = document.querySelectorAll('.sec');
let navLinks = document.querySelectorAll('.course_detailes .navtabs a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 15;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.course_detailes .navtabs a[href*=' + id + ']').classList.add('active');
            });
        };
    });
}

// demo-carosel
$('.demo-carosel').owlCarousel({
    loop:true,
    items: 1,
    margin:12,
    nav: true,
    dots: false,
    autoplay:true,
    lazyLoad: true,
    center: true,
    navText: ['<i class="fa-solid fa-arrow-left"></i>','<i class="fa-solid fa-arrow-right"></i>'],
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
});
// Slick Slider Course Section
$(".CoursesUnderDepartment").slick({
    centerMode:false,
    centerPadding:"0",
    draggable: false,
    fade: true,
    cssEase: 'linear',
    autoplay:false,
    focusOnSelect: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots:false,
    arrows:false,
    asNavFor:".courseDepartment"
  })
  $(".courseDepartment").slick({
    autoplay:false,
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots:false,
    arrows:true,
    prevArrow:'<i class="fa fa-angle-left prevarrow"></i>',
    nextArrow:'<i class="fa fa-angle-right nextarrow"></i>',

    asNavFor:".CoursesUnderDepartment",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: '50px',
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
          centerMode: false,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          centerMode: false,
        }
      },
      {
        breakpoint: 414,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          centerMode: false,
        }
      }
    ]
  });
  $(".course_category_slider").slick({
    centerMode: false,
    autoplay:true,
    focusOnSelect:true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots:false,
    arrows:false,
    prevArrow:'<i class="fa fa-angle-left prevarrow"></i>',
    nextArrow:'<i class="fa fa-angle-right nextarrow"></i>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: true,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 767,
        settings: {
          arrows: true,
          dots:false,
          slidesToShow: 2
        }
      },

      {
        breakpoint: 576,
        settings: {
          arrows: true,
          dots:false,
          slidesToShow: 1
        }
      },
    ]
  });
  
  //bestSelling Start
  $(".bestSelling").slick({
    centerMode: false,
    autoplay:true,
    focusOnSelect:true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots:false,
    arrows:false,
    prevArrow:'<i class="fa fa-angle-left prevarrow"></i>',
    nextArrow:'<i class="fa fa-angle-right nextarrow"></i>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: true,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          dots:true,
          slidesToShow: 2
        }
      },

      {
        breakpoint: 576,
        settings: {
          arrows: false,
          dots:true,
          slidesToShow: 1
        }
      },
    ]
  });

  //Ajax democlass form submit; this part also added on demo Blade file
  
//   $(function() {
//     $.ajaxSetup({
//         headers: {
//             'X-CSRF-TOKEN': jQuery('meta[name="csrf-token"]').attr('content')
//         }
//     });
//     $("#DemoclassForm").on('submit', function(e) {
//         e.preventDefault();

//         $.ajax({
//             url:$(this).attr('action'),
//             method:$(this).attr('method'),
//             data:new FormData(this),
//             processData:false,
//             dataType:'json',
//             contentType:false,
//             beforeSend:function(){
//                 $(document).find('span.error-text').text('');
//                 $('.loader').addClass('spinner-border');
//                 $('.submit_btn_text').hide('spinner-border');
//                 $('.submit_btn').attr('disabled', true);
//             },
//             success:function(data){
//                 if(data.status == 0){
//                     $.each(data.error, function(prefix, val){
//                         $('span.'+prefix+'_errorD').text(val[0]);
//                     });
//                     $('.loader').removeClass('spinner-border');
//                     $('.submit_btn_text').show('spinner-border');
//                     $('.submit_btn').removeAttr('disabled');
//                 }else{
//                     $('#DemoclassForm')[0].reset();
//                     Swal.fire({
//                         icon: "success",
//                         title: "Apply Successfull For Demo Class",
//                         showConfirmButton: false,
//                         timer: 2500
//                     })
//                     $('#democlassMOdel').modal('hide');
//                     $('.loader').removeClass('spinner-border');
//                     $('.submit_btn_text').show('spinner-border');
//                     $('.submit_btn').removeAttr('disabled');
//                 }
//             }
//         });

//     });
// });


//ajax admission form submit
$(function() {
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': jQuery('meta[name="csrf-token"]').attr('content')
        }
    });
    $("#admissionForm").on('submit', function(e) {
        e.preventDefault();

        $.ajax({
            url:$(this).attr('action'),
            method:$(this).attr('method'),
            data:new FormData(this),
            processData:false,
            dataType:'json',
            contentType:false,
            beforeSend:function(){
                $(document).find('span.error-text').text('');
                $('.loader').addClass('spinner-border');
                $('.submit_btn_text').hide('spinner-border');
                $('.submit_btn').attr('disabled', true);
            },
            success:function(data){
                if(data.status == 0){
                    $.each(data.error, function(prefix, val){
                        $('span.'+prefix+'_error').text(val[0]);
                    });
                    $('.loader').removeClass('spinner-border');
                    $('.submit_btn_text').show('spinner-border');
                    $('.submit_btn').removeAttr('disabled');
                }else{
                    $('#admissionForm')[0].reset();
                    Swal.fire({
                        icon: "success",
                        title: "Admission Successful testing!",
                        showConfirmButton: false,
                        timer: 2500
                    })
                    $('#admissionModal').modal('hide');
                    $('.loader').removeClass('spinner-border');
                    $('.submit_btn_text').show('spinner-border');
                    $('.submit_btn').removeAttr('disabled');
                    
                    const dashboardUrl = "{{ route('admissionMsg') }}";
                    window.location.href = dashboardUrl;
                }
            }
        });

    });
});

//pop up modal
var myModal = new bootstrap.Modal(document.getElementById("popupadvirtise"));
window.setTimeout(function(){
    myModal.show()
}, 4000);



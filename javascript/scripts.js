$('.magic-text').click(function(){
  var $this = $(this);
  $this.toggleClass('magic-text');
  if($this.hasClass('magic-text')){
      $this.text('More');         
  } else {
      $this.text('Less');
  }
});


// image slideshow slick
  
  
  $('.slider-container').slick({
    autoplay: true, // Do we want it to autoplay? true or false
    autoplaySpeed: 1000, // How long between each slide when auto-playing
    speed: 500, // How fast is the transition in milliseconds
    arrows: false, // Do you want to show arrows to trigger each slide
    accessibility: true, // Enables keyboard tabbing and arrow key navigation
    dots: false, // Enables the dots below to show how many slides
    fade: true, // Changes the animate from slide to fade if true
    infinite: true, // When true, means that it will scroll in a circle
    pauseOnHover: false, // When true means the autoplay pauses when hovering
    pauseOnDotsHover: true, // Pauses the autoplay when hovering over the dots
  });


  
  $('.continuous').slick({
    speed: 9000, 
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false,
    dots: false,
  });  

    

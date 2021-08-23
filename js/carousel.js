$(function() {
/** -----------------------------------------
 * Slider 
 -------------------------------------------*/
  var SliderModule = (function() {
  var pb = {};
  pb.el = $('#slider');
  pb.items = {
    panels: pb.el.find('.slider-wrapper > li'),
  }

  // Interval 
  var SliderInterval,
    currentSlider = 0,
    nextSlider = 1,
    lengthSlider = pb.items.panels.length;

  // Constructor 
  pb.init = function(settings) {
    this.settings = settings || {duration: 8000};
    var items = this.items,
      lengthPanels = items.panels.length,
      output = '';

    // Buttons
    for(var i = 0; i < lengthPanels; i++) {
      if(i == 0) {
        output += '<li class="active"></li>';
      } else {
        output += '<li></li>';
      }
    }

    $('#control-buttons').html(output);

    // Activate
    activateSlider();
    // Control
    $('#control-buttons').on('click', 'li', function(e) {
      var $this = $(this);
      if(!(currentSlider === $this.index())) {
        changePanel($this.index());
      }
    });

  }

  // Activate Func
  var activateSlider = function() {
    SliderInterval = setInterval(pb.startSlider, pb.settings.duration);
    
  }

  // Animation
  pb.startSlider = function() {
    var items = pb.items,
      controls = $('#control-buttons li');
    // Check if it is the last panel to restart the count
    if(nextSlider >= lengthSlider) {
      nextSlider = 0;
      currentSlider = lengthSlider-1;
    }

    controls.removeClass('active').eq(nextSlider).addClass('active');
    items.panels.eq(currentSlider).fadeOut('slow');
    items.panels.eq(nextSlider).fadeIn('slow');

    // Update the slider data
    currentSlider = nextSlider;
    nextSlider += 1;
  }

  // Function to Switch Panel with Controls
  var changePanel = function(id) {
    clearInterval(SliderInterval);
    var items = pb.items,
      controls = $('#control-buttons li');
    // Check if the ID is available between the panels
    if(id >= lengthSlider) {
      id = 0;
    } else if(id < 0) {
      id = lengthSlider-1;
    }

    controls.removeClass('active').eq(id).addClass('active');
    items.panels.eq(currentSlider).fadeOut('slow');
    items.panels.eq(id).fadeIn('slow');

    // Update the slider data again
    currentSlider = id;
    nextSlider = id+1;
    // Reactivate our slider
    activateSlider();
  }

  return pb;
  }());

  SliderModule.init({duration: 4000});

});
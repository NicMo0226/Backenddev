//fades in marvel letters, added css so letters are positioned correctly*/

$(document).ready(function(){

		setInterval(function(){
		$('#first').fadeIn(1000).delay(15000);
	    $('#second').delay(4000).fadeIn(1000).delay(11000);
	    $('#third').delay(9000).fadeIn(1000).delay(6000);
		$('#fourth').delay(14000).fadeIn(1000).delay(6000);
		$('#fifth').delay(19000).fadeIn(1000).delay(6000);
	});
		});

//this is the spider that moves left

$('#NicCert').mouseenter(function() {
	$(this).css("cursor","pointer");
	$(this).animate({width: "300px"}, 'slow');
});

$('#NicCert').mouseleave(function() {
	$(this).animate({width: "200px"}, 'slow');
});




$.fn.typewriter = function() {
  this.each(function() {
      var $ele = $(this), str = $ele.html(), progress = 0, offset = 0;
      $ele.html('');
      var typewriting = function() {



          $ele.html(str.substring(offset, progress++) + (progress & 1 ? '_' : ''));
        if (progress >= str.length){
          return;
        }
        else{
          setTimeout(typewriting, 10 + Math.random()*100);
        }
      }
      typewriting();
  });
  return this;
};
$('#undermiddle').typewriter();


let modalId = $('#image-gallery');

$(document)
  .ready(function () {

    loadGallery(true, 'a.thumbnail');

    //This function disables buttons when needed
    function disableButtons(counter_max, counter_current) {
      $('#show-previous-image, #show-next-image')
        .show();
      if (counter_max === counter_current) {
        $('#show-next-image')
          .hide();
      } else if (counter_current === 1) {
        $('#show-previous-image')
          .hide();
      }
    }

    /**
     *
     * @param setIDs        Sets IDs when DOM is loaded. If using a PHP counter, set to false.
     * @param setClickAttr  Sets the attribute for the click handler.
     */

    function loadGallery(setIDs, setClickAttr) {
      let current_image,
        selector,
        counter = 0;

      $('#show-next-image, #show-previous-image')
        .click(function () {
          if ($(this)
            .attr('id') === 'show-previous-image') {
            current_image--;
          } else {
            current_image++;
          }

          selector = $('[data-image-id="' + current_image + '"]');
          updateGallery(selector);
        });

      function updateGallery(selector) {
        let $sel = selector;
        current_image = $sel.data('image-id');
        $('#image-gallery-title')
          .text($sel.data('title'));
        $('#image-gallery-image')
          .attr('src', $sel.data('image'));
        disableButtons(counter, $sel.data('image-id'));
      }

      if (setIDs == true) {
        $('[data-image-id]')
          .each(function () {
            counter++;
            $(this)
              .attr('data-image-id', counter);
          });
      }
      $(setClickAttr)
        .on('click', function () {
          updateGallery($(this));
        });
    }
  });

// build key actions
$(document)
  .keydown(function (e) {
    switch (e.which) {
      case 37: // left
        if ((modalId.data('bs.modal') || {})._isShown && $('#show-previous-image').is(":visible")) {
          $('#show-previous-image')
            .click();
        }
        break;

      case 39: // right
        if ((modalId.data('bs.modal') || {})._isShown && $('#show-next-image').is(":visible")) {
          $('#show-next-image')
            .click();
        }
        break;

      default:
        return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
  });

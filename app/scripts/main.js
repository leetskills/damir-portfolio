(function($) {
  'use strict'; // Start of use strict

  // Offset for Main Navigation
  $('#nav').affix({
    offset: {
      top: 70
    }
  })

})(jQuery);

$(document).ready(function() {
  $('#scoota-campaigns-lightbox a').simpleLightbox();
  $('#scoota-style-lightbox a').simpleLightbox();
  $('#scoota-create-lightbox a').simpleLightbox();
})

// ======================GOOGLE MAPS INTEGRATION======================= //

		// var myCenter = new google.maps.LatLng(28.459545135498047,77.04367065429688);

		// function initialize() {
		// var mapProp = {
		// center:myCenter,
		// zoom:15,
		// scrollwheel:false,
		// draggable:true,
		// mapTypeId:google.maps.MapTypeId.ROADMAP
		// };

		// var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

		// var marker = new google.maps.Marker({
		// position:myCenter,
		// });

		// marker.setMap(map);
		// }

		// google.maps.event.addDomListener(window, 'load', initialize);
// ======================/GOOGLE MAPS INTEGRATION======================= //

// ======================GOOGLE MAPS INTEGRATION======================= //

    var myCenter1 = new google.maps.LatLng(28.459545135498047,77.04367065429688);
    var myCenter2 = new google.maps.LatLng(28.460180,77.000763);

    function initialize() {
    var mapProp1 = {
    center:myCenter1,
    zoom:15,
    scrollwheel:false,
    draggable:true,
    mapTypeId:google.maps.MapTypeId.ROADMAP
    };

    var mapProp2 = {
    center:myCenter2,
    zoom:15,
    scrollwheel:false,
    draggable:true,
    mapTypeId:google.maps.MapTypeId.ROADMAP
    };

    var map1 = new google.maps.Map(document.getElementById("googleMap1"),mapProp1);
    var map2 = new google.maps.Map(document.getElementById("googleMap2"),mapProp2);

    var marker1 = new google.maps.Marker({
    position:myCenter1,
    });

    var marker2 = new google.maps.Marker({
    position:myCenter2,
    });

    marker1.setMap(map1);
    marker2.setMap(map2);
    }

    google.maps.event.addDomListener(window, 'load', initialize);
// ======================/GOOGLE MAPS INTEGRATION======================= //


		// =======Lightbox configurations====== //
		lightbox.option({
      	'resizeDuration': 200,
      	'wrapAround': true
    	});


	// =======Initialize Tooltip ====== //
		$(document).ready(function(){
    	$('[data-toggle="tooltip"]').tooltip(); 
		});


	// =====Smooth Scrolling between Nav Links===== //

$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a").on('click', function(event) {

  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
      });
    } // End if
  });
})


// =====Animation on Page Scroll===== //
$(window).scroll(function() {

  $(".slideanim-left").each(function(){
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 500) {
      $(this).addClass("animated slideInRight");
    }
  });

  $(".slideanim-right").each(function(){
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 500) {
      $(this).addClass("animated slideInLeft");
    }
  });
$(".slideanim-up").each(function(){
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 500) {
      $(this).addClass("animated slideInUp");
    }
  });
$(".slideanim-down").each(function(){
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 500) {
      $(this).addClass("animated slideInDown");
    }
  });

});


		

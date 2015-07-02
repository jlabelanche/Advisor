$(document).ready(function(){ 
  $('.rating_star').on("click", function() {
    var star = $(this);
    var restroom_id = star.attr("data-form-id");
    var score = star.attr("data-stars");

    $.ajax({
      type: "post",
      url:   "/restrooms/"+restroom_id+"/votes",
      data: {"score": score},
      success: function(response){
        console.log(response);
        update_stars();
        if(response["avg_rating"]){
          $('#average_rating').text(roundToTwo(response["avg_rating"]));
          }
        },
        dataType: "json"
      })
  	});        

function roundToTwo(num) {    
    return + (Math.round(num + "e+2")  + "e-2");
}

	function update_stars(){
	  $('.star_rating_form').each(function() {
	    var restroom = $(this).attr('id');
	    set_stars(restroom, $('#' + restroom + '_stars').val());
	  });
	}

	function set_stars(restroom, stars) {
	  for(i = 1; i <= 5; i++){
	    if(i <= stars){
	      $('#' + restroom + '_' + i).addClass("on");
	    } else {
	      $('#' + restroom + '_' + i).removeClass("on");
	    }
	  }
	}
});



$('.rating_star').on('mouseover', function() {
        var id = $(this).data('id');
        var ratings = $(this).data('rating_star');

        var allRolls = $('.rating_star[ id=' + id + ']');
        
        for(var i = 0; i < ratings; i++) {
            allRolls[i].setAttribute('src', '/rollfull.png');
        }
    });

    $('.rating_star').mouseout(function() {
        var id = $(this).data('id');
        $('.rating_star[id=' + id + ']').attr('src', '/rollempty.png');
    });

    $('.rating_star').on('click', function() {
        var spot = $(this).data('spot');
        var id = $(this).data('id');
        var ratings = $(this).data('rating_star');

        $(this).data('selected', 'yes');                        

        var allRolls = $('.rating_star[ id=' + id + ']');
        
        for(var i = 0; i < ratings; i++) {
            allRolls[i].setAttribute('src', '/rollfull.png');
        }

        $('.rating_star[data-trick-id=' + id + ']').unbind();

        var trickRating = {
            trick_id: id,
            ratings: ratings
        };

       
    });

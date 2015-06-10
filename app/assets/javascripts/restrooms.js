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
          $('#average_rating').text(response["avg_rating"]);
          }
        },
        dataType: "json"
      })
  	});        


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
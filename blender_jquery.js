// JavaScript Document

//***********  GLOBAL VARIABLES *******************
hidden_state = true;

/**
*	Reads the get parameters from the URL and returns an associative array (hashmap) with the 
*	parameter keys along with their respective value
**/
function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

/**
*	Provides clickable state functionality to any element it is attached to
*	@param {function} a
*	@param {function} b
* 	return {nothing}
*/
$.fn.clicktoggle = function(a,b){
    return this.each(function(){
        var clicked = false;
        $(this).bind("click",function(){
            if (clicked) {
                clicked = false;
                return b.apply(this,arguments);
            }
            clicked = true;
            return a.apply(this,arguments);
        });
    });
};

$(function(){
	
	//This is for the Pocket Guides----------------------------------------------------
	
	$(".code_sh").hide();
	$(".package").hide();
	
	$(".title").click(function () {
		$(this).closest(".head").next(".code_sh").slideToggle();
	});
	
	$(".package_title").click(function () {
		$(this).closest(".package_head").next(".package").slideToggle();
	});
	
	//----------------------------------END CODE for the Pocket Guides-----------------
	
	//read the url and get the target parameter from it
	var target = getUrlVars()["target"];
	
	$('a[href="#' + target +'"]').addClass("green");

	//add a triggable event when the links inside an unordered list (the index list) are clicked to be colored in a different color
	$("ul a").click(function(e) {
        $(this).addClass("green");
    });

	//hide things that need to be hidden at start	
	$("img").addClass("hide");
	$(".hide").hide();
	$(".code").hide();
	
	  $('.clicked').click(function()
	  {
		  var iteration = $(this).data('iteration') || 1;
		  switch ( iteration) 
		  {
			  case 1:
			  $(this).next(".hide").slideDown(200);
			  break;
			  
			  case 2:
			  $(this).next(".hide").slideUp(200);
			  break;
		  }
		  
		  iteration++;
		  if (iteration>2) iteration=1;
		  $(this).data('iteration',iteration);
	  });
	  
	
	 $('.show_code').click(function()
	  {
		  console.log($(this));
		  
		  var iteration = $(this).data('iteration') || 1;
		  switch ( iteration) 
		  {
			  case 1:
			  $(this).parent().parent().prev().find(".code").show();
			  break;
			  
			  case 2:
			  $(this).parent().parent().prev().find(".code").hide();
			  break;
		  }
		  
		  iteration++;
		  if (iteration>2) iteration=1;
		  $(this).data('iteration',iteration);
	  });
	
	
});
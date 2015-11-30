$(document).ready(function () {
	    $(window).scroll(function() {
	        var scroll = $(window).scrollTop();
	 		//alert("scrolllly");
	        if (scroll >= 120) {
	            $("header").addClass('smaller');
	            $(".navBtn").addClass('smaller');
	            $("#indexLink").addClass('indexLinkSmaller');
	            //alert("size change");
	        } else {
	            $("header").removeClass("smaller");
	            $(".navBtn").removeClass('smaller');
	            $("#indexLink").removeClass('indexLinkSmaller');
	        }
	    });
});
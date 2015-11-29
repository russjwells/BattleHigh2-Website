$(document).ready(function () {

	var fullnameOut = $("#fullnameOut");
	var nicknameOut = $("#nicknameOut");
	var classOut = $("#classOut");
	var ageOut = $("#ageOut");
	var heightOut = $("#heightOut");
	var weightOut = $("#weightOut");
	var ethnicityOut = $("#ethnicityOut");
	var fightingstyleOut = $("#fightingstyleOut");
	var characteristicsOut = $("#characteristicsOut");
	var picOut = $("#charPic");
	var charDesc = $("#charDesc");
	var charDesc2 = $("#charDesc2");

	var selectedChar = "";
	var charNum;
	var picNum;

	var charData;
	$.getJSON('characters2.json', function(data){
		charData = data;
	});

	

	$('.char img').on('click', function(event) {
		$('.char').removeClass('selectedChar');
		$(this).parent().addClass('selectedChar');
		//alert(this.id);
		selectedChar=this.id;

		if (this.id=="random"){
			var ran = getNumber();
			//alert(ran);
			picNum=01;
			charNum=1;
		}else{
			//selectedChar = $(this).parent().id;
		//alert(selectedChar);
		

		//alert(this.src);
		charNum=this.src.match(/([0-9])\w/)[0];
		picNum = charNum;
		charNum = parseInt(charNum);
		
		//alert(charNum);

		updateDisplay(selectedChar);
		}
		
	});

function getNumber() {
    return (n = 14 * Math.ceil(Math.random())) === 8? 15: n;
}

function updateDisplay(character){
	
	//$.getJSON('characters.json', function(data){
	//	alert(data.characters[0].fullname);
	//});
	charNum=charNum-1;
	//alert(charData.characters[charNum].fullname);

	fullnameOut.text(charData.characters[charNum].fullname);
	nicknameOut.text(charData.characters[charNum].nickname);
	classOut.text(charData.characters[charNum].hsclass);
	ageOut.text(charData.characters[charNum].age);
	heightOut.text(charData.characters[charNum].cheight);
	weightOut.text(charData.characters[charNum].weight);
	ethnicityOut.text(charData.characters[charNum].ethnicity);
	fightingstyleOut.text(charData.characters[charNum].fightingstyle);
	characteristicsOut.text(charData.characters[charNum].characteristics);
	
	var img_l = "url(character/char"+picNum+"_l.png)";
	//alert(img_l);
	picOut.css('background-image',img_l);
	charDesc.text(charData.characters[charNum].desc1);
	charDesc2.text(charData.characters[charNum].desc2);
}

});

function selectCharacter(num){

}
/*
var shinji = {
	"fullname" : "Shinji Ozawa",
	"nickname" : "none",
	"age":"17",
    "height":"5 ft 10 in",
    "weight":"159lbs",
    "ethnicity":"Japanese / Hispanic",
    "class":"Junior",
    "element":"Air",
    "fightingstyle":"Karate",
    "characteristics":"Ambitious, independent",
    "desc1":"After his humiliating defeat at the hands of his older brother's hands, the gang Shinji led, The Rivals, disbanded. Shinji lost most of his friends as well as his girlfriend, Mai; Heavyweight remained his only friend. Shinji spiraled into a deep depression, blaming Jiro for all his problems.",
    "desc2":"Shinji soon began sighting a mysterious figure roaming the halls, a girl he still loved but hadn't seen in months. Was it Michelle, his first love? Confused but in need of some hope in his life, Shinji searches for the mysterious girl."

};

var ryken = {
	"fullname" : "Ryken Volynski",
	"nickname" : "none"
}*/
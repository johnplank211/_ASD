/*$(function(){

	$("#checklistForm h5").fadeOut().
						fadeIn().
						fadeOut().
						fadeIn().
						animate({fontSize:15},1000).
						animate({fontSize:12},1000).
						animate({fontSize:15},1000).
						animate({fontSize:12},1000).
						animate({fontSize:15},1000).
						animate({fontSize:12},1000).
						css({color:"red"})
	;

});*/




console.log("bit me");

$('#home').on('pageinit', function(){
	//code needed for home page goes here

console.log("eat it");

});	
		
$('#form').on('pageinit', function(){

		var displayLink = $("#displayLink");
		displayLink.on("click", getData);
	 	var clearLink = $("#clear");
		clearLink.on("click", clearLocal);
		var save = $("#submit");
		save.on("click", validate);

		var myForm = $('#checklistForm');
		    myForm.validate({
			invalidHandler: function(form, validator) {
				console.log("Validate broken")
			},
			submitHandler: function() {
				var data = myForm.serializeArray();
				storeData(data);
				console.log("hello");
			}
		});
	
	//any other code needed for addItem page goes here
	
});

//The functions below can go inside or outside the pageinit function for the page in which it is needed.

var autoFillData = function (){
	 for ( var n in json) {
			var id = Math.floor(Math.random()* 1000001);
			localStorage.setItem(id, JSON.stringify(json[n]));
		}
};

var getData = function () {
		changePage("savedData");
		//toggleControls("on");
		if (localStorage.length === 0) {
			alert("There is no data in Local Storage so data was added. ");
			autoFillData();
		}

		var savedData = $("#savedData");
		refreshList();
		for (var i = 0, len = localStorage.length; i < len; i++) {
			 $("<ul>").append(savedData);
			 //var linksLi = $("<li>");
			 //makeList.appendTo("#makeli");
			 var key = localStorage.key(i);
			 var value = localStorage.getItem(key);

			 var obj = JSON.parse(value);
			 console.log(key, value, obj);
			 //var makeSubList = $("<ul>");
			 //makeli.appendTo("#makeSubList");
			 //getImage(obj.apocalypse[1], makeSubList);
			 for (var t in obj) {
			 	$("<p>" + obj[t][0] + "</p>").append(savedData);
			 	// var makeSubLi = $("<li>");
			 	// makeSubList.appendTo("#makeSubLi");
			 	 //var optSubText = obj[t][0]+" "+obj[t][1];
			 	// makeSubLi.html = optSubText;
			 	// makeSubList.appendTo("#linksLi");
			 }
			//makeItemLinks(localStorage.key(i),  linksLi);
			//console.log(i);
		}
		changePage("savedData");
		refreshList();
		console.log("bravo");	
	};

var changePage = function(pageId){
		console.log(pageId);
		$('#'+ pageId).trigger('pageinit');
		$.mobile.changePage($('#' + pageId), {transition:"slide"});
};

function refreshList(){
	console.log('List refreshed');
	$("#checklistData").listview('refresh');
};




var getRadio = function () {
		var radio = $(":radio[name=apocalypse]:checked").val();
		return radio;
		console.log(radio);
		
	};





var getCheckBoxValue = function () {
		// var checkBox = 13;
		// for (var i=0; i<checkBox; i++) {

		// }
		var checkboxes = [];
			$(":checkbox:checked").each(function(x){
				checkboxes[x]= $(this).val()
				console.log(x, checkboxes);
			})

		if($("#firearm").is(':checked')){
			firearmValue = true;
		}else{
			firearmValue = false;
		}
		if($("#ammo").is(':checked')){
			ammoValue = true;
		}else{
			ammoValue = false;
		}
		if($("#meleeWeapon").is(':checked')){
			meleeWeaponValue = true;
		}else{
			meleeWeaponValue = false;
		}
		if($("#cannedFood").is(':checked')){
			cannedValue = true;
		}else{
			cannedValue = false;
		}
		if($("#water").is(':checked')){
			waterValue = true;
		}else{
			waterValue = false;
		}
		if($("#chainMeshSuit").is(':checked')){
			chainMeshSuitValue = true;
		}else{
			chainMeshSuitValue = false;
		}
		if($("#TopographicalMap").is(':checked')){
			topographicalMapValue = true;
		}else{
			topographicalMapValue = false;
		}
		if($("#leatherman").is(':checked')){
			leathermanValue = true;
		}else{
			leathermanValue = false;
		}
		if($("#rucksack").is(':checked')){
			rucksackValue = true;
		}else{
			rucksackValue = false;
		}
		if($("#boots").is(':checked')){
			bootsValue = true;
		}else{
			bootsValue = false;
		}
		if($("#matches").is(':checked')){
			matchesValue = true;
		}else{
			matchesValue = false;
		}
		if($("#p38").is(':checked')){
			p38Value = true;
		}else{
			p38Value = false;
		}
		if($("#intestinalFortitude").is(':checked')){
			intestinalFortitudeValue = true;
		}else{
			intestinalFortitudeValue = false;
		}



		
	};


var storeData = function(key){
	console.log("boom");
		var id;
	if(!key) {
			 id    		= Math.floor(Math.random()* 1000001);
		} else {
			 id = key;
		}
		getCheckBoxValue();
		var apocalypseValue = getRadio();
		var item 			= {};
		    item.apocalypse = ["Apocalypse:", apocalypseValue];
			item.fear       = ["Fear level:", $("#select").val()];
			item.firearm	= ["Firearm:", firearmValue];
			item.ammo		= ["Ammo:", ammoValue];
			item.melee 		= ["Melee weapon:", meleeWeaponValue];
			item.canned		= ["Canned:", cannedValue];
			item.water		= ["Water:", waterValue];
			item.chain		= ["Chain mesh suit:", chainMeshSuitValue];
			item.map 		= ["Topographical Map:", topographicalMapValue];
			item.leatherman = ["Leatherman:", leathermanValue];
			item.rucksack	= ["Rucksack:", rucksackValue];
			item.boots		= ["Boots:", bootsValue];
			item.matches	= ["Matches:", matchesValue];
			item.p38		= ["P38:", p38Value];
			item.intestinal = ["Intestinal Fortitude:", intestinalFortitudeValue];			
			item.date       = ["World Ended:", $("#mydate").val()];
			item.email		= ["Email:", $("#email").val()];
			item.comments	= ["Comments:", $("#comments").val()];
			item.readiness  = ["Readiness:", $("#readiness").val()];

		localStorage.setItem(id, JSON.stringify(item));
		alert("Checklist Saved!");
	console.log(item);
}; 

var	deleteItem = function (){
			
};
					
var clearLocal = function(){
	if (localStorage.length === 0) {
				alert("All clear.")
				}else{
					localStorage.clear();
					window.location.reload();
					return false;
			}
};

var validate;


	$('#json').on('click', function(){			
		$('<h2>').html('JSON starts here').appendTo('#items');
		$.ajax({
			url: 'data.json',
			type: 'GET',
			dataType: 'json',
			success: function(answer){
				console.log(answer);

				for (var i=0, j=answer.data1.length; i<j; i++){
					
					console.log(j);
					var jdata = answer.data1[i];
					console.log(answer);

					$(''+
						'<li>'+ 
							jdata.fear +'<br />'+
							jdata.apocalypse +'<br />'+
							jdata.firearm +'<br />'+
							jdata.ammo +'<br />'+
							jdata.water +'<br />'+
							jdata.p38 +'<br /><br />'+
						'</li>'
					).appendTo('#items');
					console.log(answer);
				}
			}
		});
	});

	$('#csv').on('click', function(){
		$('<h2>').html('CSV starts here').appendTo('#items');
		$.ajax({
			url: 'data.csv',
			type: 'GET',
			dataType: 'text',
			success: function(answer) {
				var line = answer.split('\n');
				for (var i = 1, x = line.length; i < x; i++) {
					var obj = line[i];
					var item = obj.split(',');
					var itemList = $(
						'<li>' +
						'Apocalypse:' + item[0] + 
						"Firearm: " + item[1] + 
						"Ammo: " + item[2] +
						'</li>'
					).appendTo('#items');
				}	
			}
		});
	});

	$('#xml').on('click', function(){
		$('<h2>').html('XML starts here').appendTo('#items');
			$.ajax({
			url: "data.xml",
			type: "GET",
			dataType: "xml",
			success: function(xml) {
				console.log(xml);
				$(xml).find('item').each(function(){
					var id = $(this).attr('id');
					var firearm = $(this).find('firearm').text();
					var ammo = $(this).find('ammo').text();
					var apocalypse = $(this).find('apocalypse').text();
					$('<div class=items id=item' + id + '></div>')
						.html('<div>' + apocalypse + '<br>' + firearm + '<br>' + ammo + '</div>')
						.appendTo('#items');
				});
			}
		});
	});





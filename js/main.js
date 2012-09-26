
console.log("bit me");

$('#home').on('pageinit', function(){
	//code needed for home page goes here

console.log("eat it");

});	
		
$('#form').on('pageinit', function(){

		var myForm = $('#form');
		    myForm.validate({
			invalidHandler: function(form, validator) {
			},
			submitHandler: function() {
		var data = myForm.serializeArray();
			storeData(data);
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

var getData = function(){
	console.log("yes");
		//changePage("savedData");
		//toggleControls("on");
		if (localStorage.length === 0) {
			alert("There is no data in Local Storage so data was added. ");
			autoFillData();
		}

		var savedData = $("#savedData");
		console.log(savedData);
		for (var i = 0, len = localStorage.length; i < len; i++) {
			 $("<li>").append(savedData);
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
			 	$("<p>" + obj[t][0]+ "</p>").append(savedData);
			 	 //var makeSubLi = $("<li>");
			 	 //makeSubList.appendTo("#makeSubLi");
			 	 //var optSubText = obj[t][0]+" "+obj[t][1];
			 	 //makeSubLi.html = optSubText;
			 	 //makeSubList.appendTo("#linksLi");
			 }
			//makeItemLinks(localStorage.key(i),  linksLi);
			//console.log(i);
		}
		//changePage("savedData");
		//refreshList();
		console.log("tard");	
};

/*var changePage = function(pageId){
		console.log(pageId);
		$('#'+ pageId).trigger('pageinit');
		$.mobile.changePage($('#' + pageId), {transition:"slide"});
};*/


var storeData = function(data){
	if(!key) {
			var id    		= Math.floor(Math.random()* 1000001);
		} else {
			var id = key;
		}
		getCheckBoxValue();
		getRadio();
		var item 			= {};
		    item.apocalypse = ["Apocalypse:", apocalypseValue];
			item.fear       = ["Fear level:", $("#groups").value];
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
			//item.item		= ["Item:", ge("item").value];			
			item.date       = ["World Ended:", $("#date").value];
			item.email		= ["Email:", $("#email").value];
			item.comments	= ["Comments:", $("#comments").value];
			item.readiness  = ["Readiness:", $("#readiness").value];

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

var displayLink = $("#displayLink");
		displayLink.on("click", getData);
	 	var clearLink = $("#clear");
		clearLink.on("click", clearLocal);
		var save = $("#submit");
		save.on("click", validate);

/*});*/


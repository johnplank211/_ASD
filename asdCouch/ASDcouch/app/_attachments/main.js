





/*	$("#checklistForm h5").fadeOut().
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
	 	//var clearLink = $("#clear");
		//clearLink.on("click", clearLocal);
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
		//console.log("here here")
			$("#show").empty()
			//$("#show").listview("refresh");
			 var show = $("#show");
			 var li = $("<li>");
			 
		alert("please!");
			 $.couch.db("apocalypse_app").view("apocalypse/apocalypse", {
				    "success": function(data){
		console.log("better");
			$.each(data.rows, function(index, apocalypse){
				
				console.log(data);
				//var bill = person.value.bill;
				//var id = apocalypse.value.key;
				var firearm = apocalypse.value.firearm;
				var ammo = apocalypse.value.ammo;
				var fear = apocalypse.value.fear;
				var water = apocalypse.value.water;
				var apocalypse = apocalypse.value.apocalypse;
				//var melee = apocalypse.value.melee;
				//var canned = apocalypse.value.canned;				
				//var chain = apocalypse.value.chain;
				//var map = apocalypse.value.map;
				//var leatherman = apocalypse.value.leatherman;
				//var rucksack = apocalypse.value.rucksack;
				//var boots = apocalypse.value.boots;
				//var matches = apocalypse.value.matches;
				//var p38 = apocalypse.value.p38;
				//var intestinal = apocalypse.value.intestinal;
				//var date = apocalypse.value.date;
				//var email = apocalypse.value.eamil;
				//var comments = apocalypse.value.comments;
				//var readiness = apocalypse.value.readiness;
				
				//$("<p>" + melee + "<p>").appendTo(show);
				$("<li>" + firearm     + "<li>").appendTo(li).appendTo(show);;
				$("<li>" + ammo        + "<li>").appendTo(li).appendTo(show);;
				$("<li>" + fear        + "<li>").appendTo(li).appendTo(show);;
				$("<li>" + water       + "<li>").appendTo(li).appendTo(show);;				
				$("<li>" + apocalypse  + "<li>" + "</br>").appendTo(li).appendTo(show).append(
						$("<a>").attr("href", "program.html")
							.text(apocalypse)
								
					
					);

				/*(show).append(
					$("<li>").append(
						$("<a>").attr("href", "program.html")
							.text(apocalypse)
								
					
					)
				);				*/
			
		});
		//$("#show").listview("refresh");
	},
				    error: function(status) {
				        console.log(status);
				    },
				    reduce: false
				});
		alert("help!");
			changePage("savedData");
			//refreshList();
			
			console.log("derp");	
			
	};
///End getData





/////////
/*var doc = {
    _id: "d12ee5ea1df6baa2b06451f44a019ab9",
    _rev: "2-13839535feb250d3d8290998b8af17c3"
};
$.couch.db("mydb").removeDoc(doc, {
     success: function(data) {
         console.log(data);
    },
    error: function(status) {
        console.log(status);
    }
});
*/
/////////////

/*$.couch.db("apocalypse_app").openDoc("apocalypse:2", {
    success: function(data) {
        console.log(data);
    },
    error: function(status) {
        console.log(status);
    }
});*/

/////////////








var changePage = function(pageId){
		console.log(pageId);
		$('#'+ pageId).trigger('pageinit');
		$.mobile.changePage($('#' + pageId), {transition:"slide"});
};

function refreshList(){
	console.log('refreshed');
	$("#show").listview('refresh');
};




var getRadio = function () {
		var radio = $(":radio[name=apocalypse]:checked").val();
		return radio;
		console.log(radio);	
};





var getCheckBoxValue = function () {
		
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


var storeData = function(data){
	console.log("boom");
		
		getCheckBoxValue();
		var apocalypseValue = getRadio();
		var item 			= {};
			item._id		= "apocalypse:" + Math.floor(Math.random()* 1000001);
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
		
						$.couch.db("apocalypse_app").saveDoc(item, {
			    success: function(data) {
			        console.log(data);
			    },
			    error: function(status) {
			        console.log(status);
			    }
			});


		alert("Checklist Saved!");
	console.log(item);
	changePage("savedData");
	getData(data);
}; 

var	deleteItem = function (){
			
};


var editItem = function () {
		//var value = localStorage.getItem(this.key);
		//var item = JSON.parse(value);

		//toggleControls("off");

		var radio = document.forms[0].apocalypse;
		for (var i = 0; i<radio.length; i++) {
			if (radio[i].value == "Natural" && item.apocalypse[1] == "Natural") {
				radio[i].attr("checked", "checked");
			} else if (radio[i].value == "Atomic" && item.apocalypse[1] == "Atomic") {
				radio[i].attr("checked", "checked");
			} else if (radio[i].value == "Zombie" && item.apocalypse[1] == "Zombie") {
				radio[i].attr("checked", "checked");
			} else if (radio[i].value == "Aliens" && item.apocalypse[1] == "Aliens") {
				radio[i].attr("checked", "checked");
			} else if (radio[i].value == "Biblical" && item.apocalypse[1] == "Biblical") {
				radio[i].attr("checked", "checked");
		}	
		};		

		if(item.firearm[1] == "yes") {
			$("#firearm").attr("checked", "checked");
		}
		if(item.ammo[1] == "yes") {
			$("#ammo").attr("checked", "checked");
		}
		if(item.melee[1] == "yes") {
			$("#meleeWeapon").attr("checked", "checked");
		}
		if(item.canned[1] == "yes") {
			$("#cannedFood").attr("checked", "checked");
		}
		if(item.water[1] == "yes") {
			$("#water").attr("checked", "checked");
		}
		if(item.chain[1] == "yes") {
			$("#chainMeshSuit").attr("checked", "checked");
		}
		if(item.map[1] == "yes") {
			$("#topographicalMap").attr("checked", "checked");
		}
		if(item.leatherman[1] == "yes") {
			$("#leatherman").attr("checked", "checked");
		}
		if(item.rucksack[1] == "yes") {
			$("#rucksack").attr("checked", "checked");
		}
		if(item.boots[1] == "yes") {
			$("#boots").attr("checked", "checked");
		}
		if(item.matches[1] == "yes") {
			$("#matches").attr("checked", "checked");
		}
		if(item.p38[1] == "yes") {
			$("#p38").attr("checked", "checked");
		}
		if(item.intestinal[1] == "yes") {
			$("#intestinalFortitude").attr("checked", "checked");
		}

		$("#readiness").value = item.readiness[1]; 
		$("#date").value = item.date[1];
		$("#comments").value = item.comments[1];
		$("#groups").value = item.fear[1];     		
		$("#item").value = item.item[1];
		$("#email").value = item.email[1];

		save.off("click", storeData);
		$("#submit").value = "Edit Checklist";
		var editSubmit = $("#submit");
		editSubmit.on("click", validate);
		editSubmit.key = this.key;
};						



var deleteItem =function () {
		var ask = confirm("Are you sure you want to erase this Checklist? Has a cure been found?");
		if (ask) {
			localStorage.removeItem(this.key);
			alert("Thank God for the cure, your checklist has been deleted!!");
			window.location.reload();
		} else {
			alert("Checklist not erased");
		}
	}


var makeItemLinks = function (key, linksLi) {
		var editLink = $("<a>");
	    editLink.href = "#";
		editLink.key = key;
		var editText = "Edit Checklist";
		editLink.on("click", editItem);
		editLink.html = editText;
		linksLi.appendTo("#editLink");

		var breakTag = $("<br>");
		linksLi.appendTo("#breakTag");

		var deleteLink = $("<a>");
		deleteLink.href = "#";
		deleteLink.key = key;
		var deleteText = "Delete Checklist";
		deleteLink.on("click", deleteItem);
		deleteLink.html = deleteText;
		linksLi.appendTo("#deleteLink");
			console.log("nooooo");

	};


var validate;




$('#json').on('click', function(){			
				refreshAjax("#items")
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




/*var clearLocal = function(){
	if (localStorage.length === 0) {
				alert("All clear.")
				}else{
					localStorage.clear();
					window.location.reload();
					return false;
			}
};*/



/*function refreshAjax(){
	console.log('refreshed');
	$("#items").listview('refresh');
};


	$('#json').on('click', function(){			
				refreshAjax("#items")
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
		refreshAjax("#items")
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
		refreshAjax("#items")
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
	});*/

/*$(document).ready(function() {
	console.log("word");
	$.ajax({
		"url": "_view/person",
		"dataType": "json",
		"success": function(data){
		console.log("better");
			$.each(data.rows, function(index, person){
				var fear = person.value.fear;
				var apocalypse = person.value.apocalypse;
				var firearm = person.value.firearm;
				var ammo = person.value.firearm;
				$("#dummy").append(
					$("<li>").append(
						("<a>").attr("href", "#")
							.text(title)
					)
				);					
			
		});
		$("#dummy").listview("refresh");
	}
});
});*/




/*$(document).ready(function() {
	console.log("word");
	$.ajax({
		"url": "_view/person",
		"dataType": "json",
		"success": function(data){
		console.log("better");
			$.each(data.rows, function(index, person){
				
				
				var bill = person.value.bill;
				var ammo = person.value.ammo;
				var apocalypse = person.value.apocalypse;
				var fear = person.value.fear;
				var firearm = person.value.firearm;
				//console.log(firearm);
				$("#dummy").append(
					$("<li>").append(
						$("<a>").attr("href", "#")
							.text(apocalypse)
								
					
					)
				);					
			
		});
		$("#dummy").listview("refresh");
	}
});
});*/






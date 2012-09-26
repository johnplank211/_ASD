


$('#home').on('pageinit', function(){
	//code needed for home page goes here
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

var autofillData = function (){
	 for ( var n in json) {
			var id = Math.floor(Math.random()* 1000001);
			localStorage.setItem(id, JSON.stringify(json[n]));
		}
};

var getData = function(){
	console.log("F U");
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
		changePage("savedData");
		//refreshList();
		//console.log(obj);	
};

var storeData = function(data){
	
}; 

var	deleteItem = function (){
			
};
					
var clearLocal = function(){

};

var displayLink = $("#displayLink");
		displayLink.on("click", getData);
	 	var clearLink = $("#clear");
		clearLink.on("click", clearLocal);
		var save = $("#submit");
		save.on("click", validate);




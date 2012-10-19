
function (doc) {
 	if (doc._id.substr(0,11) === "apocalypse:") {
 		emit(doc._id, {
 			"firearm": doc.firearm,
 			"ammo": doc.ammo,
 			"fear": doc.fear,
 			"water": doc.water,
 			"apocalypse": doc.apocalypse,
			"melee": doc.melee,
			"canned": doc.canned,
			"chain": doc.chain,
			"map": doc.map,
			"leatherman": doc.leatherman,
			"rucksack": doc.rucksack,
			"boots": doc.boots,
			"matches": doc.matches,
			"p38": doc.p38,
			"intestinal": doc.intestinal,
			"date": doc.date,
			"email": doc.email,
			"comments": doc.comments,
			"readiness": doc.readiness
			
 		});
 	}
 };
 
 
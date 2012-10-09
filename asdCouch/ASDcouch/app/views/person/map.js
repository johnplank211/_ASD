function (doc) {
 	if (doc._id.substr(0,7) === "person:") {
 		emit(doc._id, {
 			"firearm": doc.firearm,
 			"ammo": doc.ammo,
 			"fear": doc.fear,
 			"apocalypse": doc.apocalypse
 		});
 	}
 };
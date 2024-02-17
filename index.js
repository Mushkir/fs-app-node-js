const fsModule = require("fs");
const placesData = require("./data/places.json");

// Todo: Create Each files with detail dynamicaly!
// * Storyline:
// * 1. Create a Folder and named as Favorite Places.
fsModule.mkdir("Favorite Places", (err) => {});

// * 2. Create files with extension of txt and inside the files add the reason for favorite. Do all things dynamically.
placesData.map((place) => {
  console.log(place);
  fsModule.writeFile(
    `Favorite Places/${place.name.toLocaleLowerCase()}`,
    `The reason for famous and favorite: ${place.reason_for_fav}`,
    (err) => {
      if (err) {
        console.log("Errors: " + err);
      }

      console.log("Files created successfully!");
    }
  );
});

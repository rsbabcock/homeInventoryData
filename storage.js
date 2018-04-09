// Define the database as an object
const HomeInventoryDatabase = {}

// Next, we're going to add some keys to our database object. 
// One for each set of data. 
// I want to store information about furniture, crafting items, and electronics that I have in my home.

// Define the arrays (a.k.a. tables) in the database to store each type of items
// TABLES
HomeInventoryDatabase.furniture = []
HomeInventoryDatabase.crafts = []
HomeInventoryDatabase.electronics = []

// Each item that you want to store in your home inventory database will be defined as a standard object.
// Your task is to define at least 10 data items to represent things that you have in your home.

// FURNITURE ITEMS

const cedarChest = {
    name: "Cedar Chest",
    location: "Bedroom",
    description: "I enjoy this cedar chest because me and my dad designed and made it together"
    }
  
const desk = {
    name: "Kenyan Desk",
    location: "Office",
    description: "This desk is from Daniels childhood in Kenya, was built there, and therefore pretty sweet though old and worn "
    }

const shelf = {
    name: "Kenyan Shelf",
    location: "Living Room",
    description: "Another Kenyan built item from Daniel's childhood. I like that it's assymetrical"
    }

// ELECTRIC ITEMS 

const soundSystem = {
    name: "Sound System",
    location: "Living Room",
    description: "Not that special, but certainly makes movies more enjoyable"
}

const polaroid = {
    name: "Polaroid Camera",
    location: "Office Closet",
    description: "We found this while we were dating and took it on several dates, this is a unique antique that still works"
}

const camera = {
    name: "Fuji Camera",
    location: "Office",
    description: "A fuji camera that we use to take family pictures. A great little camera that has lots of oomph"
}

// CRAFT ITEMS

const elephantPaint = {
    name: "Elephant Watercolour Painting",
    location: "Hallway",
    description: "A beautiful watercolor painting of an Elephant, my favourite animal, painted for me by a member of church for our wedding, my favourite art piece"
}

const shofar = {
    name: "Shofar",
    location: "Living Room",
    description: "A shofar, which is an actual goat horn I purchased in Israel. Traditionally used in Israel during bible times"
}

const rhino = {
    name: "Kenyan Rhino",
    location: "Living Room shelf",
    description: "A cute little rhino statue from Kenya, made of soapstone, very heavy and lives on our coat shelf"
}

const orchid = {
    name: "Orchid",
    location: "Living Room",
    description: "Beautiful purple orchid we've had for a year, it just started blooming again and I love it"
}


//   Next, place each object that you have defined into the appropriate database table.
// Remember, I'm using the term table because we're building a database, 
// but the collections are actually arrays, so I can use the push() method.
HomeInventoryDatabase.crafts.push(elephantPaint, shofar, rhino, orchid)
HomeInventoryDatabase.furniture.push(cedarChest, desk, shelf)
HomeInventoryDatabase.electronics.push(soundSystem, polaroid, camera)

// Function to add database to your local browser
const saveDatabase = function (databaseObject, localStorageKey) {
    /*
        Convert the Object into a string.
    */
    const stringifiedDatabase = JSON.stringify(databaseObject)

    /*
        Create a key in local storage, and store the string
        version of your inventory database as the value
    */
    localStorage.setItem(localStorageKey, stringifiedDatabase)
}
// Calls saveDataBase
saveDatabase(HomeInventoryDatabase, "Home Inventory");


// Access Data from local storage
// const loadDatabase = function (localStorageKey) {
//     // Get the string version of the database
//     const databaseString = localStorage.getItem(localStorageKey)

//     // Use JSON.parse() to convert the string back into an object
//     return JSON.parse(databaseString)
// }
// JASKIS
// paste the MongoDB commands you use underneath each prompt

// GETTING STARTED
// 1. Create a database called jaskis
'use jaskis'

// 2. Create a collection called bounties
'db.createCollection(bounties)'

// ADD THE ANIMAL BOUNTIES
// 1. Insert the given "Thanoceros" bounty object
`db.jaskis.insertOne(
    {
    name: "Thanoceros",
    species: "Rhinoceros",
    location: "Grasslands",
    wantedFor: "Eating too much grass",
    client: "Songbird",
    reward: 10000,
    captured: false
  }
    )
`
// 2. Query for all bounties in the bounties collection
`db.jaskis.find()

{ _id: ObjectId("638aaf058fc0c91dc0cff78f"),
  name: 'Thanoceros',
  species: 'Rhinoceros',
  location: 'Grasslands',
  wantedFor: 'Eating too much grass',
  client: 'Songbird',
  reward: 10000,
  captured: false }
`
// 3. Insert many bounties at once using the given objects
`db.jaskis.insertMany([
    {
      "name": "Lokinkajou",
      "species": "Kinkajou",
      "location": "Tropical rainforest",
      "wantedFor": "Partying too late at night",
      "client": "White tiger",
      "reward": 1000,
      "captured": false
    },
    {
      "name": "Nebullama",
      "species": "Llama",
      "location": "Grasslands",
      "wantedFor": "Drinking all the water from the ocean",
      "client": "Songbird",
      "reward": 2500,
      "captured": false
    },
    {
      "name": "Polarwind",
      "species": "Polar Bear",
      "location": "Arctic",
      "wantedFor": "Not hibernating",
      "client": "Sabertooth",
      "reward": 4000,
      "captured": false
    },
    {
      "name": "Wrecking Crows",
      "species": "Crow",
      "location": "Grasslands",
      "wantedFor": "Cawing too loudly",
      "client": "Red wolf",
      "reward": 40000,
      "captured": false
    },
    {
      "name": "Grandhog",
      "species": "Groundhog",
      "location": "Woodlands",
      "wantedFor": "Not coming out of the hole on time and prolonging winter",
      "client": "Songbird",
      "reward": 50000,
      "captured": false
    },
    {
      "name": "Grim Panda",
      "species": "Giant Panda",
      "location": "Temperate forest",
      "wantedFor": "Eating all the bamboo",
      "client": "Red wolf",
      "reward": 5000,
      "captured": false
    }
  ])`
// MANAGE THE DATABASE
// Queries
// 1. Query for all bounties in the Grasslands
`db.jaskis.find()

{ _id: ObjectId("638aaf058fc0c91dc0cff78f"),
  name: 'Thanoceros',
  species: 'Rhinoceros',
  location: 'Grasslands',
  wantedFor: 'Eating too much grass',
  client: 'Songbird',
  reward: 10000,
  captured: false }
{ _id: ObjectId("638aafa18fc0c91dc0cff790"),
  name: 'Lokinkajou',
  species: 'Kinkajou',
  location: 'Tropical rainforest',
  wantedFor: 'Partying too late at night',
  client: 'White tiger',
  reward: 1000,
  captured: false }
{ _id: ObjectId("638aafa18fc0c91dc0cff791"),
  name: 'Nebullama',
  species: 'Llama',
  location: 'Grasslands',
  wantedFor: 'Drinking all the water from the ocean',
  client: 'Songbird',
  reward: 2500,
  captured: false }
{ _id: ObjectId("638aafa18fc0c91dc0cff792"),
  name: 'Polarwind',
  species: 'Polar Bear',
  location: 'Arctic',
  wantedFor: 'Not hibernating',
  client: 'Sabertooth',
  reward: 4000,
  captured: false }
{ _id: ObjectId("638aafa18fc0c91dc0cff793"),
  name: 'Wrecking Crows',
  species: 'Crow',
  location: 'Grasslands',
  wantedFor: 'Cawing too loudly',
  client: 'Red wolf',
  reward: 40000,
  captured: false }
{ _id: ObjectId("638aafa18fc0c91dc0cff794"),
  name: 'Grandhog',
  species: 'Groundhog',
  location: 'Woodlands',
  wantedFor: 'Not coming out of the hole on time and prolonging winter',
  client: 'Songbird',
  reward: 50000,
  captured: false }
{ _id: ObjectId("638aafa18fc0c91dc0cff795"),
  name: 'Grim Panda',
  species: 'Giant Panda',
  location: 'Temperate forest',
  wantedFor: 'Eating all the bamboo',
  client: 'Red wolf',
  reward: 5000,
  captured: false }`
// 2. Query for all bounties with a reward worth 10000 or more
`db.jaskis.find(
    {reward: { $gt: 10000 }}
    )

  { _id: ObjectId("638aafa18fc0c91dc0cff793"),
    name: 'Wrecking Crows',
    species: 'Crow',
    location: 'Grasslands',
    wantedFor: 'Cawing too loudly',
    client: 'Red wolf',
    reward: 40000,
    captured: false }
  { _id: ObjectId("638aafa18fc0c91dc0cff794"),
    name: 'Grandhog',
    species: 'Groundhog',
    location: 'Woodlands',
    wantedFor: 'Not coming out of the hole on time and prolonging winter',
    client: 'Songbird',
    reward: 50000,
    captured: false }`
// 3. Query for all bounties, but exclude the client attribute from being shown
`db.jaskis.find(
    {captured: false},{client: 0})

  { _id: ObjectId("638aaf058fc0c91dc0cff78f"),
    name: 'Thanoceros',
    species: 'Rhinoceros',
    location: 'Grasslands',
    wantedFor: 'Eating too much grass',
    reward: 10000,
    captured: false }
  { _id: ObjectId("638aafa18fc0c91dc0cff790"),
    name: 'Lokinkajou',
    species: 'Kinkajou',
    location: 'Tropical rainforest',
    wantedFor: 'Partying too late at night',
    reward: 1000,
    captured: false }
  { _id: ObjectId("638aafa18fc0c91dc0cff791"),
    name: 'Nebullama',
    species: 'Llama',
    location: 'Grasslands',
    wantedFor: 'Drinking all the water from the ocean',
    reward: 2500,
    captured: false }
  { _id: ObjectId("638aafa18fc0c91dc0cff792"),
    name: 'Polarwind',
    species: 'Polar Bear',
    location: 'Arctic',
    wantedFor: 'Not hibernating',
    reward: 4000,
    captured: false }
  { _id: ObjectId("638aafa18fc0c91dc0cff793"),
    name: 'Wrecking Crows',
    species: 'Crow',
    location: 'Grasslands',
    wantedFor: 'Cawing too loudly',
    reward: 40000,
    captured: false }
  { _id: ObjectId("638aafa18fc0c91dc0cff794"),
    name: 'Grandhog',
    species: 'Groundhog',
    location: 'Woodlands',
    wantedFor: 'Not coming out of the hole on time and prolonging winter',
    reward: 50000,
    captured: false }
  { _id: ObjectId("638aafa18fc0c91dc0cff795"),
    name: 'Grim Panda',
    species: 'Giant Panda',
    location: 'Temperate forest',
    wantedFor: 'Eating all the bamboo',
    reward: 5000,
    captured: false }`
// 4. Query for a Groundhog in the Woodlands
`db.jaskis.findOne(
    {species: 'Groundhog'},{location: 'Woodlands'}
    )
  { _id: ObjectId("638aafa18fc0c91dc0cff794"),
    location: 'Woodlands' }`
// Update and Delete
// 1. Update the reward for Polarwind to 10000
`db.jaskis.updateOne(
    {name: 'Polarwind'},{$set:{ reward: 10000}}
    )
  { acknowledged: true,
    insertedId: null,
    matchedCount: 1,
    modifiedCount: 1,
    upsertedCount: 0 }
 
    name: 'Polarwind',
    species: 'Polar Bear',
    location: 'Arctic',
    wantedFor: 'Not hibernating',
    client: 'Sabertooth',
    reward: 10000,
    captured: false }
  `
// 2. Remove Lokinkajou
`db.jaskis.deleteOne(
    { name: 'Lokinkajou'
      
    })
  { acknowledged: true, deletedCount: 1 }
  `
// 3. Delete all bounties sent by Songbird
`db.jaskis.deleteMany({
    client: 'Songbird'
  })
  { acknowledged: true, deletedCount: 3 }
  `
// 4. Update all captured statuses to true
`db.jaskis.updateMany({captured: false},{$set: {captured: true}})

{ acknowledged: true,
  insertedId: null,
  matchedCount: 3,
  modifiedCount: 3,
  upsertedCount: 0 }`
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
`
// MANAGE THE DATABASE
// Queries
// 1. Query for all bounties in the Grasslands
`db.jaskis.find( {location: 'Grasslands'}
)
`
// 2. Query for all bounties with a reward worth 10000 or more
`db.jaskis.find(
    {reward: { $gt: 10000 }}
    )
`
// 3. Query for all bounties, but exclude the client attribute from being shown
`db.jaskis.find(
    {captured: false},{client: 0})
`
// 4. Query for a Groundhog in the Woodlands
`db.jaskis.findOne(
    {species: 'Groundhog'},{location: 'Woodlands'}
    )
 `
// Update and Delete
// 1. Update the reward for Polarwind to 10000
`db.jaskis.updateOne(
    {name: 'Polarwind'},{$set:{ reward: 10000}}
    )
`
// 2. Remove Lokinkajou
`db.jaskis.deleteOne(
    { name: 'Lokinkajou'}
    )
  { acknowledged: true, deletedCount: 1 }
  `
// 3. Delete all bounties sent by Songbird
`db.jaskis.deleteMany({
    client: 'Songbird'}
    )
  { acknowledged: true, deletedCount: 3 }
  `
// 4. Update all captured statuses to true
`db.jaskis.updateMany({captured: false},{$set: {captured: true}})

{ 
  acknowledged: true,
  insertedId: null,
  matchedCount: 3,
  modifiedCount: 3,
  upsertedCount: 0 
}`
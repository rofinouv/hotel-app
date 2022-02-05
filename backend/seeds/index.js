const mongoose = require("mongoose");
const Guest = require("../models/Guest")
const Room = require("../models/Room")

mongoose.connect('mongodb://localhost:27017/hotel-app')
  .then(() => {
    console.log("Database Connected Succesfully");
  })
  .catch((e) => {
    console.log("something wrong happened");
    console.log(e);
  });

const db = mongoose.connection

const firstNames = [
    "Adams",
    'Baker',
    'Clark',
    'Davis',
    'Evans',
    'Frank',
    'Ghosh',
    'Hills',
    'Irwin',
    'Jones',
    'Klein',
    'Lopez',
    'Mason',
    'Nalty',
    'Ochoa'
]

const secondNames = [
    'Patel',
    'Quinn',
    'Reily',
    'Smith',
    'Trott',
    'Usman',
    'Valdo',
    'White',
    'Xiang',
    'Yakub',
    'Zafar',
    'Sneezy',
    'Sleepy',
    'Dopey',
    'Doc'
]

const rooms = [
    "61f7facf76cfd1c7c7bda2fe", 
    "61f7facf76cfd1c7c7bda300", 
    "61f7facf76cfd1c7c7bda302", 
    "61f7facf76cfd1c7c7bda304", 
    "61f7facf76cfd1c7c7bda306", 
    "61f7facf76cfd1c7c7bda308", 
    "61f7facf76cfd1c7c7bda30a", 
    "61f7facf76cfd1c7c7bda30c", 
    "61f7facf76cfd1c7c7bda30e", 
    ]


const sample = (array) => {
    return array[Math.floor(Math.random() * array.length)]
}

const arrNum = [1, 2, 3]
const arr2 = [100000, 250000, 450000]
const arrStat = ["walk in", "from OTA"]

const seedDB = async function() {
    // await Room.deleteMany({})
    await Guest.deleteMany({})
    for (let i = 0; i < 9; i++) {
        const random = Math.floor(Math.random() * 15)
        const people = new Guest({
            name: `${sample(firstNames)}, ${sample(secondNames)}`,
            pax: "1 adult",
            duration: `${sample(arrNum)}`,
            total: `${sample(arr2)}`,
            status: `${sample(arrStat)}`,
            room: `${sample(rooms)}`
        })
        await people.save()
    }
}

// seedDB().then(() => {
//     db.close()
// })

const arr1 = ["standard double", "family premium", "luxury deluxe"]

const arr3 = ["arrival", "vacant"]

const numbers = () => {
    return Math.floor(Math.random() * 30) + 1000
}

const seedRoom = async function() {
    await Room.deleteMany({})
    for (let i = 0; i < 9; i++) {
        const rooms = new Room({
            name: numbers(),
            type: `${sample(arr1)}`,
            price: `${sample(arr2)}`,
            status: `${sample(arr3)}`
        })
        await rooms.save()
    }
}

// seedRoom().then(() => {
//     db.close()
// })


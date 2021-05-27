const toys = [ 
{
    id: 1,
    name: "Truck",
    maker: "Toy World",
    price: 18,
    location: "isle 3",
    weight: 3.2
},

{
    id: 2,
    name: "Football",
    maker: "Sports World",
    price: 21,
    locaiton: "Isle 5",
    weight: 2.1
},

{
    id: 3,
    name: "Skateboard",
    maker: "Street Rollerz",
    price: 32,
    location: "Isle 7",
    weight: 4.9
}
]
const frisbee = {
    id: 4,
    name: "Frisbee",
    maker: "Cloney",
    price: 4,
    location: "Isle 9",
    weight: .7
} 

const bike = {
    id: 5,
    name: "Bike",
    maker: "2Wheels",
    price: 250,
    locaiton: "Isle 12",
    weight: 42
}

const addToyToInventory = (toyObject) => {
    const lastIndex = toys.length - 1

    const currentLastToy = toys[lastIndex]

    const maxId = currentLastToy.id

    const idForNewToy = maxId + 1

    toyObject.id = idForNewToy

    toys.push(toyObject)
}

const plane = {
    name: "plane",
    maker: "Fly Toys",
    price: 14,
    locaiton: "Isle 2",
    weight: 3
}

addToyToInventory(plane)

for (const toy of toys) {
    console.log(`The ${toy.name} costs ${toy.price} dollars. It weighs ${toy.weight} lbs.`)
}

console.log(toys)


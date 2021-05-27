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
toys.push(frisbee)
toys.push(bike)

for (const toy of toys) {
console.log(`The ${toy.name} cost ${toy.price} dollars.`)
}
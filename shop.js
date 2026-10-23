const item = [ 
    {item: "T-Shirt",
    category: "clothing",
    price:10
},
{item: "Sweatshirt",
    category: "clothing",
        price:25
},
{item: "Sweatpants",
    category: "clothing",
        price:20
},
{item: "Polo",
    category: "clothing",
        price:20
},
{item: "Coat",
    category: "clothing",
        price:75
},
{item: "Socks",
    category: "clothing",
        price:12
},
 {item: "Chain",
    category: "accessory",
        price:10
 },
 {item: "Bracelet",
    category: "accessory",
        price:10
 },
 {item: "Belt",
    category: "accessory",
        price:10
 },
 {item: "Hat",
    category: "accessory",
        price:10
 },
 {item: "Necklace",
    category: "accessory",
        price:10
 },
 {item: "Sunglasses",
    category: "accessory",
        price:10
 },
 {item: "Eyeglasses",
    category: "accessory",
        price:10
 },
 {item: "Chair",
    category: "furniture",
        price:10
 },
 {item: "Couch",
    category: "furniture",
        price:10
 },
 {item: "Table",
    category: "furniture",
        price:10
 },
 {item: "Bed Frame",
    category: "furniture",
        price:10
 },
 {item: "Chandelier",
    category: "furniture",
        price:10
 },
 {item: "Cabinet",
    category: "furniture",
        price:10
 },
 {item: "Mattress",
    category: "furniture",
        price:10
 },
]

const cart = []
function addtocart(items){
    cart.push(items.items)
}

addtocart(items[2])
console.log(cart)


removefromcart(items[2])
console.log(cart)

function totalcost(items){
   let cost = 0
   for (let i = 0;i < cart.length; i++) {
      if(items === cart){
         totalcost =totalcost+price[i]
      }
   }
   return totalcost
}
console.log(price)
console.log(cart)
console.log(totalcost)
console.log(items[2,3])
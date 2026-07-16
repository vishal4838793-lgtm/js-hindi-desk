const myNums = [1, 2, 3, 4]

const initialValue = 0
const totalValue = myNums.reduce( (acc,currval) => acc
+currval, initialValue)


console.log(totalValue);

const shoopingCart = [
   
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "dataScience",
        price: 4999
    },
    {
        itemName: "mobileDev",
        price: 5999
    }
]

const priceToPay = shoopingCart.reduce( (acc , item) => acc + item.price,0)

console.log(priceToPay);


export const Greet =()=>{
  const wish= 'Hello World'
  return <h1>{wish}</h1>
}

const OrderPizza = ()=>{
  const isOrder = true
  if (isOrder){
    return <h1>Your order is placed</h1>
  }
  else{
    return <h1>Order is not placed</h1>
  }
}
export default OrderPizza 
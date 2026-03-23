import { useState } from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductsList() {
  // const [ananasas, setAnanasas] = useState({
  //   title: "Ananasas",
  //   price: 10.39,
  //   quantity: 7
  // })

  const [grapes, setGrapes] = useState({
    title: "Grapes",
    price: 10.39,
    quantity: 7,
    img: "https://png.pngtree.com/png-vector/20241225/ourmid/pngtree-delicious-black-grapes-png-image_14877346.png",
  })

  const [products, setProducts] = useState([
    {
      id:0,
      title: "Mandarins",
      price: 0.99, 
      quantity: 34,
      img: "https://png.pngtree.com/png-clipart/20250128/original/pngtree-some-mandarins-with-leave-on-white-background-png-image_20164788.png",
  
    },
    {
      id: 1,
      title: "Apples", 
      img: "https://waapple.org/wp-content/uploads/2021/06/Variety_Cosmic-Crisp-transparent-300x300.png",
      price: 1.34,
      quantity: 78,
    },
    {
      id: 2, 
      title: "Dragonfruits", 
      price: 8.99, 
      img: "https://www.shopfreshandgreen.com/cdn/shop/products/d_960x.png?v=1743776814",
      quantity: 7,
    },
    {
      id: 3, 
      title: "Mandarins",
      price: 0.99, 
      quantity: 34,
      img: "https://png.pngtree.com/png-clipart/20250128/original/pngtree-some-mandarins-with-leave-on-white-background-png-image_20164788.png",
  
    },
    {
      id: 4,
      title: "Apples", 
      img: "https://waapple.org/wp-content/uploads/2021/06/Variety_Cosmic-Crisp-transparent-300x300.png",
      price: 1.34,
      quantity: 78,
    },
    {
      id: 5, 
      title: "Dragonfruits", 
      price: 8.99, 
      img: "https://www.shopfreshandgreen.com/cdn/shop/products/d_960x.png?v=1743776814",
      quantity: 7,
    }
  ]
    )

  
  return (
    <>
      <h1>Products:</h1>
      <div className="container">
        {products.map(product=>(
          <Card style={{ width: '18rem' }} key={product.id}>
            <Card.Img variant="top" src={product.img} />
            <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
              {product.price} $
            </Card.Text>
            {/* <Button variant="primary" onClick={setProducts({...product, product[key]: product.id==key?product.quantity-1:product.quantity})}>Buy 1 {product.title}</Button> */}
            <Button onClick={() => {
              setProducts(prevState => prevState.map(item=>
                item.id == product.id?{...item, quantity: item.quantity>1?item.quantity-1:0}:item
              ))}}>Buy 1 smth

            </Button>
            </Card.Body>
      <Card.Text >
        quantity: <span className={product.quantity? "" : "text-danger" }>{product.quantity>0?product.quantity:"out of stock"}</span>
          
      </Card.Text>
    </Card>
        ))}
      </div>
      
       {/* <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={products.img} />
      <Card.Body>
        <Card.Title>{products.title}</Card.Title>
        <Card.Text>
          {products.price} $
        </Card.Text>
        <Button variant="primary" onClick={() => {setProducts(products => ({ ...products, quantity: products.quantity? products.quantity-1: 0})), console.log(products.quantity);
        }}>Buy 1 grape</Button>
      </Card.Body>
      <Card.Text >
        quantity: <span className={products.quantity?"":"text-danger"}>{products.quantity>0?products.quantity:"out of stock"}</span>
      </Card.Text>
    </Card> */}

    {/* <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={mandarin.img} />
      <Card.Body>
        <Card.Title>{mandarin.title}</Card.Title>
        <Card.Text>
          {mandarin.price} $
        </Card.Text>
        <Button variant="primary">Buy 1 {mandarin.title}</Button>
      </Card.Body>
      <Card.Text>
        quantity: {mandarin.quantity}
      </Card.Text>
    </Card> */}
    </>
  )
}

export default ProductsList
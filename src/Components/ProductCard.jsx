import React from 'react'
import { Button, Card } from 'react-bootstrap'

const ProductCard = ({krhba}) => {
    // console.log(krhba)
    const test=()=>alert(`the car ${krhba.name} cost ${krhba.price}$`)
  return (
    <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={krhba.pic} />
      <Card.Body>
        <Card.Title>{krhba.name}</Card.Title>
        <Card.Text>
          {krhba.price}
        </Card.Text>
        <Button variant="primary"  onClick={test}>info</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default ProductCard
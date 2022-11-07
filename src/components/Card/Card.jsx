import React from 'react'
import Style from "./Card.module.scss"
import Card from 'react-bootstrap/Card';


const CountryCard = (props) => {

let imgSource=`https://starwars-visualguide.com/assets/img/characters/${props.id}.jpg`
console.log(props)
console.log(imgSource)


    return (
        <Card className={Style.Container}>
      <Card.Img variant="top" src={imgSource} />
      <Card.Body>
        <Card.Title className={Style.Title}>{props.name}</Card.Title>
        <Card.Text>
         
        </Card.Text>
      </Card.Body>
    </Card>
    )
}

export default CountryCard
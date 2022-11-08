import React from 'react'
import Style from "./Card.module.scss"
import Card from 'react-bootstrap/Card';


const CountryCard = (props) => {

    let imgSource = `https://starwars-visualguide.com/assets/img/characters/${props.id}.jpg`

   if(props.id>=17){
    // This is a conditional to fixe a api error , the endpoint 17 doesnt exist 
     imgSource = `https://starwars-visualguide.com/assets/img/characters/${props.id+1}.jpg`
   }



    return (
        <Card className={Style.Container}>
            <Card.Img variant="top" src={imgSource} />
            <Card.Body>
                <Card.Title className={Style.Title}>{props.name}</Card.Title>
                <Card.Text>
                    {props.id}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default CountryCard
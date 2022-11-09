//Dependencies import
import React from 'react'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// Bootstrap Component
import Card from 'react-bootstrap/Card';
// Style in SCSS format
import Style from "./Card.module.scss"

//This is a component where the name and picture of one character will rendered
const CardD = (props) => {
    // A global state with the name and generated id for every character, the original api dont bring id
    const arrId = useSelector((state) => state.idArr)
    // Set an id by de arrID
    let key = arrId.filter((el) => el.name === props.name)[0].id
    // With the id we get an image from other api
    let imgSource = `https://starwars-visualguide.com/assets/img/characters/${key}.jpg`

    if (key >= 17) {
        // This is a conditional to fixe a api error , the endpoint 17 doesnt exist 
        imgSource = `https://starwars-visualguide.com/assets/img/characters/${key + 1}.jpg`
    }


    // The entire card is a link to the detail section of the character with React Router Dom
    return (
        <Link className={Style.link} to={`/character/${key}`}>
            <Card className={Style.Container}>
                <Card.Img variant="top" src={imgSource} />
                <Card.Body>
                    <Card.Title className={Style.Title}>{props.name}</Card.Title>

                </Card.Body>
            </Card>
        </Link>
    )
}

export default CardD
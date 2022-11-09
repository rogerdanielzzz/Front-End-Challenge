import React from 'react'
import Style from "./Card.module.scss"
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import {  useSelector } from "react-redux";



const CardD = (props) => {
    const arrId = useSelector((state) => state.idArr)
    let key= arrId.filter((el)=> el.name===props.name)[0].id

    let imgSource = `https://starwars-visualguide.com/assets/img/characters/${key}.jpg`

   if(key>=17){
    let fixed=props.id
    // This is a conditional to fixe a api error , the endpoint 17 doesnt exist 
     imgSource = `https://starwars-visualguide.com/assets/img/characters/${key+1}.jpg`
   }

  



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
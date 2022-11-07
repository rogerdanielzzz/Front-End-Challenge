import React ,{useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card.jsx";
import { getCharacter} from "../../redux/actions/index.js";
import Style from './CardContainer.module.scss'


const CardContainer = () => {
    
  const dispatch = useDispatch();
    const characters = useSelector((state) => state.charArr);
    console.log(characters)




  

  useEffect(() => {
    document.title = "Go Further | Countries";
    dispatch(getCharacter());
  }, [dispatch]);
    
    
    return (

        <Container className={Style.Container}>

            
              {characters.map((el) =>(
                
            <Card
              id= {(characters.indexOf(el)+1)}
              key= {(characters.indexOf(el)+1)}
              name={el.name}
              height={el.height}
              mass={el.mass}
            />
          ))}

        </Container>
    )
}

export default CardContainer
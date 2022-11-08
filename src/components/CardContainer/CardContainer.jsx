import React ,{useEffect,useState} from 'react'
import Container from 'react-bootstrap/Container';
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card.jsx";
import Loader from '../Loader/Loader.jsx';
import { getCharacter, pageSwitcher, loadingSwitcher} from "../../redux/actions/index.js";
import Style from './CardContainer.module.scss'
import PaginationBar from "../PaginationBar/PaginationBar.jsx";


const CardContainer = () => {
    
  const dispatch = useDispatch();

    const characters = useSelector((state) => state.charArr);
    const pageGlobal = useSelector((state) => state.currentPage);
    const isLoading = useSelector((state)=> state.isLoading)

    
    const paginate = (el) => dispatch(pageSwitcher(el));
  let  idMaker= (pageGlobal-1)*10;




  

  useEffect(() => {
    document.title = "Star Wars | Characters";
    dispatch(loadingSwitcher(true))

    dispatch(getCharacter(pageGlobal));
  }, [dispatch, pageGlobal]);
    
    
    return (


   

        <Container className={Style.Container}>

            {isLoading? <Loader/>
            :
            (characters.map((el) =>(
                
                <Card
                  id= {(characters.indexOf(el)+1)+idMaker}
                  key= {(characters.indexOf(el)+1)+idMaker}
                  name={el.name}
                  height={el.height}
                  mass={el.mass}
                />
              )))
            }
             {!isLoading&&<PaginationBar paginate={paginate}/>}
            


        </Container>
    )
}

export default CardContainer
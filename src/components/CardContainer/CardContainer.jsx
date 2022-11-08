import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card.jsx";
import Loader from '../Loader/Loader.jsx';
import { getCharacter, pageSwitcher, loadingSwitcher, searchCharacter, cleanerFinded } from "../../redux/actions/index.js";
import Style from './CardContainer.module.scss'
import PaginationBar from "../PaginationBar/PaginationBar.jsx";


const CardContainer = () => {

  const dispatch = useDispatch();

  const characters = useSelector((state) => state.charArr);
  const pageGlobal = useSelector((state) => state.currentPage);
  const isLoading = useSelector((state) => state.isLoading)
  const charFinded = useSelector((state) => state.charFinded)
  const totalCharacters = useSelector((state) => state.totalCharacters)
  const totalFinded = useSelector((state) => state.totalFinded)
  const lastSearch = useSelector((state) => state.lastSearch)



  let totalElements = totalCharacters
  if (totalFinded > 0) totalElements = totalFinded

  const paginate = (el) => dispatch(pageSwitcher(el));
  let idMaker = (pageGlobal - 1) * 10;

  useEffect(() => {
    document.title = "Star Wars | Characters";
    


    if (lastSearch) {
      dispatch(searchCharacter(lastSearch, pageGlobal))

    }  else{ 
      dispatch(getCharacter(pageGlobal));
    }

    dispatch(loadingSwitcher(true))

  }, [dispatch, pageGlobal, lastSearch]);


  return (

    <React.Fragment>
      <Container className={Style.ContainerPagination}>

        {!isLoading && !charFinded.error&& <PaginationBar paginate={paginate} totalElements={totalElements} elementsPerPage={10} />}
      </Container>
      <Container className={Style.Container}>

        {isLoading ? <Loader /> : charFinded.error? <h1 className={Style.mssg}>{charFinded.error}</h1>:charFinded.length > 0 ? (charFinded.map((el) => (

          <Card
            finded={true}
            id={(charFinded.indexOf(el) + 1) + idMaker}
            key={(charFinded.indexOf(el) + 1) + idMaker}
            name={el.name}
            height={el.height}
            mass={el.mass}
          />
        )))
          :
          (characters.map((el) => (
            <Card
              finded={false}
              id={(characters.indexOf(el) + 1) + idMaker}
              key={(characters.indexOf(el) + 1) + idMaker}
              name={el.name}
              height={el.height}
              mass={el.mass}
            />
          )))
        }



      </Container>


    </React.Fragment>
  )
}

export default CardContainer
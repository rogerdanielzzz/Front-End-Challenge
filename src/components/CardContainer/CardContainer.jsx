//Dependencies import
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getCharacter, pageSwitcher, loadingSwitcher, searchCharacter, cleanerFinded, cleanerCharacter ,cleanerShowAll} from "../../redux/actions/index.js";
// Bootstrap Component
import Container from 'react-bootstrap/Container';
// Components made with React
import Card from "../Card/Card.jsx";
import Loader from '../Loader/Loader.jsx';
import PaginationBar from "../PaginationBar/PaginationBar.jsx";
// Style in SCSS format
import Style from './CardContainer.module.scss'


//This is a component where all the characters Cards will rendered
const CardContainer = () => {


  const dispatch = useDispatch();
  // Global States called with Redux useDispatch Hook
  const characters = useSelector((state) => state.charArr);
  const charFinded = useSelector((state) => state.charFinded)
  const pageGlobal = useSelector((state) => state.currentPage);
  const isLoading = useSelector((state) => state.isLoading)
  const totalCharacters = useSelector((state) => state.totalCharacters)
  const totalFinded = useSelector((state) => state.totalFinded)
  const lastSearch = useSelector((state) => state.lastSearch)
  // A state cleaner function called by button onClick
  let cleaner = () => dispatch(cleanerShowAll())


  // An Auxiliar Variable for define the total element to render and paginate
  let totalElements = totalCharacters
  if (totalFinded > 0) totalElements = totalFinded

  //Pagination Bar is a reusable component, this is a function to provide by props
  const paginate = (el) => dispatch(pageSwitcher(el));


  useEffect(() => {
    document.title = "Star Wars | Characters";
    dispatch(loadingSwitcher(true))

    // In every mount of this component the app must be check that the last search is empty, if its true so we are in a search a we only mus paginate 
    if (lastSearch) {
      dispatch(searchCharacter(lastSearch, pageGlobal))
    } else {
      dispatch(getCharacter(pageGlobal));
    }

    //a cleaner state function when the component is unmount
    return () => {
      dispatch(cleanerFinded())
      dispatch(cleanerCharacter())



    }

  }, [dispatch, pageGlobal]);


  return (
    // Conditional render if the state with character finded is not empty so we render de result in other case we only render all cards
    <React.Fragment>
      <Container className={Style.Container}>

        {isLoading ? <Loader />
          : charFinded.error ?
            <div>
              <h1 className={Style.mssg}>{charFinded.error}</h1>
              <button className={Style.btn} onClick={cleaner}>Go Back</button>
            </div>
            : charFinded.length > 0 ? <React.Fragment>{(charFinded.map((el) => (

              <Card
                key={charFinded.indexOf(el)}
                name={el.name}
                height={el.height}
                mass={el.mass}
              />
            )))}
              <button className={Style.btn} onClick={cleaner}>Show All</button>

            </React.Fragment>
              :
              (characters.map((el) => (
                <Card

                  key={characters.indexOf(el)}
                  name={el.name}
                  height={el.height}
                  mass={el.mass}
                />
              )))
        }
      </Container>
      <Container className={Style.ContainerPagination}>

        {!isLoading && !charFinded.error && <PaginationBar paginate={paginate} totalElements={totalElements} elementsPerPage={10} />}
      </Container>


    </React.Fragment>
  )
}

export default CardContainer
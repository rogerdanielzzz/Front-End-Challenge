//Dependencies import
import React from 'react';
import { useSelector } from "react-redux";
// Style in SCSS format
import Style from "./PaginationBar.module.scss"

/* this is a reusable component that paginate the element need 3 argunmet by props, a
 callback function with the logic, and the total elements and how many element per page to rander*/
const PaginationBar = ({ paginate, totalElements, elementsPerPage }) => {
  // Global States called with Redux useDispatch Hook
  const page = useSelector((state) => state.currentPage)
  //For loop to define how many page we need
  const totalPages = [];
  for (let i = 1; i <= Math.ceil(totalElements / elementsPerPage); i++) {
    totalPages.push(i);
  }



  return (
    // Render a pagination tool bar that recive an oneClick Function by props
    <div className={Style.PaginationContainer}>
      <button className={page === 1 ? Style.Disabled : Style.First} onClick={() => paginate((page - 1))}>Prev</button>
      {totalPages &&
        totalPages.map((el) => (
          <button
            key={el}
            className={page !== el ? Style.buttonPagination : Style.currentPage}
            onClick={() => paginate(el)}

          >{el}</button>


        ))}
      <button className={page === totalPages.length ? Style.Disabled : Style.Last} onClick={() => paginate((page + 1))}>Next</button>

    </div>



  )
}

export default PaginationBar
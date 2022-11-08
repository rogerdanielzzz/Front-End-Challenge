import React from 'react';
import { useSelector } from "react-redux";
import Style from "./PaginationBar.module.scss"


const PaginationBar = ({paginate, totalElements, elementsPerPage}) => {
  const page = useSelector((state) => state.currentPage)
  const totalPages = [];
  for (let i = 1; i <= Math.ceil(totalElements / elementsPerPage); i++) {
    totalPages.push(i);
  }



  return (

    <div className={Style.PaginationContainer}>
      <button className={page == 1 ? Style.Disabled : Style.First}  onClick={() => paginate((page-1))}>Prev</button>
      {totalPages &&
        totalPages.map((el) => (
          <button
            key={el}
            className={page !== el ? Style.buttonPagination : Style.currentPage}
            onClick={() => paginate(el)}

          >{el}</button>


        ))}
      <button className={page == totalPages.length ? Style.Disabled : Style.Last} onClick={() => paginate((page+1))}>Next</button>

    </div>



  )
}

export default PaginationBar
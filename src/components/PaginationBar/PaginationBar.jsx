import React from 'react';
import { useSelector } from "react-redux";
import Style from "./PaginationBar.module.scss"


const PaginationBar = ({paginate}) => {

  const page = useSelector((state) => state.currentPage)
  const totalCharacters = useSelector((state) => state.totalCharacters)
console.log(page)
  //className={page !== el ? Style.buttonPagination : Style.currentPage}
  const totalPages = [];
  for (let i = 1; i <= Math.ceil(totalCharacters / 10); i++) {
    totalPages.push(i);
  }



  return (

    <div className={Style.PaginationContainer}>
      <button className={Style.First}  onClick={() => paginate((page-1))}>Prev</button>
      {totalPages &&
        totalPages.map((el) => (
          <button
            key={el}
            className={page !== el ? Style.buttonPagination : Style.currentPage}
            onClick={() => paginate(el)}

          >{el}</button>


        ))}
      <button className={Style.Last} onClick={() => paginate((page+1))}>Next</button>

    </div>



  )
}

export default PaginationBar
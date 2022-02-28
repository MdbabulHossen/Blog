import React from 'react'
import ReactPaginate from 'react-paginate'

export default function Pagination({pageCount,changeHan}) {
  return (
    <>
    
      {/* Reactpaginate for pagination and come in react-pagination third parti */}
      <ReactPaginate 
           previousLabel={"Prev"}
           nextLabel={"Next"}
           previousLinkClassName={"prev"}
           nextLinkClassName={"next"}
           pageCount={pageCount}
           onPageChange={changeHan}
           containerClassName={'paginationBtn'}
           disabledClassName={'paginatondisabled'}
           activeClassName={'activedclass'}/>

    
    
    
    </>
  )
}

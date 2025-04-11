import React from 'react'
import Pagination from "../Pagination";


function PaginationWrapper({top,bottom,children,...paginationProps}) {
  return (
    <>
        {top && <Pagination {...paginationProps}/>}
        {children}
        {bottom && <Pagination {...paginationProps}/>}
    </>
  )
}

export default PaginationWrapper
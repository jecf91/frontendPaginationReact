import React from 'react'

export default function Pagination({ itemsPerPage, totalItems, paginate }) {

  const pageNumbers = [];

  for(let i = 1; i <= Math.ceil(totalItems/itemsPerPage); i++){
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul>
        {pageNumbers.map(pnumber => ( 
          <li key={pnumber}>
            <a onClick={() => paginate(pnumber)} href="!#">{pnumber}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

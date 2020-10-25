import React, { useState } from 'react';

import Pagination from './Components/Pagination';

function App() {

  const carachters = [
    {
      "uid": "1",
      "name": "Luke Skywalker",
      "url": "https://www.swapi.tech/api/people/1"
    },
    {
      "uid": "2",
      "name": "C-3PO",
      "url": "https://www.swapi.tech/api/people/2"
    },
    {
      "uid": "3",
      "name": "R2-D2",
      "url": "https://www.swapi.tech/api/people/3"
    },
    {
      "uid": "4",
      "name": "Darth Vader",
      "url": "https://www.swapi.tech/api/people/4"
    },
    {
      "uid": "5",
      "name": "Leia Organa",
      "url": "https://www.swapi.tech/api/people/5"
    },
    {
      "uid": "6",
      "name": "Owen Lars",
      "url": "https://www.swapi.tech/api/people/6"
    },
    {
      "uid": "7",
      "name": "Beru Whitesun lars",
      "url": "https://www.swapi.tech/api/people/7"
    },
    {
      "uid": "8",
      "name": "R5-D4",
      "url": "https://www.swapi.tech/api/people/8"
    },
    {
      "uid": "9",
      "name": "Biggs Darklighter",
      "url": "https://www.swapi.tech/api/people/9"
    },
    {
      "uid": "10",
      "name": "Obi-Wan Kenobi",
      "url": "https://www.swapi.tech/api/people/10"
    }
  ]

  const [ currentPage, setCurrentPage ] = useState(1);
  const [ itemsPerPage, setItemsPerPage ] = useState(2);

  //index of the last item
  const indexLastItem = currentPage * itemsPerPage;
  //index of the first item
  const indexOfFirstItem = indexLastItem - itemsPerPage;
  //get the current items displayed
  const currentItems = carachters.slice(indexOfFirstItem,indexLastItem); 

  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((carachter) => (
            <tr key={carachter.uid}>
              <td>{carachter.uid}</td>
              <td>{carachter.name}</td>
            </tr>))}
        </tbody>
      </table>
      <Pagination 
        itemsPerPage={itemsPerPage} 
        totalItems={carachters.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;

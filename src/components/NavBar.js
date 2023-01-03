import React from 'react'
import Button from 'react-bootstrap/Button';

function NavBar() {
  return (
    <div>
        <ul className='NavBarStyle'>
            <li>
              <Button variant="primary"><a href="#">Opcion 1</a></Button>{' '}
              
              </li>
            <li>
            <Button variant="outline-danger">Opcion 2</Button>{' '}
              
              </li>
            <li><a href="#">Opcion 3</a></li>
            <li><a href="#">Opcion 4</a></li>
            <li><a href="#">Opcion 5</a></li>
        </ul>
      
    </div>
  )
}

export default NavBar

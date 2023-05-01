import { useState } from 'react'
import axios from 'axios'
import { Route } from 'wouter'

import ObjectList from './components/ObjectList'
import DropdownButton from './components/DropdownButton'
import NavigationBar from './components/NavigationBar'

const objetos = [
  'Botón 1',
  'Botón 2',
  'Botón 3',
  'Botón 4',
  'Botón 5',
  'Botón 6',
  'Botón 7',
  'Botón 8',
  'Botón 9',
  'Botón 10',
  'Botón 11',
  'Botón 12',
];

function ListRender() {
  const [count, setCount] = useState(0)


  

  return (
    <div className="container mt-3">
      <ObjectList objetos={objetos} />
      <DropdownButton></DropdownButton>
      <NavigationBar></NavigationBar>
    </div>
  )
}

export default ListRender
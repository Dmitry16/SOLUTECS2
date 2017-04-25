import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Button } from './styled/buttons'

const wrprBtn = styled.div`
  z-index: 9;
  &:hover { box-shadow: 5px 5px 10px black; }
`
export const VerTodoButton = (props) => {
  return (
    <wrprBtn id='wrprBtn'>
      <Link to="/fotos">
        <Button
          onClick={props.showAllPics}>
          Ver todos trabajos
        </Button>
      </Link>
    </wrprBtn>
  )
}

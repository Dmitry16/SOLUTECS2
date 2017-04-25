import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { media } from './styled/medias'

export default class Icon extends React.Component {
  constructor() {
    super();
  }

  render() {
    const Wrapper = styled.div`
      width: 23%;
      margin: 1%;
      border: 1px solid #aaa;
      background: rgba(255, 255, 255, 0.3);
      overflow: hidden;
      transition: all 0.5s;
      &:hover { background: lightblue;
                box-shadow: 5px 5px 10px #777;
                transform: scale(1.1);
                > a > p { color: darkviolet; }
              }
      > a { border: none; }
      ${ media.tablet`
        width: 31%;
        `}
      ${ media.handheld`
          width: 47%;
          > a > p { font-size: 2.5em }
          > a > p.icon_title  { font-size: 1em }
      `}
    `
    const { href, className, icon_title } = this.props
    return (
      <Wrapper>
        <Link to={href}>
              <p className={className}></p>
              <p className="icon_title">{icon_title}</p>
        </Link>
      </Wrapper>
    )
  }
}

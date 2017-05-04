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
      background: rgba(255, 255, 255, 0.2);
      overflow: hidden;
      transition: all 0.5s;
      > a > p { color: ${ props => props.theme.bodyBG }; }
      &:hover { background: ${ props => props.theme.hoverColor };
                box-shadow: 5px 5px 10px #777;
                transform: scale(1.1);
                > a > p { color:  ${ props => props.theme.primaryHoverTextColor }; }
              }
      > a { border: none; }
      ${ media.tablet`
        width: 45%;
        `}
      ${ media.handheld`
          width: 90%;
          > a > p { font-size: 2.5em }
          > a > p.icon_title  { font-size: 1em }
      `}
    `
    const Icon = styled.p`
      font-size: 4em;
    `
    const { href, className, icon_title } = this.props
    return (
      <Wrapper>
        <Link to={href}>
              <Icon className={className}></Icon>
              <p className="icon_title">{icon_title}</p>
        </Link>
      </Wrapper>
    )
  }
}

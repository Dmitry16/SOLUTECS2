import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { media } from './styled/medias'

export default class Icon extends React.Component {

  render() {
    const Wrapper = styled.div`
      width: 25%;
      margin: 1%;
      border: 1px solid #fff;
      background: rgba(255, 255, 255, 0.2);
      overflow: hidden;
      transition: all 0.5s;
      > a > p { color: ${ props => props.theme.iconColor }; }
      &:hover { background: ${ props => props.theme.iconBGHoverColor };
                box-shadow: 5px 5px 10px 0px #aaa;
                > a > p { color:  ${ props => props.theme.iconHoverColor }; }
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

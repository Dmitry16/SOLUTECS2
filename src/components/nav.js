//LIBS
import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
//STYLED COMPONENTS
import styled from 'styled-components'
import { media } from './styled/medias'
import { flex } from './styled/flexes'
//Actions
import { fetchAllPics } from '../actions/picsActions'

export default class MainNav extends React.Component {

  showPics() {
    this.props.dispatch(fetchAllPics())
  }

  render() {
    const Wrapper = styled.div`
      width: 100%;
      background: ${ props => props.theme.navBG };
      z-index: 3;
      margin: 0 !important;
      > ul {
        font-size: 0.9rem;
        font-weight: 100;
        text-align: center;
        list-style: none;
        margin: 0; padding: 0;
        > span { display: none }
        > div { ${ flex.row }
          > li { width: 12%; padding: 0.2em 0;
            > span { padding: 0.3em 0.5em;
              > a { color: #fff; }
              &:hover { border-bottom: 2px solid ${ props => props.theme.navHoverBG };
              > a { color: ${ props => props.theme.navHoverTextColor }; }
              }
            }
          }
        }
      }
      ${ media.tablet`
        > ul {
          font-size: 0.8rem;
        }`};
      ${ media.handheld`
        margin: 0;
        > ul { position: relative;
          > div { ${ flex.column }
              height: 0; opacity: 0;
              }
          > span { ${ flex.row }
              font-size: 1.3em;
              color: #fff;
              padding: 3px 0;
              cursor: pointer;
            }
          &:hover > div { position: absolute; width: 100%;
                      align-content: space-between;
                      top: 1.2em; left: 0; z-index: 3;
                      height: 11em; opacity: 0.9;
                      background: ${ props => props.theme.headerBG };
                      transition: all 0.5s;
                    > li { display: block; width: 100%;
                      &:hover > a { color: ${ props => props.theme.headerBG } }
                    }
                  }
          }
      `};
    `

    return (
      <Wrapper>
          <ul>
          <span className='icon-bars'></span>
          <div id='top' className='list'>
              <li>
                <span><a href='/#home'>Inicio</a></span>
              </li>
              <li>
                <span><a href='/#services'>Servicios</a></span>
              </li>
              <li>
                <span><a href='/#prices'>Tarifas</a></span>
              </li>
              <li>
                <span><a href='/#portfolio'>Portfolio</a></span>
              </li>
              <li>
                <span><a href='/#about'>Quien Somos</a></span>
              </li>
              <li>
                <span><Link to='/blog'>Blog</Link></span>
              </li>
              <li>
                <span><a href='/#contact'>Contacto</a></span>
              </li>
          </div>
        </ul>
      </Wrapper>
    )
  }
}

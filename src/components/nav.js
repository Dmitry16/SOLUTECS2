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
          > li { width: 13%; padding: 0.2em 0;
              > a { color: #fff; }
            &:hover { background: ${ props => props.theme.navHoverBG };
              > a { color: ${ props => props.theme.navHoverTextColor }; }
            }
          }
        }
      }
      ${ media.tablet`
        > ul {
          font-size: 0.8rem;
          > div > li { width: 15%; }
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
                <a href='/#home'>Inicio</a>
              </li>
              <li>
                <a href='/#productos'>Productos</a>
              </li>
              <li>
                <a href='/#services'>Servicios</a>
              </li>
              <li>
                <a href='/#about'>Quien Somos</a>
              </li>
              <li>
                <Link to='/blog'>Blog</Link>
              </li>
              <li>
                <a href='/#contact'>Contacto</a>
              </li>
          </div>
        </ul>
      </Wrapper>
    )
  }
}

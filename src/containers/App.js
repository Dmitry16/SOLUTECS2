// Libs
import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link, Match, Miss, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
//Actions
import * as piezaActionCreators from '../actions/piezaActions'
// Components
import { HeaderTop, HeaderScrolled } from '../components/header'
import Manifesto from '../components/manifesto'
import Footer from '../components/footer'
// import Slider from '../components/slider_component'
import CTA from '../components/cta'
import CtaInit from '../components/ctaInit'
import Modal from '../components/modal'
// import MainNav from '../components/nav'
import AllPics from '../components/allpics'
import Blog from '../components/blog'
import { PostPage } from '../components/postPage'
import Article from '../components/article'
import ContactPage from '../components/contactPage'
import Icons from '../components/services'
import PiezaPage from '../components/piezaPage'
import { Terms, Privacy } from '../components/terms'
import { Prices } from '../components/prices'
import { WebNormal } from '../components/webNormal'
import { WebCompleta } from '../components/webCompleta'
import { WebEcommerce } from '../components/webEcommerce'
import Testimonios from '../components/testimonios'
import Portfolio from '../components/portfolio'
import TecnologiasWeb from '../components/tecnologiasWeb'

// css
import style from '../css/newstyle.css'
//Styled components
import { Container_main, WrapperMax1100 } from '../components/styled/wrappers'
import { ThemeProvider } from 'styled-components'
import { greenTheme } from '../components/styled/themes'

// @connect((store) => {
//   return {
//     initialPics: store.pics.initialPics,
//     pics: store.pics.pics,
//     modalVisibility: store.modal.modalVisibility,
//     modalPic: store.modal.modalPic,
//     nextImg: store.modal.nextImg,
//     prevImg: store.modal.prevImg,
//   }
// })

class App extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }

  showAllPics = () => {
    if (this.props.pics)
    renderAllPics(this.props.pics)
  }

  // renderMainNav = () => {
  //   return (
  //     <MainNav dispatch={ this.props.dispatch } />
  //   )
  // }
  renderCTA = () => {
    return (
      <CTA dispatch={ this.props.dispatch } />
    )
  }
  renderCtaInit = () => {
    return (
      <CtaInit dispatch={ this.props.dispatch } />
    )
  }

  render() {

    const { pics, dispatch, posts } = this.props

    const showPiezaPage = bindActionCreators(piezaActionCreators.showPiezaPage, dispatch)

    const props = { pics, showPiezaPage, dispatch, posts }

    const renderSlider = () => {
      return (
        <Slider
          dispatch={ dispatch }
          pics= { pics }
          showPiezaPage= { showPiezaPage }
        />
      )
    }
    const renderAllPics = () => {
      return (
        <AllPics { ...props } />
      )
    }
    const renderFrontPosts = () => {
      return (
        <Blog
          dispatch={ dispatch }
          posts={ posts }
          frontPage={ true }
        />
      )
    }
    const renderBlog = () => {
      return (
        <Blog
          dispatch={ dispatch }
          posts={ posts }
          frontPage={ false }
        />
      )
    }
    const renderPiezaPage = () => {
      return (
        <PiezaPage
         piezaTitle= { this.props.piezaTitle }
         piezaDescription= { this.props.piezaDescription }
         piezaImg= { this.props.piezaImg }
        />
      )
    }
    const renderPostPage = () => {
      return (
        <PostPage
          postTitle={ this.props.postTitle }
          postContent={ this.props.postContent }
          frontPage={ false }
        />
      )
    }
    const renderWebNormal = () => {
      return (
        <WebNormal
          dispatch={ dispatch }
          frontPage={ this.props.frontPage }
        />
      )
    }
    const renderWebCompleta = () => {
      return (
        <WebCompleta
          dispatch={ dispatch }
          frontPage={ this.props.frontPage }
        />
      )
    }
    const renderWebEcommerce = () => {
      return (
        <WebEcommerce
          dispatch={ dispatch }
          frontPage={ this.props.frontPage }
        />
      )
    }
    const renderHeader = () => {
      if(!this.props.headerScrolled) {
        return (
            <HeaderTop
              dispatch={ dispatch }
              frontPage={ this.props.frontPage }
            />
        )
      } else {
        return (
          <HeaderScrolled
            dispatch={ dispatch }
            frontPage={ this.props.frontPage }
          />
        )
      }
    }

  // <Route path='/' render={this.renderMainNav.bind(this)}/>
  // <Route exact={true} path='/' render={renderSlider}/>
  // <Route exact={true} path='/' render={renderFrontPosts}/>
  // <Route exact={true} path='/' component={Testimonios}/>

    return (
      <Router>
        <ThemeProvider theme={ greenTheme }>
          <Container_main>
            <Route path='/' render={renderHeader}/>

              <Route exact={true} path='/' render={this.renderCtaInit.bind(this)}/>
              <Route exact={true} path='/' component={Icons}/>
              <Route exact={true} path='/' render={this.renderCTA.bind(this)}/>
              <Route exact={true} path='/' component={Prices}/>
              <Route exact={true} path='/' component={Manifesto}/>
              <Route exact={true} path='/' component={Portfolio}/>
              <Route exact={true} path='/' component={ContactPage}/>
              <Route path='/piezaPage' render={renderPiezaPage}/>
              <Route path='/webNormal' render={renderWebNormal}/>
              <Route path='/webCompleta' render={renderWebCompleta}/>
              <Route path='/webEcommerce' render={renderWebEcommerce}/>
              <Route path='/about' component={Manifesto}/>
              <Route path='/blog' render={renderBlog}/>
              <Route path='/post' render={renderPostPage}/>
              <Route path='/trabajos' render={renderAllPics}/>
              <Route path='/tecnologiasWeb' component={TecnologiasWeb}/>
              <Route path='/terms' component={Terms}/>
              <Route path='/privacy' component={Privacy}/>

            <Route path='/' component={Footer}/>
          </Container_main>
        </ThemeProvider>
      </Router>
    )
  }
}

const mapStateToProps = store => (
  {
    initialPics: store.pics.initialPics,
    pics: store.pics.pics,
    piezaTitle: store.pieza.piezaTitle,
    piezaDescription: store.pieza.piezaDescription,
    piezaImg: store.pieza.piezaImg,
    posts: store.blog.posts,
    postTitle: store.post.postTitle,
    postContent: store.post.postContent,
    headerScrolled: store.header.headerScrolled,
    frontPage: store.frontPage.frontPage
  }
)

export default connect(mapStateToProps)(App)

// Libs
import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link, Match, Miss, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
//Actions
import * as modalActionCreators from '../actions/modalActions'
// Components
import HeaderLarge from '../components/header'
import Manifesto from '../components/manifesto'
import Footer from '../components/footer'
import Slider from '../components/slider_component'
import CTA from '../components/cta'
import Modal from '../components/modal'
import MainNav from '../components/nav'
import AllPics from '../components/allpics'
import Blog from '../components/blog'
import Article from '../components/article'
import ContactPage from '../components/contactPage'
import Icons from '../components/icons'
//Actions
// import { fetchPics } from '../actions/picsActions'
// css
// import style1 from '../css/main.min.css'
import style2 from '../css/newstyle.css'
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

  // componentWillMount() {
  //   this.props.dispatch(fetchPics())
  // }

  showAllPics = () => {
    if (this.props.pics)
    renderAllPics(this.props.pics)
  }

  renderMainNav = () => {
    return (
      <MainNav dispatch={ this.props.dispatch } />
    )
  }
  renderCTA = () => {
    return (
      <CTA dispatch={ this.props.dispatch } />
    )
  }

  render() {

    const { pics, initialPics, dispatch, nextImg, prevImg, modalPic,
            modalVisibility, posts } = this.props

    const closeModal = bindActionCreators(modalActionCreators.closeModal, dispatch)
    const showModal = bindActionCreators(modalActionCreators.showModal, dispatch)
    const showNextImg = bindActionCreators(modalActionCreators.showNextImg, dispatch)
    const showPrevImg = bindActionCreators(modalActionCreators.showPrevImg, dispatch)
    const showPics = this.showAllPics.bind(this)

    const props = { showPics, showModal, closeModal, showNextImg, showPrevImg, pics,
                    initialPics, dispatch, nextImg, prevImg, modalPic, modalVisibility }

    const renderSlider = () => {
      return (
        <Slider dispatch={ dispatch } pics= { pics } />
      )
    }

    const renderAllPics = () => {
      return (
        <AllPics { ...props } />
      )
    }

    const renderBlog = () => {
      return (
        <Blog dispatch={ dispatch } posts= { posts }/>
      )
    }

    return (
      <Router>
        <ThemeProvider theme={ greenTheme }>
          <Container_main>
            <Route path='/' component={HeaderLarge}/>
            <WrapperMax1100>
              <Route path='/' render={this.renderMainNav.bind(this)}/>
              <Route exact={true} path='/' component={Manifesto}/>
              <Route exact={true} path='/' render={this.renderCTA.bind(this)}/>
              <Route exact={true} path='/' component={Icons}/>
              <Route exact={true} path='/' render={renderSlider}/>
              <Route exact={true} path='/' render={renderBlog}/>
              <Route path='/about' component={Manifesto}/>
              <Route path='/blog' component={Blog}/>
              <Route path='/contact' component={ContactPage}/>
              <Route path='/fotos' render={renderAllPics}/>
            </WrapperMax1100>
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
    modalVisibility: store.modal.modalVisibility,
    modalPic: store.modal.modalPic,
    nextImg: store.modal.nextImg,
    prevImg: store.modal.prevImg,
    posts: store.blog.posts
  }
)

export default connect(mapStateToProps)(App)

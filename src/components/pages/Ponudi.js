import React, { Component } from 'react';
import '../../App.css';
import PonudiMain from '../PonudiMain';
import Footer from '../Footer';

export default class Ponudi extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  };
  render() {
    return (
      <>
        < PonudiMain />
        < Footer />
      </>
    )
  }
}


import React from 'react';
import '../../App.css';
import Info from '../Info';
import Footer from '../Footer';
import { Component } from 'react';

export default class AboutUs extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  };
  render() {
    return (
      <>
        < Info />
        < Footer />
      </>
    )
  }
}

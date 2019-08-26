import React, { Component } from 'react';
import TopicBrowser from './components/TopicBrowser/TopicBrowser';
import EvenAndOdd from '../Topics/EvenAndOdd';
import FilterObject from '../Topics/FilterObject';
import FilterString from '../Topics/FilterString';
import Palindrome from '../Topic/Palindrome';
import Sum from '../Topics/Sum';

class App extends Component {
  render() {
    return (
      <TopicBrowser />
      <EvenAndOdd />
      <FilterObject />
      <FilterString />
      <Palindrome />
      <Sum />
    )
  }
}

export default App;

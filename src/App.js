import React, { Component } from 'react';
import TopicBrowser from '../src/components/TopicBrowser/TopicBrowser';
import EvenAndOdd from '../src/components/Topics/EvenAndOdd'
import FilterObject from '../src/components/Topics/FilterObject';
import FilterString from '../src/components/Topics/FilterString';
import Palindrome from '/Users/ben_eccles/devmtn/week3/react-1-afternoon/src/components/Topics/Palindrome.js';
import Sum from '../src/components/Topics/Sum';

class App extends Component {
  render() {
    return (
      <div>
      <TopicBrowser />
      <EvenAndOdd />
      <FilterObject />
      <FilterString />
      <Palindrome />
      <Sum />
      </div>
    )
  }
}

export default App;

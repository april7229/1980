import React, { Component } from 'react'


import './NavBar.css';
import './navbar-top.css';

class NavBar extends Component {
  render () {
    return (
      <div>
        <div class='container'>
          <nav class='navbar'>
            <ul class=' clearfix'>
              <li>
                <a href='/'>Total 80's</a>
                <div class='tab'>
                  <h4 class='title'>This is a title of the second tab</h4>
                </div>
              </li>
              <li>
                <a href='/toys'>80's Fad's</a>
                <ul class='tab'>
                  <li>
                    <a href='/fadcards'>Toys </a>
                  </li>
                  <li>
                    <a href='#'>page1</a>
                  </li>
                  <li>
                    <a href='#'>Third Client</a>
                  </li>
                  <li>
                    <a href='#'>Client 4</a>
                  </li>
                  <li>
                    <a href='#'>This is the fifth client</a>
                  </li>
                  <li>
                    <a href='#'>Sixth Client</a>
                  </li>
                  <li>
                    <a href='#'>Client Number 7</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href='/first'>80's Music</a>
                <ul class='tab'>
                  <li>
                    <a href='#'>Clients and other associates</a>
                  </li>
                  <li>
                    <a href='#'>Crew, Employees, Founders, Developers</a>
                  </li>
                  <li>
                    <a href='#'>Information</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href='#'>80'sHistory</a>
                <ul class='tab'>
                  <li>
                    <a href='#'>President's</a>
                  </li>
                  <li>
                    <a href='#'>Scandal's</a>
                  </li>
                  <li>
                    <a href='#'>MileStone</a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}
export default NavBar

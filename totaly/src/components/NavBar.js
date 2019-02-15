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
                  <h4 class='SignIn'>Sign In</h4>
                  <h4 class='SignIn'>Sign Out</h4>

                </div>
              </li>
              <li>
                <a href='/toys'>80's Fad's</a>
                <ul class='tab'>
                  <li>
                    <a href='/fadcards'>Toys </a>
                  </li>
                  <li>
                    <a href='#'>Games</a>
                  </li>
                  <li>
                    <a href='#'>Third Client</a>
                  </li>            
                </ul>
              </li>

              <li>
                <a href='/first'>80's Music</a>
                <ul class='tab'>
                  <li>
                    <a href='#'>BillBoard TopHits</a>
                  </li>
                  <li>
                    <a href='#'>One Hit Wonders </a>
                  </li>
                  <li>
                    <a href='#'>80 Music History</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href='/first'>80's Movies</a>
                <ul class='tab'>
                  <li>
                    <a href='#'>BlockBuster</a>
                  </li>
                  <li>
                    <a href='#'>Love Stories </a>
                  </li>
                  <li>
                    <a href='#'>80 clasic's</a>
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

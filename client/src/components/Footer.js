/** @format */

import React from 'react';
// import styled from 'styled-components';
import { FiFacebook, FiGithub } from 'react-icons/fi';
import { SiLetterboxd } from 'react-icons/si';

function Footer() {
  return (
    <footer className='main-footer'>
      <div
        className='footer-middle'
        style={{ height: '50px', paddingBottom: '3rem' }}
      >
        <div className='container' style={{ paddingTop: '4.4875px' }}>
          <div className='row align-items-center'>
            <div className='col-md-4'>
              <span className='copyright'>
                Copyright &copy; LOLM Game Strategy 2021
              </span>
            </div>
            <div className='col-md-4'>
              <ul className='list-inline social-buttons'>
                <li className='list-inline-item'>
                  <a href='https://github.com/'>
                    <FiGithub />
                  </a>
                </li>
                <li className='list-inline-item'>
                  <a href='https://www.facebook.com/'>
                    <FiFacebook />
                  </a>
                </li>
                <li className='list-inline-item'>
                  <a href='https://wildrift.leagueoflegends.com/zh-tw/'>
                    <SiLetterboxd />
                  </a>
                </li>
              </ul>
            </div>
            <div className='col-md-4'>
              <ul className='list-inline quicklinks'>
                <li className='list-inline-item'>
                  <a href='#something'>Privacy Policy</a>
                </li>
                <li className='list-inline-item'>
                  <a href='#something'>Terms of Use</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

// const FooterContainer = styled.footer`
//   .footer-middle {
//     height: 50px;
//     padding-bottom: 3rem;
//   }
//   .container {
//     padding-top: 4.4875px;
//   }
// `;

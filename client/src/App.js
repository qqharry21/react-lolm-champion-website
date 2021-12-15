/** @format */

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MainContent from './components/MainContent';
import NavBar from './components/NavBar';
import {TinyButton as ScrollUpButton} from "react-scroll-up-button";
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';

import routes from './route/routes';

import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <MainContent>
        <ScrollToTop>
          <ScrollUpButton
            ShowAtPosition={200} //頁面到該位置時顯示
            EasingType='easeOutCirc'
            AnimationDuration={1000}
            style={{backgroundColor: "none", borderColor: "none"}}
          />
          <Switch>
            {routes.map((route, i) => {
              return (
                <Route
                  key={i}
                  path={route.path}
                  exact={route.exact}
                  render={(routeProps) => (
                    <route.component routes={route.routes} {...routeProps} />
                  )}
                />
              );
            })}
          </Switch>
        </ScrollToTop>
      </MainContent>
      <Footer />
    </Router>
  );
}

export default App;

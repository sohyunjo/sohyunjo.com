import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './About';
import Gallery from './Gallery';
import Works from './Works';
import Contact from './Contact';
import Home from './Home';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"

const Page404 = ({ location }) => (
  <div>
    <h2>
      No match found for <code>{location.pathname}</code>
    </h2>
  </div>
);

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/#about' component={About} />
      <Route path='/#work' component={Works} />
      <Route path='/gallery' component={Gallery} />
      <Route path='/contact' component={Contact} />
      <Route component={Page404} />
    </Switch>
  </main>
);

export default Main;

import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import NavBar from "./components/navbar";
import Footer from "./components/footer";
// import { IntlProvider, addLocaleData } from "react-intl";
import HomePage from "./pages/HomePage.js";
import Hero from "./components/hero.js";
import Mission from "./components/mission.js";
import CallToAction from './components/cta.js';
import OfficersPage from "./pages/OfficersPage.js";
import OfficerPage from "./pages/OfficerPage.js";
import Scholars from "./pages/Scholars.js";
import Articles from "./pages/ArticlesPage";
import Article from "./pages/ArticlePage";
import Cancel from "./pages/Cancel";
import Completed from "./pages/Completed";
// import Donate from "./pages/Donate";

function App() {
  return (
    <Router basename="/index.html">
      <div>
        <NavBar />

        {/* <Hero />
        <Mission />
        <CallToAction /> */}

        <Switch>
          {/* <Route exact path="/" /> */}
          <Route exact path="/" component={HomePage} />
          {/* <Route exact path="/Home" component={Home} /> */}
          <Container>
            {/* <Route exact path="/Mission" component={Mission} /> */}
            {/* <Route exact path="/Donate" component={Donate} /> */}
            <Route exact path="/Officers" component={OfficersPage} />
            <Route exact path="/Officer/:id?" component={OfficerPage} />
            <Route exact path="/Scholars" component={Scholars} />
            <Route exact path="/Articles" component={Articles} />
            <Route exact path="/Article/:slug?" component={Article} />
            <Route exact path="/cancel" component={Cancel} />
            <Route exact path="/completed" component={Completed} />
          </Container>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

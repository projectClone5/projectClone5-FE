import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Main from "./pages/Main";
import Write from "./pages/Write";
import Detail from "./pages/Detail";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
       <Route exact path="/Detail/:index/:articleId" component={Detail} />
        <Route exact path="/Write" component={Write} />
        <Route exact path="/Signup" component={Signup} />
        <Route exact path="/Login" component={Login} /> 
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

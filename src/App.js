import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Main from "./pages/Main";
import Write from "./pages/Write";
import Detail from "./pages/Detail";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import Mypage from "./pages/Mypage";
import CategoryDetail from "./pages/CategoryDetail";
import All from "./pages/All";
import CommentWrite from "./components/CommentWrite";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/Detail/:index/:postId" component={Detail} />
        {/* 카테고리 필터값 받아서 이동 */}
        <Route exact path="/Write" component={Write} />
        <Route exact path="/Signup" component={Signup} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Mypage" component={Mypage} />
        <Route exact path="/CategoryDetail" component={CategoryDetail} />
        <Route exact path="/All" component={All} />
        <Route exact path="/CommentWrite" component={CommentWrite} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

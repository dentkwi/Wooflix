import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from "../Routes/Home"
import Search from "../Routes/Search"
import TV from "../Routes/TV"
import Header from "./Header"
import Detail from "../Routes/Detail"

function RenderRouter() {
    return <Router>
        <Header /> {/**Link는 Router안에서만 동작한다. */}
        <Switch>
        <Route path="/wooflix" exact component ={Home} />
        <Route path="/wooflix/TV" component ={TV} />
        {/* <Route path="TV/Popular" component = {()=> <h1>Popular</h1>} /> */}
        <Route path="/wooflix/Search" component ={Search} />
        <Route path="/wooflix/movie/:id" component = {Detail} />  {/*:id에 주의하자. */ }
        <Route path="/wooflix/show/:id" component = {Detail} />  {/*:id에 주의하자. console.log를 찍어보면 route가 :id를 props의 match :{params}에 넣어 전달함을 알수 있다.*/ }
        <Redirect from="*" to="/wooflix" />   {/* 일치하는 route가 없다면 /로 보내라(redirect) 라는 뜻 */}
        </Switch>
    </Router>
} 

export default RenderRouter;
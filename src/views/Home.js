import React from "react";

import Head from "./Head";
import Type from "./Type";
import My from "./My";
import Search from "./Search";
import {
    Route,
    NavLink
} from "react-router-dom";

class Home extends React.Component{
    render(){
        return(
            <div>
               
                <nav>
                <NavLink to={"/"} exact className={"App-link"} activeClassName={"App-active"}>首页</NavLink>
                <NavLink to={"/type"} className={"App-link"} activeClassName={"App-active"}>分类</NavLink>
                <NavLink to={"/search"} className={"App-link"} activeClassName={"App-active"}>搜索</NavLink>
                <NavLink to={"/my"} className={"App-link"} activeClassName={"App-active"}>我的</NavLink>
                </nav>
                <Route path={"/"} exact  render = {()=><Head></Head>}></Route>
                <Route path={"/type"} render = {()=><Type></Type>}></Route>
                <Route path={"/search"} render = {()=><Search></Search>}></Route>
                <Route path={"/my"} render = {()=><My></My>}></Route>
               
            </div>
        )
    }
}
export default Home
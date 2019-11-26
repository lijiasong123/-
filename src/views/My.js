import React from "react";
import {
    withRouter
} from "react-router-dom"
class My extends React.Component{
    render(){
        return(
            <div>
            My页面
            </div>
        )
    }
    componentDidMount(){
        if(true){
            this.props.history.push("/Login")
        }
       
    }
    
}
export default  withRouter(My)
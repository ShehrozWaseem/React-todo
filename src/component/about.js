import React from 'react';
import { Link } from "react-router-dom";

export default class About extends React.Component{
    render(){
        return(
            <div>
                <h2>This is About</h2>
                <Link to="/">Go to redux</Link>
            </div>
        )
    }
}
import React from "react"
import { Outlet, Link } from "react-router-dom";

export default function Landing_Page(){

    return <div >
        <div className="landing-img">
            <img src="images/lens-1418954.png"/>
        </div>
        <div id="text">
            10x Team 04
        </div>
        <div>
       <Link to="/posts" > <button id="button">Enter</button></Link>
        </div>
        

    </div>
}
import React from "react";
import Logo from "../assets/profile1.png"
import "../App.css";

export default function Header() {
    return (
			<div className="header">
				<img src={Logo} alt="ProfileLogo" />
				<h3>Herbert Cuyugan</h3>
				<h4>Frontend Developer</h4>
				<p>herbertcuyugan.website</p>
				<button>Email</button>
				<button>LinkedIn</button>
			</div>
    )   
}
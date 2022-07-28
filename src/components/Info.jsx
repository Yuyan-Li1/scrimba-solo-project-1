import React from "react";
import profile_pic from "/assets/profile_pic.png";

export default function Info() {
    return (
        <div className="info">
            <img src={profile_pic} alt="profile picture" />
            <h1 className="name">Yuyan Li</h1>
            <h2 className="info_title">Software Developer</h2>
            <a className="portfolio" href="https://yuyanli.dev">https://yuyanli.dev</a>
            <a className="button" href="mailto:hi@yuyanli.dev">
                <img src="assets/mail_icon.png" alt="email" />
                <p className="email_text">Email</p>
            </a>
        </div >
    )
}

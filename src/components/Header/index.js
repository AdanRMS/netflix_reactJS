import React from 'react';
import './Header.css';

export default ({black}) => {
    return (
        <header className={black  ? 'black' : ''}>
            <div className="header--logo">
                <a href="https://netflix.com">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png" />
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/64623a33850498.56ba69ac2a6f7.png"></img>
                </a>
            </div>
        </header>
    )
}
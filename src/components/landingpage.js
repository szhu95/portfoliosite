import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';

class Landing extends Component {
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src="https://i.imgur.com/5sRVur6.jpg"
                            alt="avatar"
                            className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1>Stephen Z. Hu</h1>
                            <hr/>
                            <p>Java | Python | C++ | HTML/CSS | JavaScript | React | NodeJS</p>

                            <div className = "social-links">
                                <a href="https://www.linkedin.com/in/stephen-z-hu/" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-linkedin" aria-hidden="true"/>
                                </a>

                                <a href="https://github.com/szhu95" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-github-square" aria-hidden="true"/>
                                </a>

                                <a href="https://www.instagram.com/stevie.hu/" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-instagram" aria-hidden="true"/>
                                </a>
                            </div>

                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;
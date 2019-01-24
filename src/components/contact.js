import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render(){
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Stephen Hu</h2>
                        <img
                        src="https://i.imgur.com/F0rM0JB.jpg"
                        alt="avatar"
                        style={{height: '250px'}}
                        />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Need to get in touch?
                            Feel free to call or e-mail me! You can also contact me through Facebook Messenger, and make
                        sure to follow me on Instagram.</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>

                        <div className='contact-list'>
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Fjalla One'}}>
                                        <i className='fa fa-phone-square' aria-hidden='true'/>

                                        (571) 296-3060</ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Fjalla One'}}>
                                        <i className='fab fa-facebook-messenger' aria-hidden='true'/>

                                        (571) 296-3060</ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Fjalla One'}}>
                                        <i className='fa fa-envelope' aria-hidden='true'/>

                                        szhu02@email.wm.edu</ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Fjalla One'}}>
                                        <i className='fab fa-instagram' aria-hidden='true'/>

                                        @stevie.hu</ListItemContent>
                                </ListItem>





                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;
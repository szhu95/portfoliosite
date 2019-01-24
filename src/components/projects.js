import React, { Component } from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {

        if (this.state.activeTab === 0) {
            return (
                <div className='projects-grid'>
                    {/* React Project 1 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'black', height: '176px', background:
                                'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2000px-React-icon.svg.png) center /cover'}}> Portfolio Website</CardTitle>
                        <CardText>
                            This webpage was designed using React, HTML/CSS, and Javascript, incorporating the Components class from React.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: 'black'}}>
                            <IconButton name='share'/>
                        </CardMenu>
                    </Card>
                </div>



            )
        }
        else if (this.state.activeTab === 1) {
            return (
                <div className='projects-grid'>
                    {/* C++ Project 1 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'black', height: '176px', background:
                                'url(https://img.icons8.com/color/1600/c-plus-plus-logo.png) center /cover'}}> Collision</CardTitle>
                        <CardText>
                            Collision is a top-down wave-based shooter game created as a project for my 'CSCI 437 - Intro to Game Design and Game Development' Course.
                        </CardText>
                        <CardActions border>
                            <Button href='https://github.com/eyosyaswd/collision' rel="noopener noreferrer" target="_blank" colored>GitHub</Button>
                            <Button href='https://www.youtube.com/watch?v=Kl5tTW7GwUg' rel="noopener noreferrer" target="_blank" colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: 'black'}}>
                            <IconButton name='share'/>
                        </CardMenu>
                    </Card>
                </div>
            )
        }

        else if (this.state.activeTab === 2) {
            return (
                <div className='projects-grid'>
                    {/* Java Project 1 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'black', height: '176px', background:
                                'url(https://image.flaticon.com/icons/png/512/226/226777.png) center /cover'}}> Java Project #1</CardTitle>
                        <CardText>
                            This is the first of many Java projects
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: 'black'}}>
                            <IconButton name='share'/>
                        </CardMenu>
                    </Card>

                    {/* Java Project 2 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'black', height: '176px', background:
                                'url(https://image.flaticon.com/icons/png/512/226/226777.png) center /cover'}}> Java Project #2</CardTitle>
                        <CardText>
                            This is the second of many Java projects
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: 'black'}}>
                            <IconButton name='share'/>
                        </CardMenu>
                    </Card>

                    {/* Java Project 3 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'black', height: '176px', background:
                                'url(https://image.flaticon.com/icons/png/512/226/226777.png) center /cover'}}> Java Project #3</CardTitle>
                        <CardText>
                            This is the third of many Java projects
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: 'black'}}>
                            <IconButton name='share'/>
                        </CardMenu>
                    </Card>
                </div>
            )
        }
        else if (this.state.activeTab === 3) {
            return (
                <div className='projects-grid'>
                    {/* Python Project 1 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'black', height: '176px', background:
                                'url(https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2000px-Python-logo-notext.svg.png) center /cover'}}> Python Project #1</CardTitle>
                        <CardText>
                            This is the first of many Python projects
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: 'black'}}>
                            <IconButton name='share'/>
                        </CardMenu>
                    </Card>

                    {/* Java Project 2 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'black', height: '176px', background:
                                'url(https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2000px-Python-logo-notext.svg.png) center /cover'}}> Python Project #2</CardTitle>
                        <CardText>
                            This is the second of many Python projects
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: 'black'}}>
                            <IconButton name='share'/>
                        </CardMenu>
                    </Card>

                    {/* Java Project 3 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'black', height: '176px', background:
                                'url(https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2000px-Python-logo-notext.svg.png) center /cover'}}> Python Project #3</CardTitle>
                        <CardText>
                            This is the third of many Python projects
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: 'black'}}>
                            <IconButton name='share'/>
                        </CardMenu>
                    </Card>
                </div>
            )
        }
    }

    render(){
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabID) => this.setState({ activeTab: tabID})} ripple>
                    <Tab>React</Tab>
                    <Tab>C++</Tab>
                    <Tab>Java</Tab>
                    <Tab>Python</Tab>
                </Tabs>

                <Grid>
                    <Cell col={12}>
                        <div className={"content"}> {this.toggleCategories()}</div>
                    </Cell>
                </Grid>

            </div>
        )
    }
}

export default Projects;
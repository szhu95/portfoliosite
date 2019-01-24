import React, { Component } from 'react'
import { Grid, Cell} from 'react-mdl'
import Education from './education'
import Experience from './experience'
import Skills from './skills'

class Resume extends Component {
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                        <img
                            src={'https://i.imgur.com/5sRVur6.jpg'}
                            alt={'avatar'}
                            style={{height: '200px'}}
                            />
                        </div>

                        <h2 style={{paddingTop: '2em'}}>Stephen Hu</h2>
                        <h4 style={{color: 'grey'}}>Programmer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h5>Address</h5>
                        <p>12942 Cedar Glen Ln, Herndon VA, 20171</p>
                        <h5>Phone</h5>
                        <p>(571) 296-3060</p>
                        <h5>Email</h5>
                        <p>szhu02@email.wm.edu</p>
                        <h5>Web</h5>
                        <p>mySite.com</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    </Cell>
                    <Cell className={'resume-right-col'} col={8}>
                        <h2>Education</h2>
                        <Education
                            startYear={'August 2014'}
                            endYear={'January 2019'}
                            schoolName={'The College of William and Mary'}
                            schoolDescription={'B.S. in Computer Science and Minor in Finance'}/>


                        <Education
                            startYear={'September 2012'}
                            endYear={'May 2014'}
                            schoolName={'The Potomac School'}
                            schoolDescription={'Class of 2014'}/>

                        <Education
                            startYear={'September 2010'}
                            endYear={'May 2012'}
                            schoolName={'Thomas Jefferson High School for Science and Technology'} />
                        <hr style={{borderTop: '3px solid #e22947'}}/>

                        <h2>Experience</h2>
                        <Experience
                            startYear={'June 2018'}
                            endYear={' August 2018'}
                            companyName={'CyberData Inc.'}
                            jobName={'Software Engineering Summer Intern'}
                            jobDescription={'Developed two projects in Java utilizing Selenium WebDriver to create ' +
                            'automated testing programs. The first program matched web elements with their corresponding' +
                            ' entry in a database and checked to see if the website’s information was up-to-date. Also ' +
                            'developed a second program that also used the Selenium WebDriver to scan the hyperlinks ' +
                            'from the company’s site and check for broken links.'}/>

                        <Experience
                            startYear={'June 2017'}
                            endYear={' August 2017'}
                            companyName={'NavInfo'}
                            jobName={'Corporate Strategy Summer Intern'}
                            jobDescription={'Worked with the Autonomous Driving team and conducted extensive research ' +
                            'on global trends and developments in ADAS. Also examined and performed a case study on ' +
                            'various GPU companies such as NVidia and Mobileye’s acquisition by Intel to help develop ' +
                            'the company’s own VPU project.'}/>

                        <hr style={{borderTop: '3px solid #e22947'}}/>

                        <h2>Skills</h2>
                        <Skills
                            skill={'Java'}
                            progress={100}
                        />

                        <Skills
                            skill={'C++'}
                            progress={80}
                        />

                        <Skills
                            skill={'Python'}
                            progress={80}
                        />

                        <Skills
                            skill={'JavaScript'}
                            progress={25}
                        />

                        <Skills
                            skill={'HTML/CSS'}
                            progress={60}
                        />

                        <Skills
                            skill={'React'}
                            progress={25}
                        />

                        <Skills
                            skill={'NodeJS'}
                            progress={25}
                        />

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;
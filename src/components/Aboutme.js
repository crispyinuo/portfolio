import { useState } from "react";
import '../css/Aboutme.css'

function Aboutme() 
{
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
      <>

    <div className="container-fluid abtme_bg pb-5" style={{"overflowX":"hidden"}}>

{/* ------------------------ heading start -------------------- */}
        <div class="row">
            <div class="col-md-5 mx-auto text-center abt_me_heading" id="abt_me">
                ABOUT ME
            </div>
        </div>
{/* ------------------------ heading end -------------------- */}

{/* ------------------- abt me complete sections start -------------------- */}

        <div className="container-fluid overflow-x-hidden">

            {/* about me on click tabs */}
            <div className="row">
                <div className="col-md-6 mx-auto d-flex flex-wrap mt-2 mb-4 justify-content-center bio_tabs">

                    <div className={toggleState === 1 ? "tabs active flex-item mx-auto tablinks bio_tabs_item" : "tabs flex-item mx-auto tablinks bio_tabs_item"} onClick={() => toggleTab(1)}>
                        TECH SKILLS   
                    </div>

                    <div className={toggleState === 3 ? "tabs active flex-item mx-auto tablinks bio_tabs_item" : "tabs flex-item mx-auto tablinks bio_tabs_item"} onClick={() => toggleTab(3)}>
                        EDUCATION   
                    </div>

                    <div className={toggleState === 4 ? "tabs active flex-item mx-auto tablinks bio_tabs_item" : "tabs flex-item mx-auto tablinks bio_tabs_item"} onClick={() => toggleTab(4)}>
                        EXPERIENCE   
                    </div>

                    <div className={toggleState === 2 ? "tabs active flex-item mx-auto tablinks bio_tabs_item" : "tabs flex-item mx-auto tablinks bio_tabs_item"} onClick={() => toggleTab(2)}>
                        OTHERS  
                    </div>

                </div>
            </div>
            {/* about me on click tabs end */}

            {/* about me tabs content start */}
            <div className="row">
                
                {/* skills start */}
                <div className={toggleState === 1 ? "content_abtme  active-content_abtme" : "content_abtme"}>
                    
                    <div className="container-fluid abt_anim">
                        <div className="row">
                            <div className="col-lg-6 mx-auto abt_cont pb-4">
         
                                    <div className="skill_boxtype2 mt-5 mx-auto d-flex text-center flex-wrap">	

                                    <div className="row">
                                        <div className="col"> <i className="fa-brands fa-html5" style={{"color": "rgba(255,103,57,.9)"}}></i> <h6>HTML</h6> </div> 
                                        <div className="col"> <i className="fa-brands fa-css3-alt" style={{"color": "#5DADE2"}}></i> <h6>CSS</h6> </div> 
                                        <div className="col"> <i className="fa-brands fa-bootstrap" style={{"color": "#AF7AC5"}}></i> <h6>BOOT STRAP</h6> </div>     
                                        <div className="col"> <i className="fa-brands fa-js-square" style={{"color": "yellow"}}></i> <h6>JAVA SCRIPT</h6> </div> 
                                        <div className="col"> <i className="fa-brands fa-react" style={{"color": "#61dafb"}}></i> <h6>REACT</h6> </div> 
                                        <div className="col"> <i className="fa-brands fa-envira" style={{"color": "#82E0AA"}}></i> <h6>MONGO DB</h6> </div> 
                                        <div className="col"> <i className="fa-brands fa-github" style={{"color": "black"}}></i> <h6>GIT HUB</h6> </div> 
                                        <div className="col"> <i className="fa-brands fa-git-alt" style={{"color": "#f14e32"}}></i> <h6>GIT</h6> </div> 
                                        <div className="col"> <i className="fa-brands fa-java" style={{"color": "#f89820"}}></i> <h6>JAVA</h6> </div> 
                                        <div className="col"> <i className="fa-brands fa-python" style={{"color": "#3571A1"}}></i> <h6>PYTHON</h6> </div>
                                        <div className="col"> <i className="fa-brands fa-r-project" style={{"color": "#266DC2"}}></i> <h6>R</h6> </div>   
                                        <div className="col"> <i className="fa-brands fa-ubuntu" style={{"color": "#E05823"}}></i> <h6>Ubuntu</h6> </div>                           
                                    </div>	
                                    </div>
       
                            </div>
                        </div>
                    </div>                    
                
                </div>
                {/* skills end */}

                {/* extra skills start */}
                <div className={toggleState === 2 ? "content_abtme  active-content_abtme" : "content_abtme"}>

                    <div className="container-fluid abt_anim">
                        <div className="row text-center">
                            <div className="col-md-6 mx-auto abt_cont extra_skill_text">
                                                
                                <h2 style={{"color": "#6997BD", "lineHeight":1.5}}>SOFT SKILLS</h2>
                                
                                <h4 className='text-start text-white'>
                                    <ul>
                                        <li>Communication & Interpersonal  skills
                                            <h6 className='ms-5 mt-2'>Have the ability to communicate the desired message effectively while keeping the listener engaged.</h6>
                                        </li>

                                        <li>Public speaking skills
                                            <h6 className='ms-5 mt-2'> Have extensive experience of public speaking in the form of event hosting and delivering presentation in front of large audience. Also participated in in multiple debate and MUN competetions which further helped in developing these skills. </h6>
                                        </li>

                                        <li>Leadership & Management skills
                                            <h6 className='ms-5 mt-2'> Skilled in organising other people to reach a shared goal and keep the team motivated to reach the desired goal. Can organise and communicate clearly to support a team or project. </h6>
                                        </li>

                                        <li>Quick & Visual Learner
                                            <h6 className='ms-5 mt-2'>I am a very strong visual learner and am determined to solve problems and quickly find an effective solution.</h6>
                                        </li>

                                        <li> Effective Problem Solver
                                            <h6 className='ms-5 mt-2'> I have the capability to solve problems and determining the cause of the problem. Identifying, prioritizing, and selecting alternatives for a solution; and implementing a solution.</h6>
                                        </li>
                                    </ul>
                                </h4>
                            </div>
                        </div>
                    </div>

                </div>
                {/* extra skills end */}

                {/* education start */}
                <div className={toggleState === 3 ? "content_abtme  active-content_abtme" : "content_abtme"}>

                    <div className="container-fluid abt_anim">
                        <div className="row text-center justify-content-center">

                            <div className="col-md-6 text-start abt_cont edu_cont p-3 mt-2 me-2">
                                            
                                            <i className="fa-solid fa-user-graduate mt-2 mb-3" style={{"color":"#6997BD", "fontSize":50}}></i>
                                            <h5>2019-2023</h5>
                                            <h5>Undergraduate</h5>
                                            <h4 className='text-white'>Computer Science & Business Administration (CSBA)</h4>
                                            <h6>GPA - 3.83</h6>
                                            <h5>University of Southern California</h5>

                                            <h5 className='text-start text-light mt-2'>
                                                <ul style={{"lineHeight":1.5}}>
                                                    <li>Major in Computer Science/Business Administration.</li>
                                                    <li>Minor in Music Production. </li>
                                                    <li>Dean List & Academic Achievement Award </li>
                                                </ul>
                                                <h5>Relevant Coursework:</h5>
                                                <p>Micro & Macroeconomics, Statistics, Finance, Business Forecasting
                                            Data Structures and Object-Oriented design, Software Development & Engineering, Introduction to Artificial Intelligence
                                                </p>

                                            </h5>
                            </div>


                        </div>
                    </div>

                </div>
                {/* education end */}

                {/* experience start */}
                <div className={toggleState === 4 ? "content_abtme  active-content_abtme" : "content_abtme"}>

                    <div className="container-fluid abt_anim">
                    <div className="row text-center">
                        <div className="col-md-7 mx-auto abt_cont edu_cont"> 
                        
                        <div style={{"borderBottom": "10px solid #6997BD"}}>       
                                        <i className="fa-solid fa-laptop-code my-3" style={{"color":"#6997BD", "fontSize":50}}></i>
                                        <h5>May 2022 Present</h5>
                                        <h5>NextPlate</h5>
                                        <h3 className="my-2">Software Engineer</h3>
                                        <h5>Los Angeles, CA</h5>

                                        <h5 className='text-start text-light' style={{"lineHeight":1.5}}>
                                            <ul>
                                                <li> Wrote Front End features for NextPlate App.</li>
                                            </ul>
                                        </h5>
                        </div>

                        <div style={{"borderBottom": "10px solid #6997BD"}}>       
                                        <i className="fa-solid fa-laptop-code my-3" style={{"color":"#6997BD", "fontSize":50}}></i>
                                        <h5>Feb 2022 - Present</h5>
                                        <h5>Tera Thought</h5>
                                        <h3 className="my-2">Android Developer</h3>
                                        <h5>Los Angeles, CA</h5>

                                        <h5 className='text-start text-light' style={{"lineHeight":1.5}}>
                                            <ul>
                                                <li> Determine architectural and product design details for an android application – “Shareful”.</li>
                                                <li> Implement features using Java, Kotlin & Firebase with Android Studio. </li>
                                            </ul>
                                        </h5>
                        </div>

                        <div style={{"borderBottom": "10px solid #6997BD"}}>       
                                        <i className="fa-solid fa-laptop-code my-3" style={{"color":"#6997BD", "fontSize":50}}></i>
                                        <h5>May 2021 - Aug 2021</h5>
                                        <h5>Tencent</h5>
                                        <h3 className="my-2">Product Intern</h3>
                                        <h5>Shanghai, China</h5>

                                        <h5 className='text-start text-light' style={{"lineHeight":1.5}}>
                                            <ul>
                                                <li> Took charge of Business Development and Outsourcing, established partnerships and connections with more than 10
	                                                potential clients through Game Industry Conferences, business matching systems, and LinkedIn reach-outs.</li>
                                                <li> Proposed and facilitated B2B global marketing strategies for a game-testing Platform (WeTest) by Tencent. </li>
                                                <li> Wrote weekly blogs about Quality Assurance Services and Game-Testing, boosted the public exposure by 300%. </li>
                                            </ul>
                                        </h5>
                        </div>
                        </div>
                    </div>
                    </div>

                </div>    
                {/* experience end */}

            </div>
            {/* about me tabs content end */}

        </div>

{/* ------------------- abt me complete sections end -------------------- */}

    </div>
    
    </>
  )
}

export default Aboutme;
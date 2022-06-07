import '../css/Openingpage.css'
import Navbar from "./Navbar"
import zzLogo from "../imgs/ZZ_logo.png"
import profile from "../imgs/profile.jpeg"

function Openingpage()
{
    return(
        <>
            <div className="container-fluid opening_page mt-2 pb-0" style={{"overflowX":"hidden"}}>

                <Navbar></Navbar>
                
                <div className="row mt-5 mb-1 pt-5 ">

                <div className="col-lg-5 offset-md-1 intro mb-2 mx-auto text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                    Hi, I'm Zoe.
                    <br/>
                    <p className="mb-8 leading-relaxed">
                    I am a ...
                    </p>
                </h1>
                <div class="morph_cont">
                        <div class="morph_word">Full Stack Developer</div>
                        <div class="morph_word">QA Automation Engineer</div>
                        <div class="morph_word">Dancer</div>
                    </div>
                </div>

                <div className="col-md-4 ">
                    <img src={profile} alt="" className="img-fluid animated fadeInUp profilePic"  />
                <div>
                <img src={ zzLogo } alt="" className="ZZlogo" /> 
                </div>
                </div>

                </div>

            </div>

        </>
    )
}    

export default Openingpage;
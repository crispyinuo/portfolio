import '../css/Openingpage.css'
import Navbar from "./Navbar"
import zzLogo from "../imgs/ZZ_logo.png"

function Openingpage()
{
    return(
        <>
            <div className="container-fluid opening_page mt-2 pb-0" style={{"overflowX":"hidden"}}>

                <Navbar></Navbar>
                
                <div className="row mt-5 mb-1 pt-5 ">

                <div className="col-lg-5 offset-md-1 intro mb-2 mx-auto text-center">
                    Hi, <br /> I'm Zoe,
                    <div class="morph_cont">
                        <div class="morph_word">Full Stack Developer</div>
                        <div class="morph_word">Front End Developer</div>
                        <div class="morph_word">Dancer</div>
                    </div>
                    <p>I build interactive websites that run <br /> across platforms & devices.</p>
                </div>

                <div className="col-lg-5 text-center intro_img text-center mx-auto">
                    <a href="#"> <img src={ zzLogo } alt="" className="ZZlogo" /> </a>

                </div>

                </div>

            </div>

        </>
    )
}    

export default Openingpage;
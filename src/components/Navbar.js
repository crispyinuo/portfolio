import '../css/navbar.css'

import nav_logo from '../imgs/avatar_logo.png'; 


export default function Navbar()
{

        function openNav() {
            document.getElementById("myNav").style.width = "100%";
        }
      
        function closeNav() {
            document.getElementById("myNav").style.width = "0%";
        }


    return(
        <>
            <div className="row" id="page_top" style={{"overflowX":"hidden"}}>
                <div className="col-md-10 offset-md-1 mt-3 navbar_bg">
                    <nav className="navbar navbar-expand-lg w-100">
                    <div className="container-fluid">
                        <a href="#"> <img src={ nav_logo } alt="" className="logo_size" /> </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse">
                            <span> <i onClick={openNav} className="fa-solid fa-bars-staggered nav_toggler"> </i> </span>
                        </button>

                            <div className="collapse offset-md-4 navbar-collapse">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
                                    <li className="nav-item">
                                    <a className="nav-link nav_text btn btn_effect" href="#aboutme"> About Me </a>
                                    </li>
                                    
                                    <li className="nav-item">
                                    <a className="nav-link nav_text btn btn_effect" href="#project"> Projects </a>
                                    </li>

                                    <li className="nav-item">
                                    <a className="nav-link nav_text btn btn_effect" href="#contact" data-bs-toggle="modal" data-bs-target="#contactModal"> Contact Me </a>
                                    </li>
                                </ul>
                            </div>
                    </div>
                    </nav>
                </div>
            </div>

            {/* responsive navbar start */}

            <div id="myNav" className="overlay">

                <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>

                <div className="overlay-content">
                <a href="#aboutme" className="btn_effect">About Me</a>
                <a href="#project" className="btn_effect">Projects</a>
                <a href="#contact" data-bs-toggle="modal" data-bs-target="#contactModal" className="btn_effect">Contact Me</a>
                </div>

            </div>

            {/* responsive navbar end */}
        </>
    );
}
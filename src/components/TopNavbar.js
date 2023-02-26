import { Link } from "react-router-dom";

function TopNavbar(){
    return <header>
             <nav id="page-nav" >
                <div className="header-img-container">
                    <img src="https://d92mrp7hetgfk.cloudfront.net/images/sites/misc/10x_academy/original.png?1622233879" alt="logo" />
                </div>
                <div className="header-img-container">
                <Link  to="/createpost">   <img src="https://www.citypng.com/public/uploads/preview/camera-black-icon-download-png-11637046102tnsidttgfc.png" alt="logo" /> </Link> 
                </div>
                
             </nav>

    </header>

    
}

export default TopNavbar;
import Posts from "./Posts";
import TopNavbar from "./TopNavbar";


function PageLayout(){
   
    return <div id="page-container">

        <TopNavbar/>
        <div id="main-content">
            <Posts/>
        </div>

    </div>
}

export default PageLayout;
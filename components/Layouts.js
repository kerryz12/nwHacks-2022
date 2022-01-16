import Navbar from "./Navbar"
import Footer from "./Footer"

const Layouts = ({ children}) => {
    return (
        <div className="content">
            <Navbar />
            { children }
            <Footer />
        </div>
    );
}

export default Layouts;
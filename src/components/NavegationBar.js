import { Link } from "react-router-dom";

const NavigationBar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <form className="d-flex justify-content-sm-around w-100 col-12" > 
                <Link to='./home' className="col-2 btn btn-outline-success" type="button">Home</Link>
                <Link to='./about' className="col-2 btn btn-outline-primary" type="button">About</Link>
                <Link to='./f.a.q' className="col-2 btn btn-outline-danger" type="button">F.A.Q</Link>
                <Link to='./store' className="col-2 btn btn-outline-warning" type="button">Store</Link>
                <Link to='./home' className="col-2 btn btn-outline-info" type="button">App</Link>
            </form>
        </nav>
    )
}

export default NavigationBar
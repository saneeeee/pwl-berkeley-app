import logo from './static/SVG/pwl@berkeley-logo.svg';
import { Outlet } from 'react-router-dom';
function Root() {
    return (
        <div className="root">
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src={logo} alt="Logo" width="30" height="24"
                             className="d-inline-block align-text-top"
                             style={{width: "100px"}}/>
                        PWL@Berkeley
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                            <a className="nav-link" href="upcomingEvents">Upcoming Events</a>
                            <a className="nav-link" href="join">Join PWL</a>
                            <a className="nav-link" href="#zbab">About</a>


                        </div>
                    </div>
                </div>
            </nav>
            <div id="detail">
                <Outlet />
            </div>
        </div>
    );
}
export default Root;
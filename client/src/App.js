import logo from './static/SVG/pwl@berkeley-logo.svg';
function App() {
    return (
        <div className="App">
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#zbab">
                        <img src={logo} alt="Logo" width="30" height="24"
                             className="d-inline-block align-text-top"
                             style={{width: "60px"}}/>
                            PWL@Berkeley
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="#zbab">Home</a>
                            <a className="nav-link" href="#zbab">Features</a>
                            <a className="nav-link" href="#zbab">Pricing</a>
                            <a className="nav-link disabled">Disabled</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default App;

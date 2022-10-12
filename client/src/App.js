import logo from './static/SVG/pwl@berkeley-logo.svg';
function App() {
    return (
        <div className="App">
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#zbab">
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
                            <a className="nav-link active" aria-current="page" href="#zbab">Home</a>
                            <a className="nav-link" href="#zbab">About</a>
                            <a className="nav-link" href="#zbab">Join PWL</a>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="container">
                <h1 className={"text-center my-3"}>Upcoming events</h1>
                {EventsList()}


            </div>
        </div>
    );
}
function EventsList() {
    return (
        <div className="eventsList">
            <ul style={{listStyleType: "none"}}>
                <li>
                    {EventCard()}
                </li>
                <li>
                    {EventCard()}
                </li>
                <li>
                    {EventCard()}
                </li>
                <li>
                    {EventCard()}
                </li>
                <li>
                    {EventCard()}
                </li>
            </ul>
        </div>
    );
}
function EventCard() {
    return (
        <div className="card my-3">
            <div className="card-body">
                <h2 className={"card-title"}>Paper Talk: <span className={"text-primary"}>FOO BAR by FUBAR</span></h2>
                <h4 className={"card-subtitle text-pwl-primary"}>November 1 2022</h4>
                <p className={"card-text"}>
                    <strong>Abstract:</strong> In this paper talk we explore laskdjfopw poejghw adfkqwopbjnk as;dg
                    sdngoiregt qopwrgjnklonqwer qwpojtgn rgq;'o qpowjtjnqwrt pqowjrtlknqw op[qwetkln
                    qwrntlkwqjrt woptjklqwnme;lwkegkl qp[orjtklonwegkl;as pqowjtklnwqt p;alwejtoijqw
                </p>
            </div>
        </div>
    );

}

export default App;

function UpcomingEvents() {
    return (
        <div className="App">
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
            <ul className="px-0" style={{listStyleType: "none"}}>
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

export default UpcomingEvents;

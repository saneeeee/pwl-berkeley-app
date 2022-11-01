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
                    <EventCard title="Diffuser Cam" researcher=" Eric Markley" date="November 10 2022">
                        <>
                            <strong>Abstract:</strong> In this paper talk Eric Markley from Laura Waller's Computaional
                            Imaging Lab will present ..........smnfkm;lmgh dnfkklngs kanfj sgpkanfl akmdg aksnfljagdka f
                            akg jndaglm  a;kngkn smg;mlkaa; ;alngjl agm  ;akgnm s,gkmsj gms gk dgnlknskmgklsng ;lg g;kdg
                        </>
                    </EventCard>
                </li>
            </ul>
        </div>
    );
}
function EventCard(props) {
    return (
        <div className="card my-3">
            <div className="card-body">
                <h2 className={"card-title"}>Paper Talk: <span className={"text-primary"}>{props.title} by
                    {props.researcher}</span></h2>
                <h4 className={"card-subtitle text-pwl-primary"}>{props.date}</h4>
                <p className={"card-text"}>
                    {props.children}
                </p>
            </div>
        </div>
    );

}

export default UpcomingEvents;

function UpcomingEvents() {
    return (
        <div className="App">
            <div className="container">
                <h1 className={"text-center my-3"}>Upcoming events</h1>
                {UpcomingEventsList()}
                <h1 className={"text-center my-3"}>Past events</h1>
                {PastEventList()}
            </div>
        </div>
    );
}
function UpcomingEventsList() {
    return (
        <div className="eventsList">
            <ul className="px-0" style={{listStyleType: "none"}}>
                <li>
                    <EventCard title="NeRF" researcher="Matthew Tancik" date="January 26 2023, 8:00pm"
                               location="Evans 70">
                        <>
                            <strong>About:</strong> In this paper talk Matthew Tancik will present NeRF (Neural
                            Radiance Fields): This project is too awesome to summarize in a mere abstract so please
                            check out Matthew's <a href="https://www.matthewtancik.com/nerf">project page</a> for more
                            information and awesome visuals.
                        </>
                    </EventCard>
                </li>
            </ul>
        </div>
    );

}
function PastEventList() {
    return (
        <div className="eventsList">
            <ul className="px-0" style={{listStyleType: "none"}}>
                <li>
                    <EventCard title="Diffuser Cam" researcher=" Eric Markley" date="November 10 2022, 6:30pm"
                               location="Moffitt 103">
                        <>
                            <strong>About:</strong> In this paper talk Eric Markley from Laura Waller's Computaional
                            Imaging Lab will present DiffuserCam: "a lensless camera made of a piece of bumpy plastic,
                            called a diffuser, in front of a bare image sensor. Since there are no other elements in the
                            system, the camera is cheap, compact, and easy to build. We’ve demonstrated that our simple
                            system can be used for both 2D photography and 3D image reconstruction from a single
                            acquisition." <a href="https://waller-lab.github.io/DiffuserCam/">Project Page</a>
                            <ul>
                                <li>Meet outside Moffitt at 6:30pm for pizza</li>
                                <li>Talk will start at 7:00pm, Moffit 103</li>
                            </ul>
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
                <h4 className={"card-subtitle text-pwl-primary"}>{props.date + " " + props.location}</h4>
                <p className={"card-text"}>
                    {props.children}
                </p>
            </div>
        </div>
    );

}

export default UpcomingEvents;

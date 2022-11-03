import UpcomingEvents from "./UpcomingEvents";
function Home() {
    return(
        <div className={"container"}>
            <div>
                <h1 className="text-pwl-primary">Papers We ❤️ at Berkeley</h1>
                <h4>Information</h4>
                <div className="" >
                    <p>
                        Papers We Love at Berkeley is a new student organisation focused on connecting the campus
                        community over EECS research.
                    </p>
                    <p>
                        Our mission is create a welcoming environment for interested members of our community to follow
                        and take place in research that will shape our future.
                    </p>
                    <p>
                        In addition to connecting members to research on campus with paper talks/forums, and bringing
                        industry leading researchers for our conferences, we are holding focused reading groups and mini
                        conferences for members to discover their interest and get inspired from others.
                    </p>
                    <p>
                        Our events are not member exclusive, and everyone is welcome to join.
                        Additionally everyone genuinely interested in academic research is invited to join the club to
                        help us organize events (possibly with researchers you are interested in).
                    </p>

                </div>
            </div>
            <UpcomingEvents />
        </div>
    );

}
export default Home;
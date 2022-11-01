import UpcomingEvents from "./UpcomingEvents";
function Home() {
    return(
        <div className={"container"}>
            <div>
                <h1 className="text-pwl-primary">Papers We ❤️ at Berkeley</h1>
                <div className="" >
                    <p>
                        Papers We Love at Berkeley is a new student organisation focused on connecting the campus community
                        over EECS\STEM research.
                    </p>
                    <p>
                        While Berkeley is leading innovation in many exciting fields such as Theory,
                        Computer Vision, and Machine Learning, getting started with following and engaging in academic
                        research is still frustrating to many on campus.
                    </p>
                    <p>
                        Our mission is create a welcoming environment for interested members of our community to follow and
                        take place in the fast paced innovations that will shape our future.
                    </p>
                    <p>
                        In addition to connecting members to research on campus with paper talks/forums, and bringing industry
                        leading researchers for our conferences, we are holding focused reading groups and mini conferences for
                        members to discover their interest and get inspired from each other.
                    </p>
                    <p>
                       Our events are not member exclusive, but everyone genuinely interested in academic research is invited
                        to join the club to help us organize events with researchers they are interested in.
                    </p>

                </div>
            </div>
            <UpcomingEvents />
        </div>
    );

}
export default Home;
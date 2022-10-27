import UpcomingEvents from "./UpcomingEvents";
function Home() {
    return(
        <div>
            <div className="text-center">
                <h1 className="text-pwl-primary">Home Page</h1>
                <p className="text-primary">Don't know what to say??</p>
            </div>
            <UpcomingEvents />
        </div>
    );

}
export default Home;
import { useRouteError } from "react-router-dom"

function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return(
        <div id="error-page" className="container text-center">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.status} {error.statusText || error.message}</i>
            </p>
            <p>Please submit a issue on <a href="https://github.com/saneeeee/pwl-berkeley-app">Github</a> if you
                think this is a mistake</p>
        </div>

    );
}
export default ErrorPage;
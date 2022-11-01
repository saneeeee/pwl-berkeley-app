function Fun() {
    //<p className="text-center">{"(_=()=>`(_=${_})()`)()"}</p>
    return (
        <div className="container">
            <h1 className="text-pwl-primary">Fun?:</h1>
            <h4>Solve any these weekly puzzles and show us your solution at one of our events for pizza!!</h4>
            <Puzzle title="Enough Consulting Clubs?">
                <div>
                    <p>There are <b>n</b> students and <b>k</b> consulting clubs at Berkeley,</p>
                    <ul>
                        <li><p>Each consulting club has an <b>odd number of members</b>, and</p></li>
                        <li><p><b>Any two consulting clubs have an even number of common members</b> <span style={{fontSize: '5pt'}}>Perhaps to deflate acceptance rates and make them appealing to freshman?</span></p></li>
                    </ul>
                    <p>Assuming a consulting club is uniquely identifiable by its members, <b>find an upper bound to the number of consulting clubs on campus.</b></p>
                </div>
            </Puzzle>

            <Puzzle title="Three Bears">
                <div>
                    <p>Your CS professor offers an A+ to anyone who can guess the ages of his 3 bears.
                        However if you make a single wrong guess, you'll fail the class.</p>
                        <p>When you asked for a clue, he said: <b>"The product of their ages is 36"</b></p>
                    <ul>
                        <li><p>Seeing you still couldn't guess their ages, he gave you another clue:
                            <b>"The sum of their ages is equal to my office number"</b></p></li>
                        <li><p>Although you know their office number, you still couldn't guess their ages, so your got a
                            final clue:<b>"My oldest bear is named Oski"</b></p></li>
                    </ul>
                    <p>And you were finally able to guess their ages and grab that sweet A+. <b>How old are the bears?</b></p>
                </div>
            </Puzzle>

        </div>
    );
}
function Puzzle(props) {
    return (
        <div className="card my-3">
            <div className="card-body">
                <h1 className="card-title text-primary">{props.title}</h1>
                <p className="card-text">
                    {props.children}
                </p>
            </div>
        </div>
    );
}
export default Fun;
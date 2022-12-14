function Fun() {
    //<p className="text-center">{"(_=()=>`(_=${_})()`)()"}</p>
    return (
        <div className="container">
            <h1 className="text-pwl-primary">Fun?:</h1>
            <h4>Show us your solution to any of the weekly puzzles at one of our events for pizza!!</h4>
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
                    <p>And you were finally able to guess their ages. <b>How old are the bears?</b></p>
                    <p><b>Hint:</b> There can be so many factor triples of 36!</p>
                    <p><b>Even More Hints:</b>
                        <ul>
                            <li>1 * 1 * 36 = 36</li>
                            <li>1 * 2 * 18 = 36</li>
                            <li>1 * 3 * 12 = 36</li>
                            <li>1 * 4 * 9 = 36</li>
                            <li>1 * 6 * 6 = 36</li>
                            <li>2 * 2 * 9 = 36</li>
                            <li>2 * 3 * 6 = 36</li>
                            <li>3 * 3 * 4 = 36</li>
                        </ul>
                    </p>
                </div>
            </Puzzle>

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
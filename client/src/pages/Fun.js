function Fun() {
    return (
        <div className="container">
            <h1 className="text-pwl-primary">Fun ?</h1>
            <p className="text-center">{"(_=()=>`(_=${_})()`)()"}</p>
            <Puzzle title="Enough Consulting Clubs ?" body={ 
                <div>
                    <p>There are <b>n</b> students and <b>k</b> consulting clubs at Berkeley,</p>
                    <ul>
                        <li><p>Each consulting club has an <b>odd number of members</b>, and</p></li>
                        <li><p><b>Any two clubs have an even number of common members</b>. (Perhaps to deflate acceptance rates and make them appealing to freshman)</p></li>
                    </ul>
                    <p>Assuming a consulting club is uniquely identifiable by its members, find an upper bound to the number of consulting clubs on campus</p>
                </div>
            }/>
            <Puzzle title="Enough Consulting Clubs ?" body={ 
                <div>
                    <p>There are <b>n</b> students and <b>k</b> consulting clubs at Berkeley,</p>
                    <ul>
                        <li><p>Each consulting club has an <b>odd number of members</b>, and</p></li>
                        <li><p><b>Any two clubs have an even number of common members</b>. (Perhaps to deflate acceptance rates and make them appealing to freshman)</p></li>
                    </ul>
                    <p>Assuming a consulting club is uniquely identifiable by its members, find an upper bound to the number of consulting clubs on campus</p>
                </div>
            }/>
        </div>
    );
}
function Puzzle(props) {
    return (
        <div className="card my-3">
            <div className="card-body">
                <h1 className="card-title text-primary">{props.title}</h1>
                <p className="card-text">
                    {props.body}
                </p>
            </div>
        </div>
    );
}
export default Fun;
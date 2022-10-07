import { Link } from "react-router-dom";
import Loading from "./Loading";
import Search from "./Search";
function Home({ users, loading }) {
    return (
        <>
           
            <center>
                {loading && <Loading />}
                <div className="row">
                    {users.map((user, i) => (
                        <div className="side" key={i}>
                            <img src={user.avatar_url} height={200} alt="profilepic" />
                            <h2>{user.login}</h2>
                            <Link to="/">Click Profile</Link>
                        </div>
                    ))}
                </div>
            </center>
        </>
    )
}

export default Home;
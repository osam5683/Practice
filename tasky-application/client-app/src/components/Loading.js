import loading from "./assets/Loading1.gif";
import tick from "../components/assets/tick.png";


function Loading() {
    return (
        <>
            <center>
                <img src={loading} alt="Loading.." />
                <img src={tick} alt="tick.." />
            </center>
        </>
    )
}

export default Loading;
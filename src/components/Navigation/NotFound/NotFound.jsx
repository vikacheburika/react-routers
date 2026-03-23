import "./NotFound.css"
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button"

function NotFound() {
    const navigate = useNavigate()

    return(
        <>
        <div className="notfound">
            <Button variant="danger" onClick={()=> navigate("/")}>GO HOME</Button>
        </div>
        </>
    )
}

export default NotFound;

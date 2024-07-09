import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";


function Field(props) {
    return (
        <a target="_blank" className="underline text-blue-400 text-[15px]" href={props.url}>{props.url}</a>       
    )
}

export default Field;
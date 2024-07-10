import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";


function Field({url}) {
    return (
        <a 
            target="_blank" 
            className={"underline text-[15px] text-blue-400"}
            href={url}
        >
            {url}
        </a>       
    )
}

export default Field;
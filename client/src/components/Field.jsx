import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function Field(props) {
    return (
        <div className=" flex border rounded justify-between items-center pl-2 pt-1 pb-1 pr-3 mt-1">
            <a className="text-blue-400 underline"  href={props.url}>{props.url}</a>
            <div className="flex gap-3" >
                <button>
                    <FontAwesomeIcon icon={faCheck} /> 
                </button>
                <button>
                    <FontAwesomeIcon icon={faXmark} />
                </button>
            </div>
                
        </div>
        
    )
}

export default Field;
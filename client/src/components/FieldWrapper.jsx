import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function FieldWrapper(props) {
    // FIX FIELD WRAPPER OVERFLOW WHEN INPUTTING LONG URL  
    return (
        <div className=" flex flex-wrap border rounded justify-between items-center pl-2 pt-1 pb-1 pr-3 mt-1">
            {props.field}
            <div className="flex gap-3">
                {props.showCheckmark && (
                    <button>
                        <FontAwesomeIcon icon={faCheck} />
                    </button>
                )}
                <button>
                    <FontAwesomeIcon icon={faXmark} />
                </button>
            </div>

        </div>
    )
}

export default FieldWrapper;
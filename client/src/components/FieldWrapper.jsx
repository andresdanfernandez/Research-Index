import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function FieldWrapper(props) {
    return (
        <div className="text-stone-300 flex border rounded justify-between items-center pl-2 pt-1 pb-1 pr-2 mt-4 w-full max-w-md ">
            <div className="scrollable-div overflow-auto whitespace-nowrap  w-80">
                {props.field}
            </div>
            <div className="flex gap-4">
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
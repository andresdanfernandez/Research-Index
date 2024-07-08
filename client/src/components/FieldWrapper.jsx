import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import Field from "./Field";


function FieldWrapper(props) {
    return (
        <div className=" flex border rounded justify-between items-center pl-2 pt-1 pb-1 pr-3 mt-1">
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
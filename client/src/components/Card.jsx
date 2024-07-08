import {useState} from "react";
import Field from "./Field";
import FieldWrapper from "./FieldWrapper";

const button = <button className="pr-3 pl-3 text-sm hover:bg-stone-800">Add</button>;

function Card(props) {

    return (
            <div className="scrollable-div overflow-auto bg-secondary place-self-center w-11/12 max-w-md flex flex-col p-7 h-96 rounded-xl">
                <div className="flex justify-between">
                    <h1 className="text-2xl font-bold block text-slate-300">{props.title}</h1>
                    <div className="flex justify-center items-center bg-stone-900 hover:bg-stone-800 cursor-pointer rounded text-slate-300" >
                        {props.title === "To-Read Papers" && button}
                    </div>
                </div>

                <div className="flex flex-col flex-wrap gap-2 pt-2 text-sm text-stone-300" >
                   <FieldWrapper field={<Field url="google.com"/>} showCheckmark={props.title === "To-Read Papers"} />
                </div>

            </div>
    )
}

export default Card;
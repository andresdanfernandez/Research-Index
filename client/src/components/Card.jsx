import {useState} from "react";
import Field from "./Field";

const button = <button className="pr-3 pl-3 text-sm hover:bg-stone-800 ">Add</button>;

function Card(props) {

    return (
            <div className="scrollable-div overflow-auto bg-secondary place-self-center w-11/12 max-w-md flex flex-col p-7 h-96 rounded-xl">
                <div className="flex justify-between">
                    <h1 className="text-2xl font-bold block text-slate-300">{props.title}</h1>
                    <div className="flex justify-center items-center bg-stone-900 hover:bg-stone-800 cursor-pointer rounded text-slate-300" >
                        {props.title === "Add Papers" && button}
                    </div>
                </div>

                <div className="flex flex-col gap-2 pt-2 text-sm text-slate-300" >
                    <Field/>
                    <Field/>
                </div>

            </div>
    )
}

export default Card;
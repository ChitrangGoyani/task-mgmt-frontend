import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { CardType } from "./Card";
import { motion } from "framer-motion";
import { Textarea } from "@/components/ui/textarea"

type AddCardProps = {
    column: string,
    edit: boolean,
    textData?: string,
    adding? : boolean,
    setCards: Dispatch<SetStateAction<CardType[]>>
}

export const AddCard = ({column, edit, textData, adding, setCards}: AddCardProps) => {
    const [isEdit, setEdit] = useState(edit);
    const [text, setText] = useState("");
    const [isAdding, setAdding] = useState(adding);
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!text.trim().length) return;

        if(edit) {
            // Do nothing
        } else {
            const newCard = {
                column,
                title: text.trim(),
                id: Math.random().toString()
            }
    
            setCards((pv) => [...pv, newCard]);
        }
        
        setAdding(false);
    }
    return <>
        {isAdding ? 
            <motion.form layout onSubmit={handleSubmit}>
                {isEdit ? 
                <Textarea
                    autoFocus
                    className="focus:!outline-none focus:border-black focus:ring-0 w-full rounded p-3 text-sm text-black placeholder-slate-400"
                >{textData}</Textarea> : 
                <Textarea
                    onChange={(e) => setText(e.target.value)}
                    autoFocus
                    placeholder="Add a New Task"
                    className="focus:!outline-none focus:border-black focus:ring-0 w-full rounded p-3 text-sm text-black placeholder-slate-400"
                /> }
                
                <div className="mt-1.5 flex items-center justify-end gap-1.5">
                    <button
                        onClick={() => setAdding(false)}
                        className="px-3 py-1.5 text-xs text-white bg-black transition-colors hover:text-black rounded-md hover:bg-white border border-black"
                    ><span>Close</span></button>
                    <button
                        type="submit"
                        className="px-3 py-1.5 text-xs text-white bg-black transition-colors hover:text-black rounded-md hover:bg-white border border-black"
                    >{isEdit ? <span>Save</span> : <span>Add</span>}</button>
                </div>
            </motion.form> : 
            <motion.button onClick={() => setAdding(true)}
            className="flex w-full items-center gap-1.5 px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-black"
            >
                <span> Add Card </span>
            </motion.button>}
    </>
}
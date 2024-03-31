import { motion } from "framer-motion";
import React, { Dispatch, SetStateAction, useState } from "react";
import { Textarea } from "@/components/ui/textarea"

type AddColumnProps = {
    columns: string[],
    setColumns: Dispatch<SetStateAction<string[]>>
}

export const AddColumn = ({columns, setColumns}: AddColumnProps) => {
    const [isAdding, setAdding] = useState(false);
    const [text, setText] = useState("");

    const handleSubmit = () => {
        if(!text.trim().length) return;
        setColumns((pv) => [...pv, text]);
        setAdding(false);
    }
    return(
        <div>
            {isAdding ? 
            <div>
                <Textarea
                onChange={(e: any) => setText(e.target.value)}
                autoFocus
                placeholder="Add a New Column"
                className="focus:!outline-none focus:border-black focus:ring-0 w-full rounded p-3 text-sm text-black placeholder-slate-400"
                />
                <div className="mt-1.5 flex items-center justify-end gap-1.5">
                    <button
                        onClick={() => setAdding(false)}
                        className="px-3 py-1.5 text-xs text-white bg-black transition-colors hover:text-black rounded-md hover:bg-white border border-black"
                    ><span>Close</span></button>
                    <button
                        onClick={handleSubmit}
                        type="button"
                        className="px-3 py-1.5 text-xs text-white bg-black transition-colors hover:text-black rounded-md hover:bg-white border border-black"
                    ><span>Save</span></button>
                </div>
            </div>
            : 
            <motion.button onClick={() => setAdding(true)}
            className="flex w-full items-center gap-1.5 px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-black"
            >
                <span> Add Column </span>
            </motion.button>}
        </div>
    );
}
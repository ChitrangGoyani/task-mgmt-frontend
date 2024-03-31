import { useState } from "react";
import { DropIndicator } from "./DropIndicator";
import { motion } from "framer-motion";
import { AddCard } from "./AddCard";
export type CardType = {
    title: string; 
    id: string; 
    column: string;
}

type CardProps = CardType & {
    handleDragStart: Function;
}


export const Card = ({title, id, column, handleDragStart}: CardProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleEditCard = () => {
        setIsOpen(true);
    }
    
    return (
    <>
    <DropIndicator beforeId={id} column={column}/>
        {isOpen ? 
            <AddCard column={column} edit={true} textData={title} adding={true} setCards={() => {}}></AddCard> :
            <motion.div 
                onClick={handleEditCard}
                layout
                layoutId={id}
                draggable = "true"
                onDragStart={(e) => handleDragStart(e, {
                    title, id, column
                })}
                // onClick={() => {onClickExpand}}
                className="cusrsor-grab rounded border border-neutral-700 bg-black p-3 active:cursor-grabbing">
                    <p className="text-sm text-neutral-100">
                        {title}
                    </p>
            </motion.div>
        }
        
    </>
    );
}
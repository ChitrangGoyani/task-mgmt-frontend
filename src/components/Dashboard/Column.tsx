import { Dispatch, SetStateAction, useState } from "react"
import { Card, CardType } from "./Card"
import { DropIndicator } from "./DropIndicator"
import { AddCard } from "./AddCard"

type ColumnProps = {
    title: string,
    headingColor: string,
    column: string,
    cards: CardType[],
    setCards: Dispatch<SetStateAction<CardType[]>>
}

export const Column = ({title, headingColor, column, cards, setCards}: ColumnProps) => {
    const [active, setActive] = useState(false);
    const filteredCards = cards.filter(c => c.column === column); // filter cards by column names - change this to match ids instead

    const handleDragStart = (e: DragEvent, card: CardType) => {
        e.dataTransfer?.setData("cardId", card.id); // can store strings on the event datatransfer object
    };

    const handleDragEnd = (e: React.DragEvent) => {
        const cardId = e.dataTransfer.getData("cardId");
    
        setActive(false);
        clearHighlights();
    
        const indicators = getIndicators();
        const { element } = getNearestIndicator(e, indicators);
    
        const before = element.dataset.before || "-1";
    
        if (before !== cardId) {
          let copy = [...cards];
    
          let cardToTransfer = copy.find((c) => c.id === cardId);
          if (!cardToTransfer) return;
          cardToTransfer = { ...cardToTransfer, column };
    
          copy = copy.filter((c) => c.id !== cardId);
    
          const moveToBack = before === "-1";
    
          if (moveToBack) {
            copy.push(cardToTransfer);
          } else {
            const insertAtIndex = copy.findIndex((el) => el.id === before);
            if (insertAtIndex === undefined) return;
    
            copy.splice(insertAtIndex, 0, cardToTransfer);
          }
    
          setCards(copy);
        }
    };
    
      const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        highlightIndicator(e);
    
        setActive(true);
      };

      const clearHighlights = (els?: HTMLElement[]) => {
        const indicators = els || getIndicators();
    
        indicators.forEach((i) => {
          i.style.opacity = "0";
        });
      };
    
      const highlightIndicator = (e: React.DragEvent) => {
        const indicators = getIndicators();
    
        clearHighlights(indicators);
    
        const el = getNearestIndicator(e, indicators);
    
        el.element.style.opacity = "1";
      };
    
      const getNearestIndicator = (e: React.DragEvent, indicators: HTMLElement[]) => {
        const DISTANCE_OFFSET = 50;
    
        const el = indicators.reduce(
          (closest, child) => {
            const box = child.getBoundingClientRect();
    
            const offset = e.clientY - (box.top + DISTANCE_OFFSET);
    
            if (offset < 0 && offset > closest.offset) {
              return { offset: offset, element: child };
            } else {
              return closest;
            }
          },
          {
            offset: Number.NEGATIVE_INFINITY,
            element: indicators[indicators.length - 1],
          }
        );
    
        return el;
      };
    
      const getIndicators = () => {
        return Array.from(
          document.querySelectorAll(
            `[data-column="${column}"]`
          ) as unknown as HTMLElement[]
        );
      };

      const handleDragLeave = () => {
        clearHighlights();
        setActive(false);
      };

    return (
      <div className={`w-56 shrink-1 rounded-lg p-3 ${active ? "bg-slate-200" : "bg-slate-100" } shadow-md`}>
        <div className="mb-2 flex items-center justify-between">
            <h3 className={`font-medium ${headingColor} font-semibold`}>
                {title}
            </h3>
            <span className="rounded text-sm text-neutral-400">
                {filteredCards.length}
            </span>
        </div>
        <div 
        onDrop={handleDragEnd}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`h-full w-full transition-color`}>

            {filteredCards.map((c) => {
                return <Card key={c.id} {...c} handleDragStart={handleDragStart}/>
            })}
            <DropIndicator beforeId={"-1"} column={column}/>
            <AddCard column={column} edit={false} setCards={setCards}></AddCard>
        </div>
      </div>
    );
}
import { useState } from "react";
import { Column } from "./Column";
import { Delete } from "./Delete";
import { AddColumn } from "./AddColumn";

export const Board = () => {
    const DEFAULT_CARDS = [
        // BACKLOG
        { title: "Look into render bug in dashboard", id: "1", column: "backlog" },
        { title: "SOX compliance checklist", id: "2", column: "backlog" },
        { title: "[SPIKE] Migrate to Azure", id: "3", column: "backlog" },
        { title: "Document Notifications service", id: "4", column: "backlog" },
        // DOING
        {
          title: "Refactor context providers to use Zustand",
          id: "8",
          column: "inprogress",
        },
        { title: "Add logging to daily CRON", id: "9", column: "inprogress" },
    ];

    const DEFAULT_COLUMNS = [
        "backlog", "inprogress"
    ];
    const [cards, setCards] = useState(DEFAULT_CARDS);
    const [columns, setColumns] = useState(DEFAULT_COLUMNS);

    return (
        <div className="flex h-full w-full gap-3 overflow-scroll p-8">
            {columns.map((c) => {
                return <Column
                title={c.toUpperCase()}
                column={c}
                headingColor="text-emerald-500" 
                cards={cards} 
                setCards={setCards}>
                </Column>
            })}
            <AddColumn columns={columns} setColumns={setColumns}></AddColumn>
            <Delete setCards={setCards}></Delete>
        </div>
    );
}
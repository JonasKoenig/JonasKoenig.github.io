import { ReactElement } from "react";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import Square from "./ChessSquare";
import Piece from "./ChessPiece";
import Panel from "../Panel";
import { useUrlState } from "../../core/State";

const validateFen = (fen: string) => {
    let cleanFen = '';
    for (let i = 0; i < 64; i++) {
        const raw = fen[i];
        const clean = 'rnbqkp.RNBQKP'.includes(raw) ? raw : '.'
        cleanFen = `${cleanFen}${clean}`;
    }
    return cleanFen;
}

const Chess = (): ReactElement => {
    const [fen, setFen] = useUrlState('g', 'rnbqkbnrpppppppp................................PPPPPPPPRNBQKBNR');
    const cleanFen = validateFen(fen);

    const squares = [];
    for (let i = 0; i < 64; i++) {
        const isEvenFile = i % 2;
        const isEvenRank = Math.floor(i / 8) % 2 === 0;
        const color = isEvenFile === (isEvenRank ? 0 : 1)
        const piece = <Piece char={cleanFen[i]} index={i} />
        squares.push(<Square color={color} index={i} key={`chess-square-${i}`}>{piece}</Square>)
    }

    const handleDragEnd = (event: DragEndEvent) => {
        const { over, active } = event;
        if (!over) return;
        const [index, piece] = (active.id as string).split('-')
        const clearOldSquare = `${cleanFen.slice(0, Number(index))}.${cleanFen.slice(Number(index) + 1)}`
        const insertNewSquare = `${clearOldSquare.slice(0, Number(over.id))}${piece}${clearOldSquare.slice(Number(over.id) + 1)}`
        setFen(insertNewSquare);
    }

    return (
        <DndContext onDragEnd={handleDragEnd}>
            <Panel sx={{ padding: '8px' }}>
                <div className="board">
                    {squares}
                </div>
            </Panel>
        </DndContext>
    );
}
export default Chess;

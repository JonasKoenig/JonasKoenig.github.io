import { ReactElement, useState } from "react";
import { DndContext, DragEndEvent, DragStartEvent } from "@dnd-kit/core";
import Square from "./ChessSquare";
import Piece from "./ChessPiece";
import Panel from "../Panel";
import { useUrlState } from "../../core/State";
import { initialFen, isFriendlyFire, idToPiece, validateFen } from "./Validate";
import { pieceMask, squares } from "./Mask";

const Chess = (): ReactElement => {
    const [rawFen, setFen] = useUrlState('g', initialFen);
    const fen = validateFen(rawFen);
    const [mask, setMask] = useState<boolean[] | undefined>();

    const board = squares.map((i) => {
        const isEvenFile = i % 2;
        const isEvenRank = Math.floor(i / 8) % 2 === 0;
        const color = isEvenFile === (isEvenRank ? 0 : 1)
        const highlight = mask !== undefined && mask[i]
        const piece = <Piece char={fen[i]} index={i} />
        return <Square color={color} index={i} highlight={highlight} key={`chess-square-${i}`}>{piece}</Square>
    });

    const handleDragStart = (event: DragStartEvent) => {
        const { active } = event;
        const {index, piece} = idToPiece(active.id)
        setMask(pieceMask(fen, index, piece))
    }

    const handleDragEnd = (event: DragEndEvent) => {
        const { over, active } = event;
        setMask(undefined)
        if (!over) return;
        const target = Number(over.id)
        const {index, piece} = idToPiece(active.id)
        if (isFriendlyFire(piece, fen[target])) return;
        const clearOldSquare = `${fen.slice(0, index)}.${fen.slice(index + 1)}`
        const insertNewSquare = `${clearOldSquare.slice(0, target)}${piece}${clearOldSquare.slice(target + 1)}`
        setFen(insertNewSquare);
    }

    return (
        <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
            <Panel sx={{ padding: '8px', marginBottom: 0 }}>
                <div className="board">
                    {board}
                </div>
            </Panel>
        </DndContext>
    );
}
export default Chess;

import { useDraggable } from "@dnd-kit/core"
import { ReactElement } from "react"

const fenLookup = {
    r: 'rook',
    n: 'knight',
    b: 'bishop',
    q: 'queen',
    k: 'king',
    p: 'pawn',
}

type PieceProps = {
    char: string
    index: number
}

const Piece = ({ char, index }: PieceProps): ReactElement | undefined => {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: `${index}-${char}`,
    });
    const c = char.toLowerCase()
    if (!Object.keys(fenLookup).includes(c)) return undefined;
    const piece = fenLookup[c as keyof typeof fenLookup]
    const color = char === c ? 'black' : 'white'
    const style = {
        backgroundImage: `url('pieces/${color}_${piece}.svg')`,
        transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : 'none',
    };
    const sqGrounded = transform ? 'mid-air' : 'grounded'
    return <button ref={setNodeRef} {...listeners} {...attributes} style={style} className={`piece ${sqGrounded}`} />
}

export default Piece;
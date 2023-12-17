import { useDraggable } from "@dnd-kit/core"
import { ReactElement } from "react"
import { useUrlState } from "../../core/State"
import { initialFen } from "./Validate"
import { Grid } from "@mui/material"

const fenLookup = {
    r: 'rook',
    n: 'knight',
    b: 'bishop',
    q: 'queen',
    k: 'king',
    p: 'pawn',
} as const

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

    // promotion?
    const isBlackPromotion = char === 'p' && index >= (63 - 7)
    const isWhitePromotion = char === 'P' && index <= 7
    if (isBlackPromotion || isWhitePromotion) {
        return <PromotionOptions color={color} index={index} />
    }

    const style = {
        backgroundImage: `url('pieces/${color}_${piece}.svg')`,
        transform: transform ? `translate(${transform.x}px, ${transform.y}px)` : 'none',
    };
    return <button ref={setNodeRef} {...listeners} {...attributes} style={style} className="piece" />
}

type PromotionProps = {
    color: 'black' | 'white'
    index: number
}

const PromotionOptions = ({ color, index }: PromotionProps) => {
    const [fen, setFen] = useUrlState('g', initialFen)
    const replacePromotion = (char: string) => {
        const newFen = `${fen.slice(0, index)}${char}${fen.slice(index + 1)}`
        setFen(newFen)
    }
    const options: (keyof typeof fenLookup)[] = ['q', 'r', 'b', 'n']
    const optionButtons = options.map((c) => {
        const style = {
            backgroundImage: `url('pieces/${color}_${fenLookup[c]}.svg')`,
            cursor: 'pointer',
        };
        const newPiece = color === 'black' ? c : c.toUpperCase()
        return (
            <Grid item xs={6} display="flex" key={`chess-promotion-${index}-${newPiece}`}>
                <button onClick={() => replacePromotion(newPiece)} style={style} className="piece" />
            </Grid>
        )
    })
    return <Grid container>{...optionButtons}</Grid>
}

export default Piece;
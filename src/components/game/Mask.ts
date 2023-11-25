
import { bishop, knight, pawnBlack, pawnWhite, rook } from "./Directions";
import { indexToPosition, isFriendlyFire, positionToIndex } from "./Validate";

type Mask = (props: {fen: string, index: number, pos: Position, piece: string}) => boolean[]
export type Position = [number, number]

export const squares = [...Array(64).keys()]
const isOnBoard = (p: Position) => p.every((c) => c >= 0 && c <= 7)

const maskOr = (masks: boolean[][]) => squares.map((i) => masks.some((mask => mask[i])))

const maskFromMoves = (moves: Position[]) => {
    const mask = squares.map(() => false);
    moves.map((p) => positionToIndex(p)).forEach(i => { mask[i] = true });
    return mask
}

const march = (fen: string, piece: string, [posF, posR]: Position, [dirF, dirR]: Position, limit=1) => {
    const moves: Position[] = []
    let squareAvailable = true
    let step = 0
    while (squareAvailable) {
        step++;
        if (step > limit) break
        const [file, rank] = [posF + dirF * step, posR + dirR * step];
        if (!isOnBoard([file, rank])) break
        const occupant = fen[positionToIndex([file, rank])]
        if (isFriendlyFire(piece, occupant)) break
        moves.push([file, rank]);
        squareAvailable = occupant === '.'
    }
    return maskFromMoves(moves);
}

const pawnMask: Mask = ({fen, pos, piece}) => {
    const [forward, left, right] = piece === piece.toUpperCase() ? pawnWhite : pawnBlack
    return maskOr([
        march(fen, piece, pos, forward, pos[1] === 1 || pos[1] === 6 ? 2 : 1),
        march(fen, piece, pos, left, 1),
        march(fen, piece, pos, right, 1),
    ])
}
const knightMask: Mask = ({fen, pos, piece}) => maskOr(knight.map((dir) => march(fen, piece, pos, dir, 1)))
const bishopMask: Mask = ({fen, pos, piece}) => maskOr(bishop.map((dir) => march(fen, piece, pos, dir, 7)))
const rookMask: Mask = ({fen, pos, piece}) => maskOr(rook.map((dir) => march(fen, piece, pos, dir, 7)))
const queenMask: Mask = ({fen, pos, piece}) => maskOr([...bishop, ...rook].map((dir) => march(fen, piece, pos, dir, 7)))
const kingMask: Mask = ({fen, pos, piece}) => maskOr([...bishop, ...rook].map((dir) => march(fen, piece, pos, dir, 1)))

const switchMask: Mask = (props) => {
    switch (props.piece.toLowerCase()) {
        case 'p': return pawnMask(props)
        case 'n': return knightMask(props)
        case 'b': return bishopMask(props)
        case 'r': return rookMask(props)
        case 'q': return queenMask(props)
        case 'k': return kingMask(props)
        default: return squares.map(() => false)
    }
}

export const pieceMask = (fen: string, index: number, piece: string) => {
    const pos = indexToPosition(index);
    return switchMask({fen, index, pos, piece})
}

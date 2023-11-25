import { indexToPosition } from "./Validate";

const squares = [...Array(64).keys()]
const roughlyEquals = (a: number, b: number) => a === b - 1 || a === b || a === b + 1;

const pawnMask = (pawnIndex: number, isWhite: boolean) => {
    const [pawnFile, pawnRank] = indexToPosition(pawnIndex);
    const dir = isWhite ? -1 : 1
    const moves = [pawnIndex, pawnIndex + dir * 8]
    if ((isWhite && pawnRank === 6) || (!isWhite && pawnRank === 1)) moves.push(pawnIndex + dir * 16);
    if ((isWhite && pawnFile < 7) || (!isWhite && pawnFile > 0)) moves.push(pawnIndex + dir * 7);
    if ((isWhite && pawnFile > 0) || (!isWhite && pawnFile < 7)) moves.push(pawnIndex + dir * 9);
    return squares.map((i) => moves.includes(i));
}

const knightMask = (knightIndex: number) => {
    const [knightFile, knightRank] = indexToPosition(knightIndex);
    const moves = [
        [knightFile + 2, knightRank + 1],
        [knightFile + 2, knightRank - 1],
        [knightFile + 1, knightRank + 2],
        [knightFile + 1, knightRank - 2],
        [knightFile - 2, knightRank + 1],
        [knightFile - 2, knightRank - 1],
        [knightFile - 1, knightRank + 2],
        [knightFile - 1, knightRank - 2],
    ]
    return squares.map((i) => {
        const [file, rank] = indexToPosition(i)
        return moves.some(([f, r]) => f === file && r === rank);
    })
}

const bishopMask = (bishopIndex: number) => {
    const [bishopFile, bishopRank] = indexToPosition(bishopIndex);
    return squares.map((i) => {
        const [file, rank] = indexToPosition(i)
        return Math.abs(bishopFile - file) === Math.abs(bishopRank - rank)
    })
}

const rookMask = (rookIndex: number) => {
    const [rookFile, rookRank] = indexToPosition(rookIndex);
    return squares.map((i) => {
        const [file, rank] = indexToPosition(i)
        return rookFile === file || rookRank === rank
    })
}

const queenMask = (queenIndex: number) => {
    const rook = rookMask(queenIndex);
    const bishop = bishopMask(queenIndex);
    return rook.map((r, i) => r || bishop[i])
}

const kingMask = (kingIndex: number) => {
    const [kingFile, kingRank] = indexToPosition(kingIndex);
    return squares.map((i) => {
        const [file, rank] = indexToPosition(i)
        return roughlyEquals(kingFile, file) && roughlyEquals(kingRank, rank)
    })
}

const switchMask = (index: number, piece: string) => {
    switch (piece.toLowerCase()) {
        case 'p': return pawnMask(index, piece === piece.toUpperCase());
        case 'n': return knightMask(index);
        case 'b': return bishopMask(index);
        case 'r': return rookMask(index);
        case 'q': return queenMask(index);
        case 'k': return kingMask(index);
        default: return undefined
    }
} 
export const getMask = (index: number, piece: string) => {
    const mask = switchMask(index, piece)
    return mask ? mask.map((b) => b ? '.' : ' ').join(''): undefined
}

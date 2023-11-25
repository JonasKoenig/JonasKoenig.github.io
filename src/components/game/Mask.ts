import { indexToPosition } from "./Validate";

const rookMask = (rookIndex: number) => {
    const [rookFile, rookRank] = indexToPosition(rookIndex);
    return [...Array(64).keys()].map((i) => {
        const [file, rank] = indexToPosition(i)
        return rookFile === file || rookRank === rank
    })
}

const bishopMask = (bishopIndex: number) => {
    const [bishopFile, bishopRank] = indexToPosition(bishopIndex);
    return [...Array(64).keys()].map((i) => {
        const [file, rank] = indexToPosition(i)
        return Math.abs(bishopFile - file) === Math.abs(bishopRank - rank)
    })
}

const queenMask = (queenIndex: number) => {
    const rook = rookMask(queenIndex);
    const bishop = bishopMask(queenIndex);
    return rook.map((r, i) => r || bishop[i])
}

export const getMask = (index: number, piece: string) => {
    const stringify = (array: boolean[]) => array.map((b) => b ? '.' : ' ').join('')
    switch (piece.toLowerCase()) {
        case 'r':
            return stringify(rookMask(index));
        case 'b':
            return stringify(bishopMask(index));
        case 'q':
            return stringify(queenMask(index));
        default:
            return undefined
    }
} 
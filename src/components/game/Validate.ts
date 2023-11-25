import { UniqueIdentifier } from "@dnd-kit/core"

export const indexToPosition = (i: number) => [i % 8, (i - (i % 8)) / 8]
export const positionToIndex = ([file, rank]: number[]) => file + 8 * rank

export const initialFen = 'rnbqkbnrpppppppp................................PPPPPPPPRNBQKBNR'

export const idToPiece = (id: UniqueIdentifier) => {
    const [index, piece] = (id as string).split('-')
    return {index: Number(index), piece}
}

export const validateFen = (fen: string) => {
    let cleanFen = '';
    for (let i = 0; i < 64; i++) {
        const raw = fen[i];
        const clean = 'rnbqkp.RNBQKP'.includes(raw) ? raw : '.'
        cleanFen = `${cleanFen}${clean}`;
    }
    return cleanFen;
}

export const addRandomQueens = (fen: string) => {
    const emptySquares = fen.split('')
        .map((piece, index) => piece === '.' ? index : -1)
        .filter((index) => index !== -1)
    const i = emptySquares[Math.floor(Math.random()*emptySquares.length)]
    return `${fen.slice(0, i)}${i < 32 ? 'q' : 'Q'}${fen.slice(i + 1)}`
};

export const isFriendlyFire = (a: string, b: string) => {
    if (a === '.' || b === '.') return false;
    return (a === a.toUpperCase()) === (b === b.toUpperCase())
};
import { Position } from "./Mask";

const N = [0, -1];
const NW = [-1, -1];
const W= [-1, 0];
const SW = [-1, 1];
const S = [0, 1];
const SE = [1, 1];
const E = [1, 0];
const NE = [1, -1];

const NNW = [-1, -2];
const NWW = [-2, -1];
const SWW = [-2, 1];
const SSW = [-1, 2];
const SSE = [1, 2];
const SEE = [2, 1];
const NEE = [2, -1];
const NNE = [1, -2];

export const pawnWhite = [N, NE, NW] as Position[];
export const pawnBlack = [S, SW, SE] as Position[];
export const knight = [NNE, NEE, SEE, SSE, SSW, SWW, NWW, NNW] as Position[];
export const bishop = [NW, NE, SE, SW] as Position[];
export const rook = [N, E, S, W] as Position[];
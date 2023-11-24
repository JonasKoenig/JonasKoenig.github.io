import { useDroppable } from "@dnd-kit/core"
import { ReactElement } from "react"

type SquareProps = {
    color: boolean
    index: number
    children?: ReactElement | ReactElement[]
}

const Square = ({ color, index, children }: SquareProps): ReactElement => {
    const { isOver, setNodeRef } = useDroppable({ id: index });
    const sqColor = color ? "white" : "black";
    const sqHighlight = isOver ? 'highlight' : '';
    return (
        <div ref={setNodeRef} className={`square ${sqColor} ${sqHighlight}`}>
            {children}
        </div>
    );
}

export default Square;
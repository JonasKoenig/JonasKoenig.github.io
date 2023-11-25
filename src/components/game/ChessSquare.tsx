import { useDroppable } from "@dnd-kit/core"
import { ReactElement } from "react"

type SquareProps = {
    color: boolean
    highlight: boolean
    index: number
    children?: ReactElement | ReactElement[]
}

const Square = ({ color, highlight, index, children }: SquareProps): ReactElement => {
    const { isOver, setNodeRef } = useDroppable({ id: index });
    const sqColor = color ? "white" : "black";
    const sqHighlight = highlight ? 'highlight' : '';
    const sqMouseOver = isOver ? 'mouseOver' : '';
    return (
        <div ref={setNodeRef} className={`square ${sqColor} ${sqHighlight} ${sqMouseOver}`}>
            {children}
        </div>
    );
}

export default Square;
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCorrectSelections, setFound, setIsMouseDown, setSelected } from "../../../features/mouseSelectionSlice";

export function useMouseSelection() {
    const dispatch = useDispatch();
    const { wordleWords } = useSelector((state) => state.wordleWords);
    const mouseSelectionState = useSelector((state) => state.mouseSelection);

    const handleLetterMouseDown = (letter, rowIndex, columnIndex) => {
        dispatch(setIsMouseDown(true));
        dispatch(setSelected([{ letter, rowIndex, columnIndex }]));
    }

    const handleLetterMouseOver = (letter, rowIndex, columnIndex) => {
        if(mouseSelectionState.isMouseDown && !mouseSelectionState.selected.some(s => s.rowIndex === rowIndex && s.columnIndex === columnIndex)){
            const addSelected = [...mouseSelectionState.selected, { letter, rowIndex, columnIndex }]
            dispatch(setSelected(addSelected));
        }
    }

    const handleMouseUp = () => {
        dispatch(setIsMouseDown(false));
        const selectedWord = mouseSelectionState.selected.map(s => s.letter).join('');
        if(wordleWords.includes(selectedWord) && !mouseSelectionState.found.includes(selectedWord)) {
            const preFound = [...mouseSelectionState.found, selectedWord]
            dispatch(setFound(preFound))
            const preCorrectSelection = [...mouseSelectionState.correctSelections, ...mouseSelectionState.selected]
            dispatch(setCorrectSelections(preCorrectSelection))
        }
        dispatch(setSelected([]));
    }

    const setDefaultValues = () => {
        dispatch(setCorrectSelections([]));
        dispatch(setSelected([]));
        dispatch(setFound([]));
        dispatch(setIsMouseDown(false));
    }

    useEffect(() => {
     document.addEventListener('mouseup', handleMouseUp);
     return () => {
        document.removeEventListener('mouseup', handleMouseUp);
     }
    }, [handleMouseUp]);

    return {
        ...mouseSelectionState,
        handleLetterMouseDown,
        handleLetterMouseOver,
        setDefaultValues
    }
}

// export function useMouseSelection() {
//     const { wordleWords } = useSelector((state) => state.wordleWords)
    
//     const DEFAULT_VALUES = {
//         correctSelections: [],
//         selected:[],
//         found:[],
//         isMouseDown : false
//     }
    
//     const [correctSelections, setCorrectSelections] = useState(DEFAULT_VALUES.correctSelections)
//     const [selected, setSelected] = useState(DEFAULT_VALUES.selected)
//     const [found, setFound] = useState(DEFAULT_VALUES.found)
//     const [isMouseDown, setIsMouseDown] = useState(DEFAULT_VALUES.isMouseDown)

//     const handleLetterMouseDown = (letter, rowIndex, columnIndex) => {
//         setIsMouseDown(true)
//         setSelected([{ letter, rowIndex, columnIndex }])
//     }

//     const handleLetterMouseOver = (letter, rowIndex, columnIndex) => {
//         if(isMouseDown && !selected.some(s => s.rowIndex === rowIndex && s.columnIndex === columnIndex)){
//             setSelected(prevSelected => [...prevSelected, { letter, rowIndex, columnIndex }])
//         }
//     }

//     const handleMouseUp = () => {
//         setIsMouseDown(false)
//         const selectedWord = selected.map(s => s.letter).join('')
//         if(wordleWords.includes(selectedWord) && !found.includes(selectedWord)) {
//             setFound(prevFound => [...prevFound, selectedWord])
//             setCorrectSelections(prev => [...prev, ...selected])
//         }
//         setSelected([])
//     }

//     const setDefaultValues = () => {
//         setCorrectSelections(DEFAULT_VALUES.correctSelections)
//         setSelected(DEFAULT_VALUES.selected)
//         setFound(DEFAULT_VALUES.found)
//         setIsMouseDown(DEFAULT_VALUES.isMouseDown)
//     }

//     useEffect(() => {
//      document.addEventListener('mouseup', handleMouseUp)
//      return () => {
//         document.removeEventListener('mouseup', handleMouseUp)
//      }
//     })

//     return {
//         correctSelections,
//         selected, 
//         found, 
//         isMouseDown, 
//         handleLetterMouseDown,
//         handleLetterMouseOver,
//         setDefaultValues
//     }
// }
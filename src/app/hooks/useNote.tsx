
interface Iprops {
    setSelectedNote: Function;
    selectedNote: any;

}

export const useNote = ({ setSelectedNote, selectedNote }: Iprops) => {

    const handleAddPoint = (e: any) => {
        e.preventDefault()
        let lastPoints = selectedNote?.item.points
        const newPoint = {
            id: lastPoints.length,
            status: 0,
            paragraphs: ''
        }
        lastPoints.push(newPoint)
        setSelectedNote(
            {
                item: {
                    ...selectedNote?.item,
                    points: lastPoints
                }
            }
        )
    }

    const handleDeletePoint = (e: any) => {
        e.preventDefault()
        let lastPoints = selectedNote?.item.points
        lastPoints.pop()
        setSelectedNote(
            {
                item: {
                    ...selectedNote?.item,
                    points: lastPoints
                }
            }
        )
    }

    const handleChange = (e: any, id: number) => {
        let points = selectedNote?.item.points;
        points[id] = {
            ...points[id],
            paragraphs: e.target.value
        }
        setSelectedNote((
            {
                item: {
                    ...selectedNote?.item,
                    points
                }
            }
        ))
        console.log(selectedNote);
    }

    const handleChangeTexts = (e: any) => {
        setSelectedNote({
            item: {
                ...selectedNote.item,
                [e.currentTarget.name]: e.currentTarget.value
            }

        })
    }

    return {
        handleAddPoint,
        handleDeletePoint,
        handleChange,
        handleChangeTexts
    }
}

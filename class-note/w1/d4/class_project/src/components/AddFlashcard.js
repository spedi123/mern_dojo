import {useState} from 'react';

export const AddFlashcard = (props) => {
    const [category, setCategory] = useState('')
    const [front, setFront] = useState('')
    const [back, setBack] = useState('')

    const {addNewFlashcards} = props;

    const handleSubmit = (event) => {
        event.preventDefault();

        const newFlashcard = {
            category : category,
            flipped : false,
            front,
            back,
        }

        addNewFlashcards (newFlashcard)

        setCategory('');
        setFront('');
        setBack('');
    }
    return (
        <form onSubmit={(e) => {
            handleSubmit(e)
           
        }}>
            <h3>New Flashcard</h3>
            <div>
                <label>Category : </label>
                <input onChange={(e) => {setCategory(e.target.value)}} type="text" value={category}></input>
            </div>
            <div>
                <label>Front : </label>
                <input onChange={(e) => {setFront(e.target.value)}} type="text" value={front}></input>
            </div>
            <div>
                <label>Back : </label>
                <input onChange={(e) => {setBack(e.target.value)}} type="text" value={back}></input>
            </div>
            <button>Add</button>
        </form>
    )
  
}
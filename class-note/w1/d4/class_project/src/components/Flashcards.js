import {useState} from 'react';

import flashcardsData from '../data/flashcards.json'
import { AddFlashcard } from './AddFlashcard';

import { Flashcard } from './Flashcard'

export const Flashcards = (props) => {
    const [flashcards, setFlashcards] = useState(flashcardsData);


    const addNewFlashcards = (newFlashcard) => {
    const updatedFlashcards = [newFlashcard, ...flashcards];
    setFlashcards(updatedFlashcards);
    }

    const handleFlipCardClick = (event, selectedIdx) => {
        const updatedFlashcards = flashcards.map((card, i) => {
          if(selectedIdx === i) {
            return {
              ...card,
              flipped: !card.flipped,
            }
          }
          return card;
        })
        setFlashcards(updatedFlashcards);
      }

    const handleDelete = (e, delIdx) => {
        e.stopPropagation();
        const filteredFlashcards = flashcards.filter((card, i) => {
          return delIdx !== i;
        })
        setFlashcards(filteredFlashcards)
      }

    return (
        <div>
            <AddFlashcard 
                addNewFlashcards={addNewFlashcards}
            />
            <hr />

            <div className='flex-row flex-wrap'>
            {flashcards.map((card, i) => {
                    return (
                        <Flashcard 
                            key={i}
                            handleFlipCardClick={handleFlipCardClick} 
                            handleDelete={handleDelete}
                            idx={i}
                            card={card}
                        />
                    )
                })
            }
            </div>
        </div>)
}
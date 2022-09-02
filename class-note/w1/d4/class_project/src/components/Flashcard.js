import styles from "./Flashcard.module.css"

export const Flashcard = (props) => {
    const {card, handleFlipCardClick, handleDelete, idx} = props;
    const {category, back, front, flipped} = card;
    return (
        <section className={`${styles.card}`} onClick={(e) => {
            handleFlipCardClick(e, idx)
          }}>
            <h3>{category}</h3>
            {flipped ? <p>{back}</p> : <p>{front}</p>}
            <button onClick={(e) => {
              handleDelete(e, idx)
            }}>Delete</button>
          </section>  
    )
}
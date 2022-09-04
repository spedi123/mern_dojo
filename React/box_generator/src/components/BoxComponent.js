import {useState} from "react"

const BoxComponent = (props) => {
    const [boxColor, setBoxColor] = useState("")
    const [boxList, setBoxList] = useState([])
    const [boxSize, setBoxSize] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const newBox = {boxColor, boxSize};
      setBoxList([...boxList, newBox]);
      setBoxColor("")
      setBoxSize("");
    }
    return (
    <div>
        <form onSubmit={ handleSubmit }> 
            <div>
                <label>Color: </label>
                <input type="text" name="color" value={ boxColor } onChange={ (e) => setBoxColor(e.target.value) }/>
            </div>
            <div>
                <label>Size: </label>
                <input type="text" name="size" value={ boxSize } onChange={ (e) => setBoxSize(e.target.value) }/>
            </div>
            <button type="submit">Add</button>
        </form>
        <div>
        {boxList.map( (box, i) => {
            return (
            <div style={{display:'inline-block'}}>
                <div key={i} style={{backgroundColor:box.boxColor, height: box.boxSize +'px', width: box.boxSize +'px'}}></div>
            </div>
            )
        })}
        </div>
    </div>
    )
}

export default BoxComponent;
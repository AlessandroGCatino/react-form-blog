import { useState } from "react"
import { MdDeleteForever } from "react-icons/md";
export default function(){

    const [list, setList] = useState([]);
    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setList([...list, title]);
        setTitle('');
    }
    const deleteElement = (index) => {
        setList(list.filter((el, i) => i!== index))
    }

    return(
        <div>
            <h1>Create a new Article</h1>
            <div className="create">
                <form onSubmit={handleSubmit}>
                    <label>Insert title: </label>
                    <input type="text"
                    value={title}
                    onChange={ e => setTitle(e.target.value)}
                    />
                    <button type="submit"> Crea </button>
                </form>

            </div>
            <h2>Created Articles</h2>
            <div className="show">
                <ol>
                    {list.map((item, index) => 
                    <li key={index}>
                        {item}
                        <MdDeleteForever 
                        color="red"
                        onClick={() => deleteElement(index)}/>
                    </li>)}
                </ol>
            </div>
        </div>
    )
}
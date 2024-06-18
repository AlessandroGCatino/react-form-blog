import { useState } from "react"
export default function(){

    const [list, setList] = useState([]);
    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return(
        <div>
            <h1>Create a new Article</h1>
            <div className="create">
                <form onSubmit={handleSubmit}>
                    <label>Insert title: </label>
                    <input type="text"/>
                </form>

            </div>
            <h2>Created Articles</h2>
        </div>
    )
}
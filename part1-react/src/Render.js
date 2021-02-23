import { useState, useEffect } from 'react'

export const Render = () => {
    const [notes, setNotes] = useState([])
    const [newNote, setNewNote] = useState('')
    // const [showAll, setShowAll] = useState(true)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(json => {
            setNotes(json)
            setLoading(false)
        })
        .catch(e => {
            console.log(e)
        })
    },[])

    const handleChange = (e) => {
        setNewNote(e.target.value)

    }
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: newNote,
                body: newNote,
                userId: 1
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        .then((response) => response.json())
        .then((date) => setNotes([...notes, date]));
        
        // const noteToAddToState = {
        //     id: notes.length + 1,
        //     title: newNote,
        //     body: new Date().toISOString()
        // }
        // console.log(noteToAddToState)
        // setNotes([...notes, noteToAddToState])
        setNewNote('')
    }
    
    return(
        <ul>
            <h1>Notas</h1>
            { loading ? 'Caragando...' : '' }
            {notes.map(note => {
                return <li key={note.id}> 
                    <p>{note.title}</p> 
                    <small>{note.body}</small>
                </li>
            })}
            <form onSubmit={handleSubmit}>
                <input type='text' onChange={handleChange} value={newNote}/>
                <button>Crear nota</button>
            </form>
        </ul>
    )
}
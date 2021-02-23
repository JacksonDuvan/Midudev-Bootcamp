import { useState } from 'react'

const WarningNotUsed = () => {
    return <h1>Todavía no se ha usado el contador</h1>
}

const ListOfClicks = ({ clicks }) => {
    return <p>{clicks.join(', ')}</p>
}

export const ComplexState = () => {
    // const [left, setLeft] = useState(0)
    // const [right, setRight] = useState(0)

    const [counters, setCounters] = useState({
        left: 0,
        right: 0,
        mensaje: 'Mensaj ene le estado'
    })

    const [clicks, setClicks] = useState([])

    const handleClickLeft = () => {
        setCounters({
            ...counters,
            left: counters.left + 1,
        })
        setClicks(prevClicks => ([...prevClicks, 'L']))
    }
    const handleClickRight = () => {
        setCounters({
            ...counters,
            right: counters.right + 1,
        })
        setClicks(prevClicks => ([...prevClicks, 'R']))
    }

    return(
        <div>
            {counters.left}
            <button onClick={handleClickLeft}>
                left
            </button>
            <button onClick={handleClickRight}>
                right
            </button>
            {counters.right}
            <br/>
            <span>Clicks totales: {clicks.length}</span>
            <p>{counters.mensaje}</p>
            {
                clicks.length === 0 
                    ? <WarningNotUsed />
                    : <ListOfClicks clicks={clicks}/>
            }
        </div>
    )
}
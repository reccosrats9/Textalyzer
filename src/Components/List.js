import React from 'react'

export default (props) => {
    const { keys, analysis } = props
    let letters= keys.map((letter, i) => {
        return (
            <div className='letter' >
                <span className='title'>{letter}</span>
                <span className='count'>{letter ? ' : ' :null} {analysis[letter]}</span>
            </div>
        )
        
    })
    return (
        <div className='letterBox'>
            { letters }
        </div>
    )
}

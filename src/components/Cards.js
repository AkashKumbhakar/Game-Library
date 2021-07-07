import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return(
        <div className='cards'>
            <h1>Check out these Games</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem
                    src='images/tictactoeimg.jpg'
                    text='PLAY NOW'
                    label='Tic-Tac-Toe'
                    path='/Game'
                    />
                     <CardItem
                    src='images/snakeimg.png'
                    text='PLAY NOW'
                    label='Snake Game'
                    path='/Board'
                    />
                </ul>
                </div>
            </div>

        </div>
    )
}
export default Cards
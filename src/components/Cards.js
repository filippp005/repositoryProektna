import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
    return (
        <div className='cards'>
            <h1>ПАТУВАЊА</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img-10.jpg'
                            text='Јужноафриканска Република'
                            label='2299€'
                            path='/ponudi'
                        />
                        <CardItem
                            src='images/img-11.jpg'
                            text='Непал'
                            label='1999€'
                            path='/ponudi'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img-12.jpg'
                            text='Мексико'
                            label='2499€'
                            path='/ponudi'
                        />
                        <CardItem
                            src='images/img-16.jpg'
                            text='Јамајка'
                            label='2699€'
                            path='/ponudi'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({authService}) => {
    const [cards, setCards] = useState({
        '1':{
            id: '1',
            name: 'Eliie',
            company: 'Samsung',
            theme: 'dark',
            title: 'Software Engineer',
            email: 'ellie@gmail.com',
            message: 'go for it',
            fileName: 'ellie',
            fileURL: null
        },
        '2':{
            id: '2',
            name: 'Eliie2',
            company: 'Samsung',
            theme: 'colorful',
            title: 'Software Engineer',
            email: 'ellie@gmail.com',
            message: 'go for it',
            fileName: 'ellie',
            fileURL: 'ellie.png'
        },
        '3':{
            id: '3',
            name: 'Eliie3',
            company: 'Samsung',
            theme: 'light',
            title: 'Software Engineer',
            email: 'ellie@gmail.com',
            message: 'go for it',
            fileName: 'ellie',
            fileURL: null
        }
    });

    const history = useHistory();
    const onLogout = () => {
        authService.logout();
    };

    useEffect(()=>{
        authService.onAuthChange(user => {
            if(!user){
                history.push('/');
            }
        });
    });

    const createOrUpdateCard = card => {
        setCards(cards => {
            const updated = {...cards}; // setCards를 부를 때의 시점에서의 setCard상태 복사
            updated[card.id] = card;
            return updated;
        }); 
    };
    
    const deleteCard = card => {
        setCards(cards => {
            const updated = {...cards};
            delete updated[card.id];
            return updated
        }); 
    }

    return(
        <section className={styles.maker}>
            <Header onLogout={onLogout}/>
            <div className={styles.container}>
                <Editor 
                    cards={cards} 
                    addCard={createOrUpdateCard} 
                    updateCard={createOrUpdateCard} 
                    deleteCard={deleteCard}/>
                <Preview cards={cards}/>
            </div>
            <Footer />
        </section>
    )
}
    

export default Maker;
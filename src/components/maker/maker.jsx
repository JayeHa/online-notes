import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({FileInput, authService, cardRepository}) => {
    const historyState = useHistory().state;
    const [cards, setCards] = useState({});
    const [userId, setUserId] = useState(historyState && historyState.id);

    const history = useHistory();
    const onLogout = () => {
        authService.logout();
    };

    useEffect(()=>{
        authService.onAuthChange(user => {
            if(user){
               setUserId(user.uid);
               console.log(userId);
            } else {
                history.push('/');
            }
        });
    });



    return(
        <section className={styles.maker}>
            <Header onLogout={onLogout}/>
            <div className={styles.container}>
                <Editor 
                    FileInput={FileInput}
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
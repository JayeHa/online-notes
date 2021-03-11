import styles from './search_header.module.css'
import React, { useRef } from 'react';
import { memo } from 'react/cjs/react.development';

const SearchHeader = memo(
    ({onSearch}) => {
        const inputRef = useRef();
        const handleSearch = () => {
            const value = inputRef.current.value;
            onSearch(value);
        };
        
        const onClick = () => {
            handleSearch();
        };
        
        const onKeyPress = (event) => {
            if (event.key === 'Enter'){
                handleSearch();
            }
    
        }
        console.log('header!!!');
        return (
            <header className={styles.header}>
                <div className={styles.logo}>
                    <img className={styles.img} src="/images/logo.png" alt="logo"/>
                    <h1 className={styles.title}>Youtube</h1>
                </div>
                <input ref={inputRef} className={styles.input} type="text" placeholder="search..." onKeyPress={onKeyPress}/>
                <button className={styles.button} type="submit" onClick={onClick}><i className="fas fa-search"></i></button>
            </header>
        )
    }
);

export default SearchHeader;
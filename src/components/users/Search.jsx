import axios from 'axios';
import React, { useState, useEffect, useContext, useRef } from 'react';
import Users from './Users';
import { TextContext } from '../TextContext';
import { ThemeContext } from '../ThemeContext.js';

const Search = () => {
    const [text, setText] = useState('');
    const [users, setUsers] = useState([]);
    const { currentSearch, setCurrentSearch } = useContext(TextContext);
    const { theme, setTheme } = useContext(ThemeContext);
    const clearRef = useRef()
    useEffect(() => {
      if(currentSearch){
        searchUsers(currentSearch);
        clearRef.current.style.display="block"
      }

    }, [currentSearch]);
    const searchUsers = async (searchText) => {
        try {
            const response = await axios.get(`https://api.github.com/search/users?q=${searchText}`);
            setUsers(response.data.items);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const onSubmit = (e) => {
        e.preventDefault();
        if (text === '') {
            alert('Please enter something');
        } else {
            localStorage.setItem("currentSearch", JSON.stringify(text));
            searchUsers(text);
            setText('');
            clearRef.current.style.display="block"
        }
    };
    const onChange = (e) => setText(e.target.value);

    const clearUsers = () => {
        setUsers([]);
        setCurrentSearch("");
        localStorage.removeItem("currentSearch");
        clearRef.current.style.display="none"

    };
    return (
        <div>
            <form onSubmit={onSubmit} className="form">
                <input type="text" name="text" placeholder="Search User" value={text} onChange={onChange} />
                <input type="submit" value="Search" className={"btn btn-success btn-block"} />
            </form>
            <button className="btn btn-danger btn-block" style={{display:"none"}} onClick={clearUsers} ref={clearRef}>Clear</button>
            {users.length === 0 ?  "no user here": <Users users={users} />}
        </div>
    );
};

export default Search;
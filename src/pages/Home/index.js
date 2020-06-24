import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';

import './style.css';
import api from '../../services/api';

export default function Home(){
    const history = useHistory();
    const [posts, setPost] = useState([]);


    useEffect(() => {
        api.get('posts').then(response =>{
            setPost(response.data)
        })
    })
    async function handleComents(id){
        localStorage.setItem('postId',id)
        history.push('comentarios')
    }
    return (
        
        <div className="container">
        <h1>Prova Desenvolvimento Mobile e IOT</h1>
        <div className="content">
            <ul>
                {
                    posts.map(post => (
                        <div className="listPost">
                        <li key={post.id} onClick={() => handleComents(post.id)}>
                            <h1>{post.title}</h1>
                            <p>{ post.body}</p>
                        </li>
                        </div>
                    ))
                }
            </ul>
        </div>
    </div>
    )
}
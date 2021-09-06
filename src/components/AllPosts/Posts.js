import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import axiosApi from '../../axiosApi';
import withErrorHandler from '../../hoc/withErrorHandler';
import './Posts.css';

const Posts = () => {
    const [allPosts, setAllPosts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await axiosApi.get('posts.json');
            const allPosts = Object.keys(response.data).map(id => ({
                ...response.data[id],
                id,
            }))
            setAllPosts(allPosts);
        };

        fetchData().catch(console.error);
    }, []);


    return (
        <>
            {allPosts.map(post => (
                <Card style={{ margin: '5rem' }} className='mx-5' key={post.id} >
                    <Card.Header>Created on: {post.date}</Card.Header>
                    <Card.Body>
                        <Card.Title>{post.post.title}</Card.Title>
                        <NavLink to={'/post' + post.id}><Button variant="outline-secondary" className='mt-2 btn-p'>Read more &#xbb;</Button></NavLink>
                    </Card.Body>
                </Card>
            ))}
        </>
    )
}

export default withErrorHandler(Posts);
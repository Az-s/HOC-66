import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import axiosApi from '../../axiosApi';

const Post = ({ match , history}) => {

    const [editPost, setEditPost] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axiosApi.get('posts/' + match.params.id + '.json');
            setEditPost(response.data);
        };

        fetchData().catch(console.error);
    }, [match.params.id]);

    const deletePost = async () => {
        await axiosApi.delete('posts/' + match.params.id + '.json');
        history.replace('/');
    }
    
    return editPost && (
        <Card style={{ marginTop: '5rem' }} >
            <Card.Header>{editPost.date}</Card.Header>
            <Card.Body>
                <Card.Title>{editPost.post.title}</Card.Title>
                <Card.Text>
                    {editPost.post.description}
                </Card.Text>
                <Card.Body className='d-flex justify-content-between'>
                    {/* <NavLink to={'post/' + match.params.id + '/edit'}><Button variant="primary">Edit</Button></NavLink> */}
                    <Button variant="danger" onClick={deletePost}>&#10006;</Button>
                </Card.Body>
            </Card.Body>
        </Card >
    )
}

export default Post;
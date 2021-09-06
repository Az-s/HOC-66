import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/Navbar/NavBar';
import Posts from './components/AllPosts/Posts';
import Post from './components/Post/Post';
import AddPost from './components/AddPost/AddPost';
import Contacts from './components/Contacts/Contacts';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Container>
          <Route exact path='/' component={Posts} />
          <Route path='/post:id' component={Post} />
          <Route path='/add' component={AddPost} />
          <Route path='/contacts' component={Contacts} />
        </Container>
      </Router>
    </div>
  );
}

export default App;

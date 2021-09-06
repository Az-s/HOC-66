import React from 'react';
import { Card } from 'react-bootstrap';
import './Contacts.css';

const Contacts = () => {
    return (
        <>
            <Card className='pb-3 mt-5'>
                <div class="row">
                    <div class="col">
                        <Card.Header>Contacts</Card.Header>
                    </div>
                </div>
                <div class="container py-4">
                    <div class="row">
                        <div class="col">
                            <div class="card">
                                <div class="card-header bg-primary text-white"><i class="fa fa-envelope"></i> Contact us.</div>
                                <div class="card-body">
                                    <form>
                                        <div class="form-group">
                                            <label for="name">Name</label>
                                            <input type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter name" required></input>
                                        </div>
                                        <div class="form-group">
                                            <label for="email">Email address</label>
                                            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" required></input>
                                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                        </div>
                                        <div class="form-group">
                                            <label for="message">Message</label>
                                            <textarea class="form-control" id="message" rows="6" required></textarea>
                                        </div>
                                        <div class="mx-auto">
                                            <button type="submit" class="btn btn-primary text-right mt-2">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-4">
                            <div class="card bg-light mb-3">
                                <div class="card-header bg-success text-white text-uppercase"><i class="fa fa-home"></i> Address</div>
                                <div class="card-body">
                                    <p>3 Lorem ipsum</p>
                                    <p>720000 Bishkek</p>
                                    <p>KG</p>
                                    <p>Email : email@example.com</p>
                                    <p>Tel. +996 555 56 11 51 84</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </>
    )
}

export default Contacts;
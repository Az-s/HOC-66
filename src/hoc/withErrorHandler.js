import React, { useState, useMemo, useEffect } from 'react';
import axios from 'axios';
import { Modal } from 'react-bootstrap';

const withErrorHandler = WrappedComponent => {
    return function ErrorHandlerHOC(props) {

        const [error, setError] = useState(null);

        const icId = useMemo(() => {
            return axios.interceptors.response.use(
                null,
                error => {
                    setError(error);
                    throw error;
                }
            );
        }, []);

        useEffect(() => {
            return () => {
                axios.interceptors.response.eject(icId);
            }
        }, [icId])

        const dismiss = () => {
            setError(null);
        };

        return (
            <>
                <Modal show={Boolean(error)} onHide={dismiss}>
                    <Modal.Header closeButton>
                        <Modal.Title>Error</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{error && error.message}</Modal.Body>
                </Modal>
                <WrappedComponent {...props} />
            </>
        )
    };
};

export default withErrorHandler;
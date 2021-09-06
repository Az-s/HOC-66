import React, { useState, useMemo, useEffect } from 'react';
import axios from 'axios';
import { Modal } from 'react-bootstrap';
import Spinners from '../components/Spinners/Spinners';

const withErrorHandler = (WrappedComponent) => {
    return function ErrorHandlerHOC(props) {

        const [error, setError] = useState(null);
        const [loading, setLoading] = useState(false);

        const getReqSpinner = useMemo(() => {
            return axios.interceptors.request.use(
                req => {
                    setLoading(true);
                    return req;
                },
                error => {
                    setError(error);
                    setLoading(false);
                },
            );
        }, []);

        useEffect(() => {
            return () => {
                axios.interceptors.request.eject(getReqSpinner);
            }
        }, [getReqSpinner]);

        const icId = useMemo(() => {
            return axios.interceptors.response.use(
                res => {
                    setLoading(false);
                    return res;
                },
                error => {
                    setError(error);
                    setLoading(false);
                    throw error;
                }
            );
        }, []);

        //не понятно почему не отображается спиннер при interceptors.request,  если поменять false на true в setLoading(false) то спиннер появляется не знаю что не так в interceptors.request

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
                {loading && <Spinners />}
                <WrappedComponent {...props} />
            </>
        )
    };
};

export default withErrorHandler;
import React from 'react';
import ReactDOM from 'react-dom';

function Modal(props) {
    return ReactDOM.createPortal(
        <div
            id={props.modalId}
            className='modal fade'
            tabIndex={-1}
            data-bs-backdrop='static'
        >
            <div className='modal-dialog modal-dialog-centered modal-dialog-scrollable'>
                <div className='modal-content'>
                    {props.title !== undefined ? (
                        <div className='modal-header'>
                            <h5 className='modal-title'>{props.title.toUpperCase()}</h5>
                            <button
                                type='button'
                                className='btn-close'
                                data-bs-dismiss='modal'
                                aria-label='Close'
                            ></button>
                        </div>
                    ) : (
                        <></>
                    )}

                    {props.body !== undefined ? (
                        <div className='modal-body'>{props.body}</div>
                    ) : (
                        <></>
                    )}

                    {props.footer !== undefined ? (
                        <div className='modal-footer'>{props.footer}</div>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </div>,
        document.getElementById('modal-container')
    )
}

export default Modal

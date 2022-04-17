import React from 'react';
import classnames from 'classnames';
import DateRangePicker from 'react-bootstrap-daterangepicker';

function Elements(props) {
    function formElement(elementObj) {
        switch (elementObj.type) {
            case "email":
            case "password":
            case "date":
            case "text":
                return (
                    <div
                        key={elementObj.id}
                        className={
                            elementObj.className !== undefined
                                ? 'form-floating mb-3 ' + elementObj.className
                                : 'form-floating mb-3'
                        }
                    >
                        <input
                            type={elementObj.type}
                            id={elementObj.id}
                            name={elementObj.id}
                            placeholder={elementObj.placeholder}
                            value={elementObj.value}
                            form={elementObj.form !== undefined ? elementObj.form : null}
                            disabled={elementObj.disabled !== undefined ? elementObj.disabled : false}
                            required={elementObj.required !== undefined ? elementObj.required : false}
                            autoFocus={elementObj.autoFocus ? elementObj.autoFocus : null}
                            onChange={(e) => elementObj.onchange(e.target.value, elementObj.id)}
                            className={classnames('form-control', {
                                'form-control-sm': elementObj.size === 'sm',
                                'form-control-lg': elementObj.size === 'lg',
                            })}
                        />
                        {elementObj.label ? (
                            <label htmlFor={elementObj.id} className='ms-2'>
                                {elementObj.label}
                            </label>
                        ) : null}
                    </div>
                )
            case 'number':
                return (
                    <div
                        key={elementObj.id}
                        className={
                            elementObj.className !== undefined
                                ? 'form-floating mb-3 ' + elementObj.className
                                : 'form-floating'
                        }
                    >
                        <input
                            type={elementObj.type}
                            id={elementObj.id}
                            name={elementObj.id}
                            placeholder={elementObj.placeholder}
                            disabled={elementObj.disabled !== undefined ? elementObj.disabled : false}
                            value={elementObj.value}
                            onChange={(e) => elementObj.onchange(e.target.value, elementObj.id)}
                            autoFocus={elementObj.autoFocus ? elementObj.autoFocus : null}
                            min={elementObj.min !== undefined ? elementObj.min : null}
                            max={elementObj.max !== undefined ? elementObj.max : null}
                            required={elementObj.requiredFlag ? elementObj.requiredFlag : false}
                            form={elementObj.form !== undefined ? elementObj.form : null}
                            className={classnames('form-control', {
                                'form-control-sm': elementObj.size === 'sm',
                                'form-control-lg': elementObj.size === 'lg',
                            })}
                        />
                        {elementObj.label ? (
                            <label htmlFor={elementObj.id} className='ms-2'>
                                {elementObj.label}
                            </label>
                        ) : null}
                    </div>
                )
            case 'datepicker':
                return (
                    <div
                        key={elementObj.id}
                        className={
                            elementObj.className !== undefined
                                ? 'form-floating mb-3 ' + elementObj.className
                                : 'form-floating'
                        }
                    >
                        <DateRangePicker
                            initialSettings={{ startDate: '05/10/2022', endDate: '05/15/2022' }}
                        >
                            <input
                                id={elementObj.id}
                                name={elementObj.id}
                                type="text"
                                style={{ width: 'auto' }}
                                className={classnames('form-control py-0', {
                                    'form-control-sm': elementObj.size === 'sm',
                                    'form-control-lg': elementObj.size === 'lg',
                                })} />
                        </DateRangePicker>
                    </div>
                )
        }
    }

    return (
        <>
            {props.formField.map((field) => {
                let v = field.visible !== undefined ? field.visible : true
                if (v) return formElement(field)
            })}
        </>
    )
}

export default Elements;
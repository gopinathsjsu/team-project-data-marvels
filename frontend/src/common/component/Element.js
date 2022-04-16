import React from 'react';
import classnames from 'classnames';

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
                                ? 'form-group ' + elementObj.className
                                : 'form-group'
                        }
                    >
                        {elementObj.label ? (
                            <label htmlFor={elementObj.id} className='w-100 text-left'>
                                {elementObj.label}
                            </label>
                        ) : null}
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
                    </div>
                )
            case 'number':
                return (
                    <div
                        key={elementObj.id}
                        className={
                            elementObj.className !== undefined
                                ? 'form-group ' + elementObj.className
                                : 'form-group'
                        }
                    >
                        {elementObj.label ? (
                            <label htmlFor={elementObj.id} className='w-100 text-left'>
                                {elementObj.label}
                            </label>
                        ) : null}
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
import React from 'react';
import classnames from 'classnames';
import Select from 'react-select';

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
                            required={elementObj.requiredFlag !== undefined ? elementObj.requiredFlag : false}
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
                case 'react_select':
                    return (
                        <div
                            className={
                                elementObj.className !== undefined
                                    ? 'form-group w-100 ' + elementObj.className
                                    : 'form-group w-100'
                            }
                            key={elementObj.id}
                        >
                            {elementObj.label !== undefined ? (
                                <label className='w-100 text-left'>{elementObj.label}</label>
                            ) : null}
                            <Select
                                id={elementObj.id}
                                value={elementObj.value}
                                isSearchable={
                                    elementObj.isSearchable !== undefined ? elementObj.isSearchable : true
                                }
                                options={elementObj.options}
                                className='w-100'
                                isMulti={elementObj.isMulti !== undefined ? elementObj.isMulti : false}
                                onChange={(val) => elementObj.onchange(val, elementObj.id)}
                                getOptionLabel={
                                    elementObj.labelKey
                                        ? (option) => option[elementObj.labelKey]
                                        : (option) => option.label
                                }
                                getOptionValue={
                                    elementObj.valueKey
                                        ? (option) => option[elementObj.valueKey]
                                        : (option) => option.value
                                }
                                placeholder={
                                    elementObj.placeholder !== undefined ? elementObj.placeholder : ''
                                }
                                isDisabled={
                                    elementObj.disabled !== undefined ? elementObj.disabled : false
                                }
                                isLoading={elementObj.loading !== undefined ? elementObj.loading : false}
                                defaultValue={
                                    elementObj.defaultValue !== undefined ? elementObj.defaultValue : ''
                                }
                                styles={
                                    elementObj.styles
                                        ? {
                                                ...elementObj.styles,
                                                menuList: (provided, state) => ({
                                                    ...provided,
                                                    position: 'absolute',
                                                    background: 'white',
                                                    width: document.getElementById(elementObj.id).offsetWidth,
                                                }),
                                          }
                                        : {
                                                menuList: (provided, state) => ({
                                                    ...provided,
                                                    position: 'absolute',
                                                    background: 'white',
                                                    width: document.getElementById(elementObj.id).offsetWidth,
                                                }),
                                          }
                                }
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
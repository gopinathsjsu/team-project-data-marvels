import React from 'react';
import classnames from 'classnames';
import Select from 'react-select';

function Elements(props) {
    function formElement(element) {
        switch (element.type) {
            case "email":
            case "password":
            case "date":
            case "text":
                return (
                    <div
                        key={element.id}
                        className={
                            element.className !== undefined
                                ? 'form-floating mb-3 ' + element.className
                                : 'form-floating mb-3'
                        }
                    >
                        <input
                            type={element.type}
                            id={element.id}
                            name={element.id}
                            placeholder={element.placeholder}
                            value={element.value}
                            form={element.form !== undefined ? element.form : null}
                            disabled={element.disabled !== undefined ? element.disabled : false}
                            required={element.requiredFlag !== undefined ? element.requiredFlag : false}
                            autoFocus={element.autoFocus ? element.autoFocus : null}
                            onChange={(e) => element.onchange(e.target.value, element.id)}
                            className={classnames('form-control', {
                                'form-control-sm': element.size === 'sm',
                                'form-control-lg': element.size === 'lg',
                            })}
                        />
                        {element.label ? (
                            <label htmlFor={element.id} className='ms-2'>
                                {element.label}
                            </label>
                        ) : null}
                    </div>
                )
            case 'number':
                return (
                    <div
                        key={element.id}
                        className={
                            element.className !== undefined
                                ? 'form-floating mb-3 ' + element.className
                                : 'form-floating mb-3'
                        }
                    >
                        <input
                            type={element.type}
                            id={element.id}
                            name={element.id}
                            placeholder={element.placeholder}
                            disabled={element.disabled !== undefined ? element.disabled : false}
                            value={element.value}
                            onChange={(e) => element.onchange(e.target.value, element.id)}
                            autoFocus={element.autoFocus ? element.autoFocus : null}
                            min={element.min !== undefined ? element.min : null}
                            max={element.max !== undefined ? element.max : null}
                            required={element.requiredFlag ? element.requiredFlag : false}
                            form={element.form !== undefined ? element.form : null}
                            className={classnames('form-control', {
                                'form-control-sm': element.size === 'sm',
                                'form-control-lg': element.size === 'lg',
                            })}
                        />
                        {element.label ? (
                            <label htmlFor={element.id} className='ms-2'>
                                {element.label}
                            </label>
                        ) : null}
                    </div>
                )
            case 'react_select':
                return (
                    <div
                        className={
                            element.className !== undefined
                                ? 'form-group w-100 ' + element.className
                                : 'form-group w-100'
                        }
                        key={element.id}
                    >
                        {element.label !== undefined ? (
                            <label className='w-100 text-left'>{element.label}</label>
                        ) : null}
                        <Select
                            id={element.id}
                            value={element.value}
                            isSearchable={
                                element.isSearchable !== undefined ? element.isSearchable : true
                            }
                            options={element.options}
                            className='w-100'
                            isMulti={element.isMulti !== undefined ? element.isMulti : false}
                            onChange={(val) => element.onchange(val, element.id)}
                            getOptionLabel={
                                element.labelKey
                                    ? (option) => option[element.labelKey]
                                    : (option) => option.label
                            }
                            getOptionValue={
                                element.valueKey
                                    ? (option) => option[element.valueKey]
                                    : (option) => option.value
                            }
                            placeholder={
                                element.placeholder !== undefined ? element.placeholder : ''
                            }
                            isDisabled={
                                element.disabled !== undefined ? element.disabled : false
                            }
                            isLoading={element.loading !== undefined ? element.loading : false}
                            defaultValue={
                                element.defaultValue !== undefined ? element.defaultValue : ''
                            }
                            styles={
                                element.styles
                                    ? {
                                        ...element.styles,
                                        menuList: (provided, state) => ({
                                            ...provided,
                                            position: 'absolute',
                                            background: 'white',
                                            width: document.getElementById(element.id).offsetWidth,
                                        }),
                                    }
                                    : {
                                        menuList: (provided, state) => ({
                                            ...provided,
                                            position: 'absolute',
                                            background: 'white',
                                            width: document.getElementById(element.id).offsetWidth,
                                        }),
                                    }
                            }
                        />
                    </div>
                )
            case 'checkbox':
                return (
                    <div
                        key={element.id}
                        className={
                            element.className === undefined
                                ? 'custom-control custom-checkbox'
                                : 'custom-control custom-checkbox ' + element.className
                        }
                    >
                        <input
                            type={element.type}
                            id={element.id}
                            name={element.id}
                            disabled={element.disabled ? element.disabled : false}
                            required={element.requiredFlag ? element.requiredFlag : false}
                            defaultChecked={element.value}
                            checked={element.value}
                            onChange={(e) => { element.onchange(!element.value, element.id) }}
                            form={element.form ? element.form : null}
                            className={
                                element.size !== undefined
                                    ? 'custom-control-input ' + element.size
                                    : 'custom-control-input'
                            }
                        />
                        {element.label !== undefined ? (
                            <label className='custom-control-label' htmlFor={element.id}>
                                {element.label}
                            </label>
                        ) : null}
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
import React from 'react';
import { Grid, TextField } from '@mui/material/';

function Elements(props) {
    function formElement(elementObj) {
        switch (elementObj.type) {
            case "email":
            case "password":
            // case "date":
            case "text":
                return (
                    <Grid item xs={12}>
                        <TextField
                            autoComplete="given-name"
                            name={elementObj.id}
                            required={elementObj.required === null ? false : elementObj.required}
                            fullWidth={elementObj.fullWidth === null ? false : elementObj.fullWidth}
                            id={elementObj.id}
                            label={elementObj.label}
                            autoFocus={elementObj.autoFocus === null ? false : elementObj.autoFocus}
                            value={elementObj.value}
                            onChange={(e) => elementObj.onchange(e.target.value, elementObj.id)}
                            type={elementObj.type}
                        />
                    </Grid>
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
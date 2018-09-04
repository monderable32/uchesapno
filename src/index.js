import React, { Component } from 'react'
import {form, FormGroup, FormControl } from 'react-bootstrap'

export default class ucHesapNo extends Component
{
    render() {
        return ( 
            <form>
            <FieldGroup
              id="formControlsText"
              type="text"
              placeholder="Müşteri Numarası"
            />
            </form>
        );
    }
}

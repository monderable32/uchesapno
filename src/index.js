import React, { Component } from 'react'
import { form, FormGroup, FormControl, InputGroup, Button } from 'react-bootstrap'
//import ReactDOM from 'react-dom'
export default class UcHesapNo extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            value: ''
        };
    }

    handleChange(e) {
        //this.setState({ value: e.target.value });
    }
    render() {
        return (
            <form>
                <FormGroup>
                    <InputGroup>
                        <FormControl
                            type="text"
                            value={this.state.value}
                            placeholder="Enter text"
                            onChange={this.handleChange}
                        />
                        <InputGroup.Button>
                            <Button>Search</Button>
                        </InputGroup.Button></InputGroup>
                </FormGroup>
            </form>
        );
    }
}
/*
ReactDOM.render(
    <UcHesapNo/>,
    document.getElementById('root')
);*/
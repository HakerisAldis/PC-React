import React from "react";
import { Redirect } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class NewRecordForm extends React.Component {

    mounted = true;

    state = {
        userId: null,
        title: null,
        text: null,
        redirect: null,
        user: null
    }

    componentWillUnmount() {
        this.mounter = false;
    }

    handleChangeId = (e) => this.setState({ userId: e.target.value })
    handleChangeTitle = (e) => this.setState({ title: e.target.value })
    handleChangeText = (e) => this.setState({ body: e.target.value })

    async sendData() {
        if(this.mounted){
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: this.state.title,
                body: this.state.body,
                userId: this.state.userId,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
            const data = await response.json();
            this.setState({user: data});
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            redirect: "/detailspage",
        })
    }

    render() {

        if (this.state.redirect != null) {
            this.sendData();
            if(this.state.user != null){
                return <Redirect to={{pathname: this.state.redirect, state: this.state.user}} />
            }
        }

        const { value } = this.state;

        return (
            <form id="form" onSubmit={this.handleSubmit}>
                <div>
                    <div id="input">
                        <h3>Naujo įrašo pridėjimas</h3>
                    </div>
                    <div id="input">
                        <Form.Control type="number" value={value} onChange={this.handleChangeId} placeholder="Įveskite naudotojo ID" required/>
                    </div>
                    <div id="input">
                        <Form.Control type="text" value={value} onChange={this.handleChangeTitle} placeholder="Įveskite pavadinimą" required/>
                    </div>
                    <div id="input">
                        <Form.Control as="textarea" type="text" value={value} onChange={this.handleChangeText} placeholder="Įveskite tekstą" required/>
                    </div>
                    <div>
                        <Button variant="secondary" type="submit">
                            Pridėti
                        </Button>
                    </div>
                </div>
            </form>
        )
    }
}

export default NewRecordForm;

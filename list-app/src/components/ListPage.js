import React from "react";
import Table from 'react-bootstrap/Table';
import { Redirect } from "react-router-dom";

class ListPage extends React.Component {
    
    mounted = true;

    state = {
        loading: true,
        users: null,
        redirect: null,
        user: null
    }

    async componentDidMount() {
        if (this.mounted) {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json();
            this.setState({
                users: data,
                loading: false
            });
        }
    }

    componentWillUnmount() {
        this.mounter = false;
    }

    render() {

        if (this.state.redirect != null) {
            return <Redirect to={{pathname: this.state.redirect, state: this.state.user}} />
        }

        if (this.state.loading){
            return <div>Kraunasi...</div>;
        }

        if (!this.state.users){
            return <div>User is null</div>;
        }

        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">userId</th>
                        <th scope="col">Title</th>
                        <th scope="col">Body</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.users && this.state.users.map(row => {
                        return (
                            <tr key={row.id} onClick={() => this.setState({redirect: "/detailspage", user: row})}>
                                <td>{row.id}</td>
                                <td>{row.userId}</td>
                                <td>{row.title}</td>
                                <td>{row.body}</td>
                            </tr>
                        );
                    })}  
                </tbody>
            </Table>
        )
    }
}

export default ListPage;

import React from "react";
import { withRouter } from 'react-router-dom';
import Table from 'react-bootstrap/Table';

class DetailsPage extends React.Component {

    state = {
        id: this.props.location.state.id,
        userId: this.props.location.state.userId,
        title: this.props.location.state.title,
        body: this.props.location.state.body
    }

    render() {
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
                    <tr key={this.state.id}>
                        <td>{this.state.id}</td>
                        <td>{this.state.userId}</td>
                        <td>{this.state.title}</td>
                        <td>{this.state.body}</td>
                    </tr> 
                </tbody>
            </Table>
        )
    }

}

export default withRouter(DetailsPage);

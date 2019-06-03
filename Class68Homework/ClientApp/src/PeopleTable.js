import React from 'react';

export default class PeopleTableData extends React.Component {

    deletePerson = () => {
        this.clear;
    }

    render() {
        return (
            <tbody>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>Actions</th>
                </tr>
                {this.props.people.map((person, idx) =>
                    <tr key={idx}>
                        <td>
                            {person.firstName}
                        </td>
                        <td>
                            {person.lastName}
                        </td>
                        <td>
                            {person.age}
                        </td>
                        <td>
                            <button className="btn btn-danger" deletePerson={this.deletePerson}>Delete</button>
                        </td>
                    </tr>
                )}
            </tbody>
        )
    }
}

import React from 'react';

export default function HeaderTile() {

    return (<div className="tile is-vertical is-8">
        <div className="tile">
            <div className="tile is-parent is-vertical">
                <article className="tile is-child notification is-primary">
                    <p className="title">Employee Management</p><br />
                    <p className="subtitle">Manages the data of employees</p><br />
                </article>
                <article className="tile is-child notification is-warning">
                    <p className="title">User Management</p><br />
                    <p className="subtitle">Manages the data of Users</p><br />
                </article>
            </div>
        </div>
    </div>);
}
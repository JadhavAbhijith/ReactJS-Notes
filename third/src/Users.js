import React, {useState, useEffect} from "react";

function Users()
{
    const[users, setUsers]=useState([]);


    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => setUsers(data));
    }, []);       //Rums Only Once


    return(
        <div>
            <h3>User List: </h3>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Users;
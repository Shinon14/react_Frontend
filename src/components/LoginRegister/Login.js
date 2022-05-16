import React, { useEffect, useState } from "react";
import * as LoginServer from './LoginServer';

// componentes:
import LoginItem from "./LogItem";

// 

const CompanyList = () => {
    
    const [users, setUsers] = React.useState([]);

    const listUsuarios = async() => {
        try {
            const res = await LoginServer.listUsuarios();
            const data = await res.json();
            setUsers(data.user);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        listUsuarios();
    }, []);

    return (
        <div className="row">
            {users.map((user) => (
                <LoginItem key={user.id} nombre={user} listUsuarios={listUsuarios}/>
            ))}
        </div>
    )
};
export default CompanyList;
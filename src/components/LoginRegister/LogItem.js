import React from 'react';
// import {useHistory} from 'react-router-dom'

import * as LoginServer from './LoginServer';

const UserItem = ({user, listUsers}) => {
    // console.log(props)
    // console.log(company)

    // const history = useHistory();
    
    const handleDelete = async(userId) => {
        // console.log(companyId);
        await LoginServer.borrarUsuario(userId);
        listUsers();
    };

    return (
        <div className="col-md-4 mb-4">
            <div className="card card-body">
                <h3 className="card-title">
                    {user.name}
                </h3>
                <p className="card-text">Founded: <strong>{user.email}</strong></p>

                {/* <button onClick={() => company.id && handleDelete(company.id)} className='btn btn-danger my-2'>Delete company</button>
                <button className=' btn btn-secondary' onClick={()=>history.push(`/updateCompany/${company.id}`)}>Editar</button> */}
            </div>
        </div>
    )
};

export default UserItem;
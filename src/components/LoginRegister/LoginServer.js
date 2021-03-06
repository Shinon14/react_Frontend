const API_URL = "http://127.0.0.1:8000/api/feed/"; 
//esto hay que cambiarlo


export const listUsuarios = async () => {
    return await fetch(API_URL);  
};

export const getUsuario = async (userId) => {
    return await fetch(`${API_URL}${userId}`);
};


export const registrarUsuario = async (newUser) => {
  
    return await fetch(API_URL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "email": String(newUser.user).trim(),
            "name": parseInt(newUser.password),
            // esto hay que comprobarlo con la bd por que aun no se crea la tabla
        })
    })
};

export const borrarUsuario = async (userId) => {
  
    return await fetch(`${API_URL}${userId}`, {
        method: "DELETE"
    })
};

export const actualizarUsuario = async (usuarioId, usuarioActualizado) => {
  
    return await fetch(`${API_URL}${usuarioId}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "email": String(usuarioActualizado.email).trim(),
            "name": parseInt(usuarioActualizado.name),
            "password": String(usuarioActualizado.password).trim(),
            // esto hay que comprobarlo con la bd por que aun no se crea la tabla
        })
    })
};
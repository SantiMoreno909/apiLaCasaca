const getProducts = async ()=> {
    try {
        const data = await fetch('http://localhost:8002/api/productos');
        const result = await data.json();
        return result;
        
    } catch (error) {
        console.error('Error al obtener los géneros:', error);
        throw error; 
    }
}

export {getProducts} ;
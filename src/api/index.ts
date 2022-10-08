let token = '54e2aea1c0b0bff4a4f85cb3aa2426d2e5615938c2426145'

export const server_calls = {
    get: async () => {
        const response = await fetch('https://my-car-inventory-ct-justin.herokuapp.com/api/cars', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error("Failed to fetch data from the server!")
        }

        return await response.json();
    },

    create: async (data: any = {}) => {
        const response = await fetch('https://my-car-inventory-ct-justin.herokuapp.com/api/cars', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok){
            throw new Error("Failed to create new data on the server!")
        }

        return await response.json();
    },

    update: async (id: string, data: any = {}) => {
        const response = await fetch(`https://my-car-inventory-ct-justin.herokuapp.com/api/cars/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
    },

    delete: async(id:string) => {
        const response = await fetch(`https://my-car-inventory-ct-justin.herokuapp.com/api/cars/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
        });
    }
}

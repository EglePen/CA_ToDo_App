const dataApi = 'https://pewter-mint-spring.glitch.me';

export const fetchData = async () => {
    try {
        const response = await fetch(dataApi);
        if (response.ok) {
            // console.log(response)
            return await response.json();
        }
    } catch (error) {
        console.error(error);
    }
}

export const postData = async (data) => {
    try {
        const response = await fetch(dataApi + "/data", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                Accept: "application/json",
                'Content-Type': 'application/json',
            }
        });
        if (response.ok) {
            return await response.json()
        }
    } catch (error) {
        console.log(error)
    }
}

export const deleteData = async (id) => {
    try {
        const response = await fetch(dataApi + "/data/"+id, {
            method: "DELETE",
        });
        if (response.ok) {
            return await response.json()
        }
    } catch (error) {
        console.log(error)
    }
}

export const updateData = async (data) => {
    try {
        const response = await fetch(dataApi + "/data/"+data.id, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                Accept: "application/json",
                'Content-Type': 'application/json',
            }
        });
        if (response.ok) {
            return await response.json()
        }
    } catch (error) {
        console.log(error)
    }
}


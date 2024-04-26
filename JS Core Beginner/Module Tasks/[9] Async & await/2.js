async function fetchDataFromServer1(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Ошибка загрузки данных: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Произошла ошибка при загрузке данных с сервера 1:", error);
        throw error;
    }
}

async function fetchDataFromServer2(url, data) {
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            throw new Error(`Ошибка загрузки данных: ${response.statusText}`);
        }
        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.error("Произошла ошибка при загрузке данных с сервера 2:", error);
        throw error;
    }
}

async function fetchSequentially() {
    try {
        const dataFromServer1 = await fetchDataFromServer1("https://jsonplaceholder.typicode.com/posts/1");
        console.log("Данные с сервера 1:", dataFromServer1);

        const dataForServer2 = {
            userId: dataFromServer1.userId,
            id: dataFromServer1.id
        };
        const dataFromServer2 = await fetchDataFromServer2("https://jsonplaceholder.typicode.com/posts", dataForServer2);
        console.log("Данные с сервера 2:", dataFromServer2);
    } catch (error) {
        console.error("Произошла ошибка:", error);
    }
}

fetchSequentially();

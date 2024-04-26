async function fetchDataFromServer(url) {
    try {
        const response = await fetch(url); 
        if (!response.ok) {
            throw new Error(`Ошибка загрузки данных: ${response.statusText}`);
        }
        const data = await response.json(); 
        return data;
    } catch (error) {
        console.error("Произошла ошибка при загрузке данных:", error);
        throw error; 
    }
}

const apiUrl = "https://jsonplaceholder.typicode.com/posts/1";
fetchDataFromServer(apiUrl)
    .then(data => {
        console.log("Полученные данные:", data);
    })
    .catch(error => {
        console.error("Ошибка загрузки данных:", error);
    });

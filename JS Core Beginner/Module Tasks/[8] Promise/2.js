function fetchContentsFromURLs(urls) {
    const promises = urls.map(url => {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Ошибка при загрузке данных: ${response.statusText}`);
                    }
                    return response.text(); 
                })
                .then(content => {
                    resolve(content); 
                })
                .catch(error => {
                    console.error("Произошла ошибка при загрузке данных:", error);
                    reject(error); 
                });
        });
    });

    return Promise.all(promises);
}

const urls = [
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/posts/2",
    "https://jsonplaceholder.typicode.com/posts/3"
];

fetchContentsFromURLs(urls)
    .then(contents => {
        console.log("Содержимое загруженных URL-адресов:", contents);
    })
    .catch(error => {
        console.error("Произошла ошибка при загрузке данных:", error);
    });

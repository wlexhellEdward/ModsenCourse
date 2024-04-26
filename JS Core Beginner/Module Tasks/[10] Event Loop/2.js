async function fetchDataWithTimeout(url, timeout) {
    let controller = new AbortController();
    let signal = controller.signal;

    let timeoutPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            controller.abort();
            reject(new Error('Время ожидания превышено'));
        }, timeout);
    });

    try {
        const response = await fetch(url, { signal });

        return await Promise.race([response.json(), timeoutPromise]);
    } catch (error) {
        console.error('Ошибка при запросе:', error.message);
        throw error;
    }
}

const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';
const timeout = 3000; 

fetchDataWithTimeout(apiUrl, timeout)
    .then(data => {
        console.log('Данные из API:', data);
    })
    .catch(error => {
        console.error('Произошла ошибка:', error.message);
    });

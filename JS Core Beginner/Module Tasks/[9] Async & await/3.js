async function fetchDataFromMultipleServers(urls) {
  try {
    const promises = urls.map((url) => fetch(url));

    const responses = await Promise.all(promises);

    const data = await Promise.all(
      responses.map((response) => response.json())
    );

    return data;
  } catch (error) {
    console.error("Произошла ошибка:", error);
    throw error;
  }
}

const urls = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
  "https://jsonplaceholder.typicode.com/posts/3",
];

fetchDataFromMultipleServers(urls)
  .then((results) => {
    console.log("Результаты загрузки данных:", results);
  })
  .catch((error) => {
    console.error("Произошла ошибка:", error);
  });

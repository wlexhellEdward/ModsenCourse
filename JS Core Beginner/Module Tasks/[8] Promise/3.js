function fetchDataFromMultipleAPIs(urls) {
  const promises = [];
  for (let url of urls) {
    const promise = fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Ошибка при загрузке данных: ${response.statusText}`);
        }
        return response.json();
      })
      .catch((error) => {
        console.error("Произошла ошибка при загрузке данных:", error);
        throw error;
      });

    promises.push(promise);
  }
  return Promise.all(promises);
}

const urls = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
  "https://jsonplaceholder.typicode.com/posts/3",
];

fetchDataFromMultipleAPIs(urls)
  .then((results) => {
    console.log("Объединенный результат:", results);
  })
  .catch((error) => {
    console.error("Произошла ошибка:", error);
  });

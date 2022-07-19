export const url = "https://api.spaceflightnewsapi.net/v3/articles";

export const getPost = (id: any, cb: any) =>
  fetch(`${url}/${id}`)
    .then((response) => response.json())
    .then((result) => {
      if (typeof cb === "function") {
        cb(result);
      }
    })
    .catch(console.error);

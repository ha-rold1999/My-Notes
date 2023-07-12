import { API_URL } from "../../../environment";

export function Get(notesURL, setNotes){
  fetch(`${API_URL}/api/${notesURL}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      setNotes(res);
    });
}

export function Put(url, data, input) {
  let res = 200;
  fetch(`http://localhost:5019/api/${url}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      Id: data.id,
      Title: input.title,
      Description: input.description,
      items: input.items,
      url: input.thumbnail,
    }),
  })
    .catch((res) => {
      console.log(JSON.stringify(res, null, 2));
      res = 400;
    });
  return res;
}

export function Post(url, input) {
  let result = 200;
  fetch(`http://localhost:5019/api/${url}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      Title: input.title,
      Description: input.description,
      items: input.items,
      url: input.thumbnail,
    }),
  })
    .catch((res) => {
      console.log(JSON.stringify(res, null, 2));
      res = 400;
    });

  return result;
}

export function Delete(url, id) {
  let result = 200;
  fetch(`http://localhost:5019/api/${url}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .catch((res) => {
    console.log(JSON.stringify(res, null, 2));
    result = 400;
  });
  return result;
}
export function Put(data, input) {
  let res = 200;
  fetch("http://localhost:9000/api/Notes/UpdateNote", {
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
    .then((res) => res.json())
    .then((res) => {
      console.log("PUT: " + JSON.stringify(res, null, 2));
    })
    .catch((res) => {
      console.log(JSON.stringify(res, null, 2));
      res = 400;
    });
  return res;
}

export function PutCode(data, input) {
  let res = 200;
  fetch("http://localhost:9000/api/Codes/UpdateCode", {
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
    .then((res) => res.json())
    .then((res) => {
      console.log("PUT: " + JSON.stringify(res, null, 2));
    })
    .catch((res) => {
      console.log(JSON.stringify(res, null, 2));
      res = 400;
    });
  return res;
}

export function Post(input) {
  let result = 200;
  fetch("http://localhost:9000/api/Notes/AddNote", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      Title: input.title,
      Description: input.description,
      items: input.items,
      url: input.thumbnail,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log("POST: " + JSON.stringify(res, null, 2));
    })
    .catch((res) => {
      console.log(JSON.stringify(res, null, 2));
      res = 400;
    });

  return result;
}

export function PostCode(input) {
  let result = 200;
  fetch("http://localhost:9000/api/Codes/AddCode", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      Title: input.title,
      Description: input.description,
      items: input.items,
      url: input.thumbnail,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log("POST: " + JSON.stringify(res, null, 2));
    })
    .catch((res) => {
      console.log(JSON.stringify(res, null, 2));
      res = 400;
    });

  return result;
}

export function Delete(id) {
  let result = 200;
  fetch(`http://localhost:9000/api/Notes/DeleteNote/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).catch((res) => {
    console.log(JSON.stringify(res, null, 2));
    result = 400;
  });
  return result;
}

export function DeleteCode(id) {
  let result = 200;
  fetch(`http://localhost:9000/api/Codes/DeleteCode/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).catch((res) => {
    console.log(JSON.stringify(res, null, 2));
    result = 400;
  });
  return result;
}

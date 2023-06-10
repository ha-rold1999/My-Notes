export function Put(data, input) {
  let res = 200;
  fetch("http://localhost:5019/api/Notes/UpdateNote", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      Id: data.id,
      Title: input.title,
      Description: input.description,
      steps: input.step,
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
  fetch("http://localhost:5019/api/Notes/AddNote", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      Title: input.title,
      Description: input.description,
      steps: input.step,
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

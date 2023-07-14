import { API_URL } from "../../../environment";

export function Get(notesURL, setNotes) {
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

export async function Put(url, data, input) {
  try {
    let response = await fetch(`http://localhost:5019/api/${url}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        Id: data.id,
        Title: input.title,
        Description: input.description,
        items: input.items,
        url: input.thumbnail,
      }),
    });

    if (!response.ok) {
      throw new Error("Request failed with status " + response.status);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function Post(url, input) {
  try {
    const response = await fetch(`http://localhost:5019/api/${url}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        Title: input.title,
        Description: input.description,
        items: input.items,
        url: input.thumbnail,
      }),
    });

    if (!response.ok) {
      throw new Error("Request failed with status " + response.status);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return null; // or throw an error, depending on your needs
  }
}

export async function Delete(url, id) {
  try {
    let result = await fetch(`http://localhost:5019/api/${url}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!result.ok) {
      throw new Error("Request failed with status " + response.status);
    }
    const data = await result.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

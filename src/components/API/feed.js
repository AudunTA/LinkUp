import { baseURL } from "./baseURL";
import { addToFeed } from "../../store/feedSlice";
export async function getFeed(dispatch, token) {
  const endpoint = "/posts";
  const options = {
    headers: {
      "content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const responese = await fetch(baseURL + endpoint, options);
    const json = await responese.json();
    console.log(json);
    dispatch(addToFeed(json));
  } catch (e) {
    console.log(e);
  }
}

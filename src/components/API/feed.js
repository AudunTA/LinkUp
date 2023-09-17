import { baseURL } from "./baseURL";
export async function getFeed(dispatch) {
  const endpoint = "/posts";
  try {
    const responese = await fetch(baseURL + endpoint);
    const json = await responese.json();
    console.log(json);
  } catch (e) {
    console.log(e);
  }
}

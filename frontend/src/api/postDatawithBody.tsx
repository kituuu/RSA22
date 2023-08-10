import axios from "axios";

export async function postData(
  url: string,
  token: string | undefined,
  body: string
) {
  try {
    console.log(token)
    const response = await axios.post(url, {
      headers: {
        Authorization: `Token ${token}`,
      },
      body: body,
    });
    return response;
  } catch (error) {
    console.log("error");
  }
}

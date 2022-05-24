import axios from "axios";

export const requestData = async (endpoint: string) => {
  try {
    const response = await axios.get(endpoint);
    return response.data;
  } catch (err) {
    return "Something went wrong";
  }
};

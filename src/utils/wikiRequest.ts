import axios from "axios";
import { requestData } from "./requestData";

const wikiRequest = async (params: object) => {
  const endpoint = "https://en.wikipedia.org/w/api.php?";
  const url = axios.getUri({ url: endpoint, params });

  const res = await requestData(url);
  return res.query;
};

export default wikiRequest;

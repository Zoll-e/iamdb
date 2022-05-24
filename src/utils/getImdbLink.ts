import { requestData } from "./requestData";

const getImdbLink = async(name:string) => {
    const imdbRequest = await requestData(
        `https://www.omdbapi.com/?apikey=f4e09aec&&t=' + ${name}`
      );
      return `https://www.imdb.com/title/${imdbRequest.imdbID}`;
}

export default getImdbLink;
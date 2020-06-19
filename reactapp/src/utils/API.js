import axios from "axios";

const BASEURL = "https://www.omdbapi.com/?t=";
const APIKEY = "&apikey=trilogy";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};
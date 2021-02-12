import axios from "axios";

export function getData() {
  return axios.get("https://api.covid19india.org/data.json");
}

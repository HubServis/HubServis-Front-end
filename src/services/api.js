import axios from "axios";
import { APIBASEURL } from "../utils/loadConfigs";

export const api = axios.create({
    baseURL: APIBASEURL
})
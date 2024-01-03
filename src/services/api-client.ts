import axios from "axios";

export default axios.create({
   baseURL: 'https://api.rawg.io/api',
   params: {
    key: 'f0da71b60427478e88bccfcac6e3a331'
   } 
});
import axios from "axios";
import  {constants} from "../../config";

export const api = constants.endpoint;
export const error = (error) => {
  return { statue: "error", isSuccessful: false, message: error };
};
export const success = (data) => {
  return { status: "success", isSuccessful: true, data: data };
};

export const getHeaders = () => { return { "content-type": "application/json" }}


export const get = async (url, headers) => {
  try {
    let response = await axios.get(url, { headers });
    return success(response.data);
  } catch (e) {
    console.log(e);
    return error(e);
  }
};

export const post = async (url, data, headers) => {
    try{
        let response = await axios.post(url,data,{headers})
        console.log(response.data);
        return success(response.data)
    }
    catch(e){
        console.log(e);
        return error(e)
    }
};

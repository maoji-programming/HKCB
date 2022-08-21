import config from "../config.json"
import Axios from "axios";


const client = Axios.create(
  {baseURL: "http://"+config.url+":"+config.port}
)
const retrieveContactByPhone = async (phone) =>{
  console.log("send request:"+phone)
  var result = undefined;
  
  return await client.post("/",{
    'phone': phone
  }).then((res) => {
      return res.data;
    }
  ).catch(
    (err) => {
      alert(err.message);
      throw err;
    }
  )
}

const handleContactByPhone = (result) =>{
  if (result !== "") {
    return result;
  } else {
    alert("Cannot find any contacts.");
    return "{\"firstname\":\"Unfound\",\"lastname\":\"Person\"}";
  }
}

export const findContactByPhone = async (phone) => {
  var result = await retrieveContactByPhone(phone);
  return await handleContactByPhone(result) 
}




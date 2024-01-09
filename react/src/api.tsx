// api.js
import axios from "axios";

interface FormData {
  field1: String;
  field2: String;
  field3: String;
  field4: String;
  field5: String;
  field6: String;
  field7: String;
}

export const userDetailApi = async (payload: FormData) => {
  const response = await axios({
    method: "post",
    url: `http://localhost:3000/api/users/info`,
    data: payload,
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

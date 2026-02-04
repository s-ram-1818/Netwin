import axiosInstance from "./axios.instance";

const getcomment = () => {
  return axiosInstance.get("/comments");
};
export default getcomment;

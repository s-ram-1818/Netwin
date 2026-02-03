import axiosInstance from "./axios.instance";

const getRecipe = () => {
  return axiosInstance.get("/recipes");
};
export default getRecipe;

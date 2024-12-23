import { apiKey } from "../constants";
import instance from "../config/axios";

export const currentWeather = async (query) => {
  try {
    const response = await instance.get(`/weather?q=${query}&appid=${apiKey}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const currentLocation = async () => {
  try {
    const response = "";
  } catch (error) {
    console.log(error);
  }
};

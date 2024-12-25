import { apiKey } from "../constants";
import instance from "../config/axios";

export const searchLocation = async (query) => {
  try {
    const response = await instance.get(`/weather?q=${query}&appid=${apiKey}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const currentLocation = async (lat, lon) => {
  try {
    const response = await instance.get(
      `/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`,
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const forecastNextDay = async () => {
  try {
    const response = await instance.get(`/forecast?q=${query}&appid=${apiKey}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

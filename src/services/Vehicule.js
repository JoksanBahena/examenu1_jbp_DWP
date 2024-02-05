import axios from "axios";

const API_URL = "http://localhost:8080/api/vehiculos";

const postVehicule = async (vehicule) => {
  try {
    const response = await axios.post(API_URL, vehicule);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const getVehicules = async (page, size) => {
  try {
    const response = await axios.post(API_URL + "/page", {
      params: {
        page,
        size,
      },
    });
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default {
  postVehicule,
  getVehicules,
};

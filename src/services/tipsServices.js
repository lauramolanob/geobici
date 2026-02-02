// src/services/tipsService.js

const BASE_URL = 'https://mock.apidog.com/m1/1185914-1180457-default/tips'; 

export const fetchTips = async () => {
  try {
    const response = await fetch(`${BASE_URL}/tips-seguridad`);
    const data = await response.json(); 
    return data;
  } catch (error) {
    console.error("Error al conectar con la API de GeoBici:", error);
    return []; 
  }
};
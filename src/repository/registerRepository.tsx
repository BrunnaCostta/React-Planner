import axios from "axios";

const API_URL =
  (import.meta as any).env.VITE_API_URL || "http://localhost:5000";

interface UserData {
  name: string;
  email: string;
  password: string;
}

export const createUser = async (userData: UserData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    console.log(response.data, "response");
    return response.data;
  } catch (err: any) {
    console.error("Erro ao criar usuário:", err.response?.data || err);
    throw err;
  }
};

export const LoginUser = async (user: UserData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, user);
    return response.data;
  } catch (err: any) {
    console.error("Erro ao buscar dados de usuário", err.response?.data || err);
    throw err;
  }
};

export default createUser;

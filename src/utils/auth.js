export const saveToken = (token) => localStorage.setItem("token", token); //solved
export const getToken = () => localStorage.getItem("token");
export const clearToken = () => localStorage.removeItem("token");

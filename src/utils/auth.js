export const saveToken = (token) => localStorage.setItem("token", token); //solved
// export const saveToken = (token) => localStorage.setItem("user_token", token);
export const getToken = () => localStorage.getItem("token");
export const clearToken = () => localStorage.removeItem("token");

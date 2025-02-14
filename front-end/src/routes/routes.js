const devUrl = "http://localhost:4000/";
// Add the backend production URL here
const prodUrl = "https://smit-wma-final-hackathon-backend.vercel.app/"; 

// Set BASE_URL depending on the environment
export const BASE_URL = prodUrl;

export const AppRoutes = {

    // Auth Routes
    login: BASE_URL + "api/v1/auth/login",
    register: BASE_URL + "api/v1/auth/register",

    // User Routes
    getMyInfo: BASE_URL + "api/v1/user/get-my-info",

    // Send Password to Email
    sendLoginPassword: BASE_URL + "api/v1/user/send-email",

};
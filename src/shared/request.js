import axios from "axios";

const instance = axios.create({
  baseURL: "http://44.204.90.116",
});

const token = localStorage.getItem("jwtToken");

//토큰이 있을때만 넣어주기
if (token) {
  instance.defaults.headers.common["Authorization"] = `${token}`;
}

// axios.get('https://api.github.com/user', { 
//     headers: { 
//         'Authorization': `token ${access_token}` 
// } })

// localStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTEwY2Q0OTE4NWU0YTg5NTBiMTQzMzciLCJuaWNrbmFtZSI6IkxFTyIsImlhdCI6MTYyOTcwOTM1OCwiZXhwIjoxNjI5Nzk1NzU4fQ.GwrocxkCxYMrEyAuImqjpBz_B8GFL19xXwih0HHyeJk")

export default instance;
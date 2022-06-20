import axios from "axios";
const api = axios.create({
    url: "http://localhost:5001",
    headers: {
        "content-type": "application/json;charset=UTF-8",
        accept: "application/json,",
    },
});
const apiform = axios.create({

    url: "http://localhost:5001",
    headers: {
        "Content-Type": "multipart/form-data"
    },
});

// api.interceptors.request.use(function (config) {
//     const token = localStorage.getItem("jwtToken");
  
//     config.headers.common["Authorization"] = `Bearer ${token}`;
//     return config;
//   });
  
export const apis = {
// post"
loadposts: () => api.get("/api/posts"),
loadpost: (id) => api.get(`/api/post/${id}`),

addpost: (post) => api.post("/api/write", post),
// edit: (id, contents) => api.put(`api/articles/${id}`, contents),

delpost: (id) => api.delete(`/api/post/${id}`),

// comment
loadcomments: (id) => api.get(`/api/detail/${id}`),
createComment: (comment) =>
  api.post(`/api/detail/${comment.postId}`, { ...comment }),
delComment: (id) => api.delete(`/api/comment/${id}`),
// editComment: (id, coId, content) =>
// 	api.put(`/api/articles/${id}/comments/${coId}`, { content }),

}



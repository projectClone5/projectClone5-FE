const { createProxyMiddleware } = require("http-proxy-middleware");


module.exports = (app) => {
    app.use(
        createProxyMiddleware("/api/post/{posiId}/comment", {
          target: "http://44.204.90.116",
          changeOrigin: true,
        })
      );
}
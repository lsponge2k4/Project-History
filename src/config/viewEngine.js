import express from "express";
// Experss đã lo hạ tầng web (cách tạo server, kết nối route...), developer tập trung vào logic.

// Cấu hình cho express cách hiển thị dự liệu phía người dùng.
let configViewEngine = (app) => {
    app.use(express.static("./src/public")); // Khai báo cho express lấy tài nguyên ở đâu.
    app.set("view engine", "ejs"); // Dùng thư viện gì để render giao diện
    app.set("views", "./src/views"); // Các file giao diện nằm ở đâu.
}

module.exports = configViewEngine; // Đưa hàm này có thể dùng nơi file khác trong dự án.
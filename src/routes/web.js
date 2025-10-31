import express from "express";
import homeControllers from "../controllers/homeControllers";
// Định nghĩa Router để dễ dàng quản lý.
// Gom các route dễ quản lý.
let router = express.Router();


/* Định nghĩa đường dẫn trong Router và gắn vào chương trình chính app.*/
let initWebRoutes = (app) => {
    router.get('/', homeControllers.Home) // Định nghĩa các router củ thể, khi nhập / nó sẽ chạy hàm callback.


    return app.use("/", router); // Gắn router đã định nghĩa vào ứng dụng chính app.
}

module.exports = initWebRoutes;

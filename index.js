var express = require("express");
var app = express();//產生express application的物件
app.get("/", function (req, res) {
    res.send("Hello world");
}};
app.listen(belabeta, function () {
    console.log("伺服器已啟動在localhost:belabeta/")
}};
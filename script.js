document.addEventListener("DOMContentLoaded", function () {
    const imageSmall = document.querySelectorAll(".product-images-items img");
    const imageMain = document.querySelector(".product-detail-left img"); // Chọn ảnh lớn

    console.log("Danh sách ảnh nhỏ:", imageSmall);

    imageSmall.forEach((image) => {
        image.addEventListener("click", () => {
            console.log("Clicked on image:", image);
            imageMain.src = image.src; // Đổi ảnh lớn thành ảnh được click
        });
    });
});


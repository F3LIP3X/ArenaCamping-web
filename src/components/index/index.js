const index = document.querySelectorAll(".index");
index.forEach(index => {
    index.addEventListener("click", () => {
        index.classList.toggle("active");
    });



});
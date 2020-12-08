document.querySelector(".startBtn").addEventListener("click", function () {
    document.getElementById("firstWindow").style.display = "none";
    document.getElementById("secondWindow").style.display = "block";
    setTimeout(() => {

        document.querySelector("body").style.overflow = "hidden";
        document.getElementById("thirdWindow").style.display = "block";
        setTimeout(() => {
            document.getElementById("thirdWindow").classList.add("visibility");
        }, 300);
        setTimeout(() => {
            document.getElementById("thirdWindow").style.transition = "transform 0";
            document.getElementById("thirdWindow").style.transform = "translateY(0)";
            document.getElementById("secondWindow").style.display = "none";
            document.querySelector("body").style.overflow = "inherit";
        }, 400);

    }, 8000);
});
document.getElementById("firstRepairBtn").addEventListener("click", function () {
    document.getElementById("thirdWindow").style.display = "none";
    document.getElementById("fourthWindow").style.display = "block";
});
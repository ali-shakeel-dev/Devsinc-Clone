let imgae = document.querySelector("#img1")
let talkIcon = document.getElementById("talk-png")

imgae.addEventListener('mouseover', () => {
    console.log("Mouse Over")
    talkIcon.style.display = "block";
})
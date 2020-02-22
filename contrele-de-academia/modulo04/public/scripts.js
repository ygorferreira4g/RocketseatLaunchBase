const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

for (let card of cards){
    card.addEventListener("click", function(){
        const videoId = card.getAttribute("id")
            window.location.href = `/video?id=${videoId}`
    })
}
/* duplo click */
for (let card of cards){
    card.addEventListener("dblclick", function(){
        const videoId = card.getAttribute("id")
             modalOverlay.classList.add('active')
        modalOverlay.querySelector("iframe").src = `https://www.youtube.com/embed/${videoId}`;
    })
}

document.querySelector(".clouse-modal").addEventListener("click", function(){
    modalOverlay.classList.remove("active")
    modalOverlay.querySelector("iframe").src = ""

})



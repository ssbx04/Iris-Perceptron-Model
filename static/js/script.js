document.addEventListener("DOMContentLoaded", () => {
    var body = document.body;
    for (let index = 0; index < 60; index++) {
            let tag = document.createElement("div");
            let color = index % 2 == 0 ? 'orange' : 'vert';
            tag.classList.add('point',color);
            body.appendChild(tag);
    }
    var points = document.querySelectorAll('.point');
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;
    setTimeout(() => {
        points.forEach(point => {
            movePoint(point);
            animatePoint(point);
        });
    }, 100);

    function animatePoint(point) {
        setInterval(() => {
            movePoint(point);
        },7000);
    }

    function movePoint(point) {
        let x = rnd(-screenWidth/2, screenWidth/2);
        let y = rnd(-screenHeight/2, screenHeight/2);
        point.style.transform = `translate(${x}px, ${y}px)`;
    }

    function rnd(min, max) { 
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
});
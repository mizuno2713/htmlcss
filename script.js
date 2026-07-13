const foos = document.querySelectorAll(".foo");

foos.forEach(foo => {

    foo.addEventListener("mouseenter", () => {

        // ランダムに逃げる方向
        const dx = Math.random()*600 - 300;
        const dy = Math.random()*600 - 300;

        let newLeft = foo.offsetLeft + dx;
        let newTop = foo.offsetTop + dy;

        newLeft = Math.max(500, Math.min(1100, newLeft));
        newTop = Math.max(250, Math.min(450, newTop));

        foo.style.left = newLeft + "px";
        foo.style.top = newTop + "px";

    });

});

const butterflies = document.querySelectorAll(".butterfly");

butterflies.forEach(butterfly => {

    butterfly.addEventListener("mouseenter", () => {

        const dx = Math.random()*300 - 150;
        const dy = Math.random()*300 - 150;

        butterfly.style.left =
            butterfly.offsetLeft + dx + "px";

        butterfly.style.top =
            butterfly.offsetTop + dy + "px";

    });

});
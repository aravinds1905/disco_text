const colors = ["#FF2D00", "#FBFF00", "#0400FF", "#13FF00"];
const text = ["Let's", "Rock", "And", "Roll"];
const title = document.querySelector(".container_title");
const bg = document.querySelector(".main_container");

let count = 0;

setInterval(() => {
    switch (count) {
        case 0:
        case 1:
        case 2:
        case 3:
            {
                title.innerText = text[count];
                bg.setAttribute("style", `background:${colors[count]}`);
                count++;
                break;
            }

        default: {
            count = 0;
        }
    }
}, 200);

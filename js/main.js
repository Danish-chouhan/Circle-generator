const bodyE1 = document.querySelector("body")

    bodyE1.addEventListener("click", (event) => {
        const xPos = event.offsetX;
        const yPos = event.offsetY;
        const spanE1 = document.createElement("span");
        const randomNUmber = parseInt(Math.random() * 16777215);
        const randomCode = `#${randomNUmber.toString(16)}`;
        console.log(xPos)
        spanE1.style.left = xPos + "px";
        spanE1.style.top = yPos + "px";
        const size = Math.random() * 400;
        spanE1.style.width = size + "px"
        spanE1.style.height = size + "px"
        spanE1.style.border = "3px solid white"
        spanE1.style.borderRadius = size + "px"
        spanE1.style.backgroundColor = randomCode
        bodyE1.appendChild(spanE1);
        setTimeout(() => {
            spanE1.remove()
        }, 3000);
    });
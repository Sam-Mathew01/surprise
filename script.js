/* ---------------- ELEMENTS ---------------- */

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const container = document.querySelector(".container");
const buttons = document.querySelector(".buttons");

/* ---------------- INITIAL POSITIONS ---------------- */

let noX = buttons.clientWidth - noBtn.clientWidth;
let noY = 7;

let yesScale = 1;

// set initial NO position
noBtn.style.left = noX + "px";
noBtn.style.top = noY + "px";

/* ---------------- NO BUTTON CURSOR ESCAPE + YES GROW ---------------- */

buttons.addEventListener("mousemove", (e) => {
    const box = buttons.getBoundingClientRect();
    const btn = noBtn.getBoundingClientRect();

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const btnCenterX = btn.left + btn.width / 2;
    const btnCenterY = btn.top + btn.height / 2;

    const dx = btnCenterX - mouseX;
    const dy = btnCenterY - mouseY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    // Trigger distance (magic value)
    if (distance < 90) {
        const moveFactor = 25;

        noX += (dx / distance) * moveFactor;
        noY += (dy / distance) * moveFactor;

        // Keep NO button inside container
        noX = Math.max(0, Math.min(noX, box.width - btn.width));
        noY = Math.max(0, Math.min(noY, box.height - btn.height));

        noBtn.style.left = noX + "px";
        noBtn.style.top = noY + "px";

        // YES button grows
        if (yesScale < 1.6) {
            yesScale += 0.02;
            yesBtn.style.transform = `scale(${yesScale})`;
        }
    }
});

/* ---------------- YES BUTTON CLICK ---------------- */

yesBtn.addEventListener("click", () => {
    container.innerHTML = `
        <h1>Awwwww!!! 💖🥰</h1>
        <p style="font-size:1.3rem; color:#d6336c; margin-top:15px;">
            You are my Today and all of my Tommorrows!!❤️
        </p>
    `;
});

/* ---------------- FLOATING HEARTS ---------------- */

function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-20px";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    heart.style.animationDuration = Math.random() * 3 + 3 + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 300);


// ==================================
// A SKY FULL OF YOU
// A SPECIAL LETTER FOR AAS
// ==================================

const sky = document.getElementById("sky");

const stars = document.getElementById("stars");

const letter = document.getElementById("letter");

const button = document.getElementById("openLetter");

const typing = document.getElementById("typing");


// ==================================
// GENERATE STARS
// ==================================

for (let i = 0; i < 150; i++) {

    const star = document.createElement("div");

    star.className = "star";

    star.style.left = Math.random() * 100 + "%";

    star.style.top = Math.random() * 100 + "%";

    star.style.animationDelay =
        Math.random() * 4 + "s";

    star.style.animationDuration =
        (1 + Math.random() * 3) + "s";

    stars.appendChild(star);

}


// ==================================
// LOVE LETTER FOR AAS
// ==================================

const message =
    "Pernahkah kamu berpikir, betapa luasnya semesta ini?\n\n" +

    "Ada begitu banyak bintang yang bertebaran di langit, " +
    "ada begitu banyak cahaya yang menghiasi gelapnya malam. " +
    "Namun, di antara semua keindahan itu, " +
    "ada satu hal yang selalu berhasil menarik perhatianku: kamu, Aas.\n\n" +

    "Jika malam memiliki ribuan bintang untuk menghiasi gelapnya, " +
    "maka aku memiliki kamu untuk menghiasi hari-hariku.\n\n" +

    "Aku mungkin tidak bisa menjanjikan dunia yang selalu indah, " +
    "atau langit yang selamanya cerah. " +
    "Akan ada hari ketika hujan datang, " +
    "akan ada waktu ketika segalanya terasa tidak baik-baik saja.\n\n" +

    "Namun, aku ingin menjadi seseorang yang tetap tinggal, " +
    "seseorang yang tidak hanya hadir ketika semuanya terasa mudah, " +
    "tetapi juga ketika dunia sedang tidak ramah kepadamu.\n\n" +

    "Aas, jika suatu hari kamu merasa sendirian, " +
    "cobalah menatap langit malam. " +
    "Ingatlah bahwa di bawah langit yang sama, " +
    "ada seseorang yang selalu bersyukur " +
    "karena semesta pernah mempertemukan dirinya denganmu.\n\n" +

    "Dari sekian banyak kemungkinan dalam hidup, " +
    "bertemu denganmu adalah salah satu hal yang ingin selalu kusyukuri.\n\n" +

    "Terima kasih sudah menjadi bagian dari ceritaku, Aas. " +
    "Semoga kita bisa terus menulis cerita ini, " +
    "selama bintang-bintang masih bersedia menemani malam.\n\n" +

    "Aku menyayangimu. ♡";


let opened = false;


// ==================================
// TYPEWRITER EFFECT
// ==================================

button.addEventListener("click", function() {

    if (opened) return;

    opened = true;

    letter.classList.add("show");

    button.textContent = "Untuk Selamanya ♡";

    let index = 0;

    function typeWriter() {

        if (index < message.length) {

            typing.textContent += message.charAt(index);

            index++;

            setTimeout(typeWriter, 35);

        }

    }

    typeWriter();

});


// ==================================
// CLICK / TOUCH CREATE STAR
// ==================================

sky.addEventListener("pointerdown", function(event) {

    if (event.target.closest("button")) return;

    if (event.target.closest(".letter")) return;

    const rect = sky.getBoundingClientRect();

    const x = event.clientX - rect.left;

    const y = event.clientY - rect.top;


    // CREATE SPARKLE

    const sparkle = document.createElement("div");

    sparkle.className = "sparkle";

    sparkle.textContent = "✦";

    sparkle.style.left = x + "px";

    sparkle.style.top = y + "px";

    sky.appendChild(sparkle);


    // CREATE HEART

    const heart = document.createElement("div");

    heart.className = "floating-heart";

    heart.textContent = "♡";

    heart.style.left = (x + 15) + "px";

    heart.style.top = (y + 15) + "px";

    heart.style.fontSize =
        (16 + Math.random() * 15) + "px";

    sky.appendChild(heart);


    // REMOVE ELEMENTS

    setTimeout(() => {

        sparkle.remove();

        heart.remove();

    }, 2000);

});
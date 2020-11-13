console.log("Hello World!");

var down = false;
document.addEventListener(
    "keydown",
    function () {
        if (down) return;
        down = true;
        console.log("SPACES");
        // your magic code here
    },
    false
);

document.addEventListener(
    "keyup",
    function () {
        down = false;
    },
    false
);

// document.body.addEventListener("keypress", (event) => {
//     console.log("SPACES");
// });

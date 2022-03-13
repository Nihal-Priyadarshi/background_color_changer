function color() {
    let btn = document.getElementById("submit");
    btn.onclick = function () {
        let red = document.getElementById("red").value;
        let green = document.getElementById("green").value;
        let blue = document.getElementById("blue").value;
        let alpha = document.getElementById("alpha").value;

        var colors = ['#000000', '#ffffff'];
        var random_color = colors[Math.floor(Math.random() * colors.length)];
        document.getElementById("heading").style.color = random_color;
        document.getElementById("para").style.color = random_color;
        document.getElementById("text").style.color = random_color;

        let display = document.getElementById("display");
        display.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, ${alpha})`;

        if (red % 1 != 0) {
            document.getElementById("red").value = red - (red % 1);
        }
        if (green % 1 != 0) {
            document.getElementById("green").value = green - (green % 1);
        }
        if (blue % 1 != 0) {
            document.getElementById("blue").value = blue - (blue % 1);
        }

        if (red > 255) {
            document.getElementById("red").value = 255;
        }
        if (green > 255) {
            document.getElementById("green").value = 255;
        }
        if (blue > 255) {
            document.getElementById("blue").value = 255;
        }
        if (red < 0) {
            document.getElementById("red").value = 0;
        }
        if (green < 0) {
            document.getElementById("green").value = 0;
        }
        if (blue < 0) {
            document.getElementById("blue").value = 0;
        }
        if (alpha > 1) {
            document.getElementById("alpha").value = 1;
        }
        if (alpha < 0) {
            document.getElementById("alpha").value = 0;
        }
    };
}
color();
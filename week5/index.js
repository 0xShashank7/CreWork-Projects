// function colorGenerator(){
//     let red = Math.floor(Math.random() * 256)
//     let green = Math.floor(Math.random() *256 )
//     let blue = Math.floor(Math.random() *256 )

//     let color = document.getElementById("name")
//     let btn = document.querySelector(".btn")

    
//     let container = document.getElementById("container")


//     color.innerHTML = `rgb(${red},${green},${blue})`
//     container.style.backgroundColor = `rgb(${red},${green},${blue})`
//     btn.style.color = `rgb(${red},${green},${blue})`

// }

const btnGenerate = document.querySelector("#btn-gnrt");

btnGenerate.addEventListener("click", colorGenerate);

function colorGenerate() {
    for (var i = 1; i <= 5; i++) {
        var red = Math.floor(Math.random() * 256);
        var green = Math.floor(Math.random() * 256);
        var blue = Math.floor(Math.random() * 256);

        var hexValue = red.toString(16) + green.toString(16) + blue.toString(16);
        hexValue = hexValue.toString();

        var containerClass = ".container-" + i.toString();
        var hexOutputClass = ".hex-output-" + i.toString();
        var rgbOutputClass = ".rgb-output-" + i.toString();

        document.querySelector(containerClass).style.backgroundColor = `rgb(${red},${green},${blue})`;
        document.querySelector(hexOutputClass).innerText = "#" + hexValue;
        document.querySelector(rgbOutputClass).innerText = `rgb(${red},${green},${blue})`;
    }
}
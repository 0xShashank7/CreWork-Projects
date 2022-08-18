function colorGenerator(){
    let red = Math.floor(Math.random() * 256)
    let green = Math.floor(Math.random() *256 )
    let blue = Math.floor(Math.random() *256 )

    let color = document.getElementById("name")
    let btn = document.querySelector(".btn")

    
    let container = document.getElementById("container")


    color.innerHTML = `rgb(${red},${green},${blue})`
    container.style.backgroundColor = `rgb(${red},${green},${blue})`
    btn.style.color = `rgb(${red},${green},${blue})`

}
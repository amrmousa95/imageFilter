let saturate    = document.getElementById("saturate")
let contrast    = document.getElementById("contrast")
let brightness  = document.getElementById("brightness")
let sepia       = document.getElementById("sepia")
let grayScale   = document.getElementById("grayscale")
let blur        = document.getElementById("blur")
let hueRotate   = document.getElementById("hueRotate")
let download    = document.getElementById("download")
let reset       = document.getElementById("reset")
let upload      = document.getElementById("upload")
let imgBox      = document.getElementById("image")
let img         = document.getElementById("img")

window.onload = function(){
    reset.style.display = "none"
    download.style.display = "none"
    // imgBox.style.display = "none"
}

function resetFilters(){
    img.style.filter = "none"
    saturate.value = "100"
    brightness.value = "100"
    contrast.value = "100"
    sepia.value = "0"
    blur.value = "0"
    hueRotate.value = "0"
    grayScale.value = "0"
}

upload.onchange = function(){
    resetFilters()
    reset.style.display = "block"
    download.style.display = "block"  
    //the most important trick
    // create variable from FileReader
    let file = new FileReader()
    //read the file which located in array in index 0
    file.readAsDataURL(upload.files[0])
    // to make sure that the file has been uploaded
    file.onload = function(){
        //put the file in src of the img tag
        img.src = file.result
    }
}

let filters = document.querySelectorAll("ul li input")
filters.forEach(filter=>{
    filter.addEventListener("input",function(){
        img.style.filter = `
            saturate(${saturate.value}%)
            contrast(${contrast.value}%)
            brightness(${brightness.value}%)
            sepia(${sepia.value}%)
            grayscale(${grayScale.value})
            blur(${blur.value}px)
            hue-rotate(${hueRotate.value}deg)
        `
    })
})
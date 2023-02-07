let saturate = document.getElementById('saturate')
let contrast = document.getElementById('contrast')
let brightness = document.getElementById('brightness')
let grayscale = document.getElementById('grayscale')
let blur = document.getElementById('blur')
let hueRotate = document.getElementById('hue-rotate')
let sepia = document.getElementById('sepia')
let resetTout = document.getElementById('resetTout')

let upload = document.getElementById('upload')
let download = document.getElementById('download')
let image = document.getElementById('img')

let reset = document.querySelector('span')
let imgBox = document.querySelector('.img-box')

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

function resetImage(){
    image.style.filter ='none';
    saturate.value = '100';
    contrast.value = '100';
    brightness.value = '100';
    sepia.value = '0';
    blur.value = '0';
    grayscale.value = '0';
    hueRotate.value = '0';
}
resetTout.onclick =function(){resetImage()} 


window.onload = function(){
    download.style.display = 'none'
    imgBox.style.display = 'none'
    reset.style.display = 'none'
}
upload.onchange =  function(){
    resetImage();
    download.style.display = 'block'
    imgBox.style.display = 'block'
    reset.style.display = 'block'
    let file = new FileReader()
    file.readAsDataURL(upload.files[0])
    file.onload = function(){
        image.src = file.result
    }
    image.onload = function(){
        canvas.width = image.width;
        canvas.height = image.height;
        ctx.drawImage(image,0,0,canvas.width,canvas.height)
        image.style.display = 'none'
    }
}

let filters = document.querySelectorAll("ul li input")
filters.forEach(filter =>{
    filter.addEventListener('input',function(){
        ctx.filter = `
        saturate(${saturate.value}%)
        contrast(${contrast.value}%)
        brightness(${brightness.value}%)
        grayscale(${grayscale.value})
        blur(${blur.value}px)
        hue-rotate(${hueRotate.value}deg)
        sepia(${sepia.value}%)
        `
        ctx.drawImage(image,0,0,canvas.width,canvas.height)

    })

})

download.onclick = function(){
    download.href = canvas.toDataURL();
}

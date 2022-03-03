const banner = document.querySelector(".banner")
let indexBanner = 1;
const sizeImages = 3


banner.addEventListener("click", (event) => {

    if (arrows[event.target.className]) { arrows[event.target.className]() }
})

const arrows = {
    arrow_left() {

        if(indexBanner>1){
            indexBanner--
        }else{
            indexBanner = sizeImages
        }

        banner.style.backgroundImage = `url('images/banner/banner${indexBanner}.jpg')`

    },
    arrow_rigth() {

        if(indexBanner<sizeImages){
            indexBanner++
        }else{
            indexBanner = 1
        }

        banner.style.backgroundImage = `url('images/banner/banner${indexBanner}.jpg')`
    }
}

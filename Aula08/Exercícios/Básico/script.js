const like = document.getElementById('like')

let curtido = false

like.addEventListener("click", () =>{
    if (!curtido){
        console.log("Curtiu")
        like.src = "./imgs/MaterialSymbolsLightFavorite.png"
        curtido = true
    } else {
        console.log("Descurtiu")
        like.src = "./imgs/MaterialSymbolsLightFavoriteOutline.png"
        curtido = false
    }
})
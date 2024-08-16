(() => {
    document.addEventListener("DOMContentLoaded", () => {
        const imagenes = document.querySelector(".imgContainer")
        let grandotes = new Array(imagenes.children.length)

        for(let i  = 0; i < grandotes.length; i++)
            grandotes[i] = false

        console.log(grandotes)

        for(let i = 0; i < imagenes.children.length; i++){
            imagenes.children[i].onclick= () => {
                for(let j  = 0; j < grandotes.length; j++){
                    if(grandotes[j]){
                        grandotes[j] = false
                        imagenes.children[j].style.transform =  "scale(1)"
                    }
                }
                imagenes.children[i].style.transform =  "scale(1.1)";
                grandotes[i] = true
                console.log(grandotes)
            }
        }
    })
})()
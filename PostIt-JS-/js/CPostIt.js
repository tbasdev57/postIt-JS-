class PostIt {
    id;
    couleur;
    x;
    y;
    largeur;
    hauteur;
    texte;

    constructor(id) {
        this.id = id
        this.couleur = "pink"
        this.x = 100
        this.y = 100
        this.largeur = 100
        this.hauteur = 100
        this.texte = ""
    }

    affiche() {
        let monElem = document.getElementById(this.id)
        if (monElem === null) {
            //Le post it n'existe pas, on le créé
            monElem = document.createElement("div")
            monElem.id = this.id
            document.body.appendChild(monElem)
            // déplacement au drag and drop

            monElem.addEventListener('wheel', (e) => {
                console.log(e)
            })


        }
        monElem.style.position = "fixed"
        monElem.style.backgroundColor = this.couleur
        monElem.style.top = this.y + "px"
        monElem.style.left = this.x + "px"
        monElem.style.width = this.largeur + "px"
        monElem.style.height = this.hauteur + "px"
        monElem.innerHTML = this.texte
        //Boite à outil après innerHTML
        let menu = document.createElement('div')
        menu.style.height = '20px'
        menu.style.border = '1px solid black'
        menu.style.position = "absolute"
        menu.style.bottom = '0'
        menu.style.right = '0'
        menu.style.width = this.largeur + "px"
        monElem.appendChild(menu)

        let bout1 = document.createElement('button')
        bout1.innerHTML = "deplace"
        bout1.draggable = true
        bout1.addEventListener('dragend', (e) => {
            this.x = e.screenX - Math.floor(this.largeur / 2)
            this.y = e.screenY - this.hauteur
            this.affiche()
        })
        menu.appendChild(bout1)

        monElem.draggable = true
    }

    bouge(x, y) {
        this.x = x
        this.y = y
    }

    redim(larg, haut) {
        this.largeur = larg
        this.hauteur = haut
    }
    chgCoul(coul) {
        this.couleur = coul
    }

    chContenu(cont) {
        this.texte = cont
    }
}
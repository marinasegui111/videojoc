
let canvas;
let ctx;
let FPS = 50;

let ampleC = 50
let altC = 50
let cesped = 'rgb(136, 224, 135)'
let aigua = 'rgb(131, 197, 255)'
let terra = 'rgb(131, 107, 87)'
let pedra = 'rgb(172, 172, 172)'
let clau = 'rgb(224, 182, 67)'
let porta = 'rgb(255, 120, 224)'

let retras = 0;

let imatge1;
let imatge2;
let imgvida;
let vidas = 3;
let tilemap;

let escenari = [

    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    [1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1, 1, 2, 0, 0, 0, 0, 1, 1, 1, 1,],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1,],
    [1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1,],
    [1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1,],
    [1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1,],
    [1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1,],
    [1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1,],
    [1, 1, 1, 2, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1,],
    [1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1,],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1,],
    [1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1,],
    [1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1,],
    [1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 2, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1,],
    [1, 1, 3, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 2, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,]

]

function dibuixaEscenari() {

    for (let y = 0; y < 16; y++) {
        for (let x = 0; x < 32; x++) {


            let tile = escenari[y][x]
            ctx.drawImage(tilemap, tile * 256, 0, 256, 255, x * ampleC, y * altC, ampleC, altC)
        }
    }
}





function inicializar() {
    canvas = document.getElementById("pantalla")
    ctx = canvas.getContext('2d')
    imatge1 = new Image();
    imatge1.src = './img/hada.png'

    imatge2 = new Image();
    imatge2.src = './img/tiana.jpg'

    tilemap = new Image();
    tilemap.src = './img/pixil-frame-0.png'

    imgvida = new Image();
    imgvida.src = './img/vida.png'

    setInterval(function () {
        principal();
    }, 1000 / FPS)
}


function borrarPantalla() {
    canvas.width = 1600
    canvas.height = 800
}


let prota = function (x, y) {
    this.x = x;
    this.y = y;
    this.claus = 0;
    this.vidas = 3

    this.dibuixa = function () {
        ctx.drawImage(tilemap, 0, 256, 256, 256, this.x, this.y, 50, 50)
    }

    this.margenes = function (x, y) {
        let colisio = false;

        if (escenari[y / 50][x / 50] == 1) {
            colisio = true;
            return colisio;
        }
        return colisio;
    }

    this.logica = function () {

        if (escenari[this.y / 50][this.x / 50] == 2) {
            this.claus++
            alert("Has trobat una clau");
            escenari[this.y / 50][this.x / 50] = 0;
        }

        if (escenari[this.y / 50][this.x / 50] == 3) {
            if (this.claus == 5) {
                alert("Porta oberta");
            } else {
                alert("Necessites 4 claus, en tens " + this.claus)

            }
        }
    }

    this.adalt = function () {
        if (!this.margenes(this.x, this.y - 50)) {
            this.y = this.y - 50
            this.logica()
        }

    }

    this.baix = function () {
        if (!this.margenes(this.x, this.y + 50)) {
            this.y = this.y + 50
            this.logica()

        }
    }

    this.dreta = function () {
        if (!this.margenes(this.x + 50, this.y)) {
            this.x = this.x + 50
            this.logica()

        }
    }

    this.esquerra = function () {
        if (!this.margenes(this.x - 50, this.y)) {
            this.x = this.x - 50
            this.logica()

        }
    }


    this.muerte = function (x, y) {
        let muerte = false;
        console.log(vidas)
        if (this.x == x && this.y == y) {
            vidas--
            if(vidas == 0){
                 muerte = true
            }else{
                this.x = 100
                this.y = 300
            }
           
        }
        return muerte
    }

}

let personatge = function (x, y, p) {
    this.x = x;
    this.y = y;
    this.p = p;

    this.dibuixa = function () {
        ctx.drawImage(tilemap, this.p, 256, 256, 256, this.x, this.y, 50, 50)
    }


    this.mou = function () {
        let muerte = hada.muerte(this.x, this.y)
        if (muerte) {
            hada.x = 100
            hada.y = 300


            escenari[8][3] = 2
            escenari[1][16] = 2
            escenari[1][23] = 2
            escenari[14][30] = 2
            escenari[13][14] = 2
            vidas = 3;

            alert("HAS MUERTO")
        }


        retras++;
        if (retras == 50) {
            retras = 0
            let posicio = Math.floor(Math.random() * 4)
            if (posicio == 0) {
                if (!this.margenes(this.x - 50, this.y)) {
                    this.x = this.x - 50
                }
            }
            if (posicio == 1) {
                if (!this.margenes(this.x + 50, this.y)) {
                    this.x = this.x + 50
                }
            }
            if (posicio == 2) {
                if (!this.margenes(this.x, this.y + 50)) {
                    this.y = this.y + 50
                }
            }
            if (posicio == 3) {
                if (!this.margenes(this.x, this.y - 50)) {
                    this.y = this.y - 50
                }
            }
        }

    }

    this.margenes = function (x, y) {
        let colisio = false;

        if (escenari[y / 50][x / 50] == 1) {
            colisio = true;
            return colisio;
        }
        return colisio;
    }

}




let hada = new prota(100, 300)

let enemic1 = new personatge(1400, 250, 256)
let enemic2 = new personatge(700, 200, 512)
let enemic3 = new personatge(400, 600, 768)


document.addEventListener('keydown', function (tecla) {
    if (tecla.key == 'ArrowUp') {
        hada.adalt()
    }
    if (tecla.key == 'ArrowDown') {
        hada.baix()
    }
    if (tecla.key == 'ArrowRight') {
        hada.dreta()
    }
    if (tecla.key == 'ArrowLeft') {
        hada.esquerra()
    }

}
)


function principal() {
    borrarPantalla();

    dibuixaEscenari()
    for(let i =0; i<vidas;i++){
        ctx.drawImage(imgvida,i*50,0,50,50)
    }
    hada.dibuixa();

    enemic1.dibuixa();

    enemic1.mou();
    enemic2.dibuixa();

    enemic2.mou();
    enemic3.dibuixa();

    enemic3.mou();

}
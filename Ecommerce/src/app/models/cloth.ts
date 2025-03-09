export interface IProduct {
    id:          number;
    title:       string;
    price:       number;
    description: string;
    category:    Category;
    image:       string[]; // urls
    colour:      string[];
    size:        (ClothSize | PantsSize | ShoeSizes)[];
    stock:       number;
    available:   boolean;
    discount?:    number;
}

export enum Category {
        Remeras = "remeras",
        Buzos = "buzos",
        Pantalones = "pantalones",
        Abrigos = "abrigos",
        Camperas = "camperas",
        Jeans = "jeans",
        Musculosas = "musculosas",
        Tops = "tops",
        Faldas = "faldas",
        Sweaters = "sweaters",
        Shorts = "shorts",
        Denim = "denim",
        Babuchas = "babuchas",
        // Sastreria = "sastreria", es general
        Camisas = "camisas",
        Vestidos = "vestidos",
        Bodies = "bodies",
        Calzas = "calzas"
}


// bikinis pantalones, vesitdos, buzos, camisas, 
// remeras, faldas, sweeter, calzas talle -> 0, 1,2,3
// short y denim talle -> 20, 22, 24 al 32

export enum ClothSize {
    T1 = 1,
    T2 = 2,
    T3 = 3,
    T4 = 4
}

export enum PantsSize {
    T24 = 24,
    T26 = 26,
    T28 = 28,
    T30 = 30,
    T32 = 32
}

export enum ShoeSizes {
    T36 = 36,
    T37 = 37,
    T38 = 38,
    T39 = 39,
    T40 = 40,
    T41 = 41,
    T42 = 42,
    T43 = 43,
    T44 = 44
}
import { Truck, RefreshCw, IdCard } from "lucide-angular";

// Benefit me gusta mas este nombre
export interface Promo {
    id: number;
    title: string;
    description: string;
    price: number;
    icon: string;
}

export const promos: Promo[] = [
    {
        id: 1,
        title: 'Envio gratis',
        description: 'En compras superiores a',
        price: 150000,
        icon: 'Truck'
    },
    {
        id: 2,
        title: 'PAGÁ EN 12 CUOTAS SIN INTERÉS',
        description: 'En compras superiores a',
        price: 80000,
        icon: 'RefreshCw',

    },
    {
        id: 3,
        title: 'CAMBIOS Y DEVOLUCIONES',
        description: 'Hasta 30 días despues de tu compra',
        price: 80000,
        icon: 'IdCard'
    }
];

// Mapeo de strings a componentes de íconos
const iconMap = {
    'Truck': Truck,
    'RefreshCw': RefreshCw,
    'IdCard': IdCard
};


// example
// 12 Cuotas sin interés a partir de $250.000

// Ver condiciones
// 9 Cuotas sin interés a partir de $200.000

// Ver condiciones
// 6 Cuotas sin interés a partir de $100.000

// Ver condiciones
// 3 Cuotas sin interés en todo
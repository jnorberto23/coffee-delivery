import { TradicionalExpress } from "../../../src/assets/coffees"

interface DB {
    coffees: Coffee[]
}

type Coffee = {
    id: string;
    name: string;
    tag: string[];
    description: string;
    price: number,
    image: string;
}
export const db: DB = {
    coffees: [
        {
            id: crypto.randomUUID(),
            name: 'Expresso Tradicional',
            tag: ['tradicional'],
            description: "Expresso diluído, menos intenso que o tradicional",
            price: 9.99,
            image: TradicionalExpress
        }

    ],
};
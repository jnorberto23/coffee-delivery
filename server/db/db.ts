import { TradicionalExpress } from "../../web/src/assets/coffees"
interface Db {
    coffees: Coffee[]
}

type Coffee = {
    id: string;
    name: string,
    tag: string[],
    description: string,
    price: number,
    image: string
}

const db: Db= {
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

export default db
import { TradicionalExpress } from "../../web/src/assets/coffees"

const db = {
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
import { AmericanExpress, ArabianCoffee, Capuccino, CoffeeWithMilk, CreamyExpress, CubanCoffee, HawaiianCoffee, HotChocolate, IceExpress, IrishCoffee, Latte, Macchiato, Mocaccino, TradicionalExpress } from "../assets/coffees";

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
export const coffeeData: DB = {
    coffees: [
        {
            id: crypto.randomUUID(),
            name: 'Expresso Tradicional',
            tag: ['tradicional'],
            description: "Expresso diluído, menos intenso que o tradicional",
            price: 9.99,
            image: TradicionalExpress
        },

     {
            id: crypto.randomUUID(),
            name: 'Expresso Americano',
            tag: ['tradicional'],
            description: "Expresso diluído, menos intenso que o tradicional",
            price: 9.99,
            image: AmericanExpress
        },
        {
            id: crypto.randomUUID(),
            name: 'Expresso Cremoso',
            tag: ['tradicional'],
            description: "Café expresso tradicional com espuma cremosa",
            price: 9.99,
            image: CreamyExpress
        },
        {
            id: crypto.randomUUID(),
            name: 'Expresso Gelado',
            tag: ['tradicional', 'gelado'],
            description: "Bebida preparada com café expresso e cubos de gelo",
            price: 9.99,
            image: IceExpress
        },
        {
            id: crypto.randomUUID(),
            name: 'Café com Leite',
            tag: ['tradicional', 'com leite'],
            description: "Meio a meio de expresso tradicional com leite vaporizado",
            price: 9.99,
            image: CoffeeWithMilk
        },
        {
            id: crypto.randomUUID(),
            name: 'Latte',
            tag: ['tradicional', 'com leite'],
            description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
            price: 9.99,
            image: Latte
        },
        {
            id: crypto.randomUUID(),
            name: 'Capuccino',
            tag: ['tradicional', 'com leite'],
            description: "Bebida com canela feita de doses iguais de café, leite e espuma",
            price: 9.99,
            image: Capuccino
        },
        {
            id: crypto.randomUUID(),
            name: 'Macchiato',
            tag: ['tradicional', 'com leite'],
            description: "Café expresso misturado com um pouco de leite quente e espuma",
            price: 9.99,
            image: Macchiato
        },
        {
            id: crypto.randomUUID(),
            name: 'Mocaccino',
            tag: ['tradicional', 'com leite'],
            description: "Café expresso com calda de chocolate, pouco leite e espuma",
            price: 9.99,
            image: Mocaccino
        },
        {
            id: crypto.randomUUID(),
            name: 'Chocolate Quente',
            tag: ['especial', 'com leite'],
            description: "Bebida feita com chocolate dissolvido no leite quente e café",
            price: 9.99,
            image: HotChocolate
        },
        {
            id: crypto.randomUUID(),
            name: 'Cubano',
            tag: ['especial', 'alcoólico', 'gelado'],
            description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
            price: 9.99,
            image: CubanCoffee
        },
        {
            id: crypto.randomUUID(),
            name: 'Havaiano',
            tag: ['especial'],
            description: "Bebida adocicada preparada com café e leite de coco",
            price: 9.99,
            image: HawaiianCoffee
        },
        {
            id: crypto.randomUUID(),
            name: 'Árabe',
            tag: ['especial'],
            description: "Bebida preparada com grãos de café árabe e especiarias",
            price: 9.99,
            image: ArabianCoffee
        },
        {
            id: crypto.randomUUID(),
            name: 'Irlandês',
            tag: ['especial', 'alcoólico'],
            description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
            price: 9.99,
            image: IrishCoffee
        },
    ],
};
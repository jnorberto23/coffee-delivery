import { ReactNode, createContext, useEffect, useRef, useState } from "react";
type CoffeeType = {
  id: string;
  name: string;
  price: number;
  amount: number;
  image: string;
};

interface ContextInterface {
  coffees: CoffeeType[];
  total: number;
  count: number;
  handleAddCoffeeToCart: (coffee: CoffeeType) => void;
  handleUpdateCoffeeAmount: (coffee: CoffeeType) => void;
  removeCoffeeFromCart: () => void;
}

interface SelectedCoffeesContextProviderProps {
  children: ReactNode;
}

export const SelectedCoffeesContext = createContext({} as ContextInterface);

export function SelectedCoffeesContextProvider({
  children,
}: SelectedCoffeesContextProviderProps) {
  const [coffees, setCoffees] = useState<CoffeeType[]>([]);
  const [count, setCount] = useState(0);

  function handleAddCoffeeToCart(coffee: CoffeeType): void {
    const coffeeFound = coffees.find((element) => element.id === coffee.id);
    console.log('coffeeFound', coffeeFound)
    if (coffeeFound) {
      handleUpdateCoffeeAmount(coffeeFound);
      handleUpdateCounter();
    }

    setCoffees([...coffees, coffee]);

  }

  function handleUpdateCoffeeAmount(coffeeFound: CoffeeType): void {
    console.log('caiu aqui com o valor de ', coffeeFound)
  
    setCoffees(coffees.map((coffee) => {
      if(coffee.id === coffeeFound.id){
        console.log('id igual')
        return {...coffee, amount: coffeeFound.amount}
      }

      return coffee
    
    }))
  }

  useEffect(() => {
    console.log('coffeess', coffees)
    handleUpdateCounter();
  }, [coffees]);

  function handleUpdateCounter() {
    const counter = coffees.reduce((acc, current) => {
      return (acc = acc + current.amount);
    }, 0);
    setCount(counter);
  }

  return (
    <SelectedCoffeesContext.Provider
      value={{
        coffees,
        total: 0,
        count,
        handleAddCoffeeToCart,
        handleUpdateCoffeeAmount,
        removeCoffeeFromCart: () => {},
      }}
    >
      {children}
    </SelectedCoffeesContext.Provider>
  );
}

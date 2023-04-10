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
  let [coffees, setCoffees] = useState<CoffeeType[]>([]);
  const [count, setCount] = useState(0);

  function handleAddCoffeeToCart(coffee: CoffeeType): void {
    const coffeeIsAlreadyAdded = coffees.find((element) => element.id === coffee.id);

    if (coffeeIsAlreadyAdded) {
      return handleUpdateCoffeeAmount(coffee);
    }

    return setCoffees([...coffees, coffee]);
  }

  function handleUpdateCoffeeAmount(coffeeFound: CoffeeType): void {

    const updatedCoffees = coffees.map((element) => {
      if(coffeeFound.id === element.id){
        return { ...element, amount: coffeeFound.amount}
      }
      return element
    })


    setCoffees(updatedCoffees)
  }

  useEffect(() => {
    handleUpdateCounter();
  }, [coffees, ...coffees.map((element => element.amount))]);

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

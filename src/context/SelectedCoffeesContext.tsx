import { ReactNode, createContext, useEffect, useState } from "react";

type CoffeeType = {
  id: string;
  name: string;
  price: number;
  amount: number;
};

interface ContextInterface {
  coffees: CoffeeType[];
  total: number;
  count: number;
  addCoffeeToCart: (coffee: CoffeeType) => void;
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
  const [count, setCount] = useState(0)

  function addCoffeeToCart(coffee: CoffeeType):void {
    const found = coffees.find(element => element.id === coffee.id);
   
    if(found){
      const index = coffees.indexOf(found)
      const newCoffees = coffees;
      newCoffees[index].amount += coffee.amount
      setCoffees(newCoffees)
    }
    else{

      setCoffees([...coffees, coffee])
    }
  }

  useEffect(() => {
    coffees.forEach((element) => {
      setCount(element.amount + count)
    })
  }, [coffees])

  return (
    <SelectedCoffeesContext.Provider
      value={{
        coffees,
        total: 0,
        count,
        addCoffeeToCart,
        removeCoffeeFromCart: () => {}

      }}
    >
      {children}
    </SelectedCoffeesContext.Provider>
  );
}

import { ReactNode, createContext, useState } from "react";

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

  return (
    <SelectedCoffeesContext.Provider
      value={{
        coffees,
        total: 0,
        count: 0,
        addCoffeeToCart,
        removeCoffeeFromCart: () => {}

      }}
    >
      {children}
    </SelectedCoffeesContext.Provider>
  );
}

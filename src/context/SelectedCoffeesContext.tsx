import { ReactNode, createContext, useEffect, useRef, useState } from "react";
import { isEqual, map } from '';

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

  const prevCoffeeData = useRef(coffees);
  
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
    if (!isEqual(map(prevData.current, "country"), map(data, "country"))) {
      console.log("country changed");
    }
    coffees.forEach((element) => {
      setCount(element.amount + count)
    })
  }, [coffees, ...coffees.map(v => v.amount)])

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

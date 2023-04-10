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
  totalPrice: number;
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
  const [totalPrice, setTotalPrice] = useState(0);
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
    handleUpdateTotalPrice()
  }, [coffees]);

  function handleUpdateCounter() {
    const counter = coffees.reduce((acc, current) => {
      return (acc = acc + current.amount);
    }, 0);
    
    setCount(counter);
  }

  function handleUpdateTotalPrice() {
    const totalPrice = coffees.reduce((acc, current) => {
      return (acc = acc + (current.price * current.amount));
    }, 0);
    
    console.log('totalprice', totalPrice)
    setTotalPrice(totalPrice);
  }
  return (
    <SelectedCoffeesContext.Provider
      value={{
        coffees,
        totalPrice,
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

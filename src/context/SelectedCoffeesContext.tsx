import { ReactNode, createContext, useEffect, useState } from "react";
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
  handleRemoveCoffeeFromCart: (id: string) => void;
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
    const coffeeIsAlreadyAdded = coffees.find(
      (element) => element.id === coffee.id
    );

    if (coffeeIsAlreadyAdded) {
      return handleUpdateCoffeeAmount(coffee);
    }

    return setCoffees([...coffees, coffee]);
  }

  function handleUpdateCoffeeAmount(coffeeFound: CoffeeType): void {
    const updatedCoffees = coffees.map((element) => {
      if (coffeeFound.id === element.id) {
        return { ...element, amount: coffeeFound.amount };
      }
      return element;
    });

    setCoffees(updatedCoffees);
  }

  function handleRemoveCoffeeFromCart(id: string): void {
    const updatedCoffees = coffees.filter((element) => id !== element.id);
    setCoffees(updatedCoffees);
  }

  function updateCounter() {
    const counter = coffees.reduce((acc, current) => {
      return (acc = acc + current.amount);
    }, 0);

    setCount(counter);
  }

  function updateTotalPrice() {
    const totalPrice = coffees.reduce((acc, current) => {
      return (acc = acc + current.price * current.amount);
    }, 0);

    setTotalPrice(totalPrice);
  }

  useEffect(() => {
    updateCounter();
    updateTotalPrice();
  }, [coffees]);

  return (
    <SelectedCoffeesContext.Provider
      value={{
        coffees,
        totalPrice,
        count,
        handleAddCoffeeToCart,
        handleUpdateCoffeeAmount,
        handleRemoveCoffeeFromCart,
      }}
    >
      {children}
    </SelectedCoffeesContext.Provider>
  );
}

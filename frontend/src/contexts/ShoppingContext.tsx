import {
  ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

type ShoppingContextProviderProps = {
  children: ReactNode;
};

type CartItem = {
  ID: number;
  image: string | undefined;
  name: string | undefined;
  price: number;
  oldPrice: number | undefined;
  rating: number;
  discount?: number;
  dspt?: string;
  qty: number;
};

type ProductItem = {
  ID: number;
  image: string | undefined;
  name: string | undefined;
  price: number;
  oldPrice: number | undefined;
  rating: number;
  discount?: number;
  dspt?: string;
};

interface ShoppingContextType {
  cartQty: number;
  totalPrice: number;
  cartItems: CartItem[];
  increaseQty: (id: number) => void;
  decreaseQty: (id: number) => void;
  addCartItem: (item: ProductItem) => void;
  removeCartItem: (id: number) => void;
  clearCart: () => void;
}

const ShoppingContext = createContext<ShoppingContextType>(
  {} as ShoppingContextType
);

export const useShoppingContext = () => {
  return useContext(ShoppingContext);
};

export const ShoppingContextProvider = ({
  children,
}: ShoppingContextProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const jsonCartData = localStorage.getItem("shopping_cart");
    return jsonCartData ? JSON.parse(jsonCartData) : [];
  });

  useEffect(() => {
    localStorage.setItem("shopping_cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const cartQty = cartItems.reduce((qty, item) => qty + item.qty, 0);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );

  const increaseQty = (id: number) => {
    console.log("increaseQty => ", id);
    const currentCartItem = cartItems.find((item) => item.ID === id);
    if (currentCartItem) {
      const newItems = cartItems.map((item) => {
        if (item.ID === id) {
          return { ...item, qty: item.qty + 1 };
        } else {
          return item;
        }
      });
      setCartItems(newItems);
    }
  };

  const decreaseQty = (id: number) => {
    console.log("decreaseQty => ", id);
    const currentCartItem = cartItems.find((item) => item.ID === id);
    if (currentCartItem) {
      if (currentCartItem.qty == 1) {
        removeCartItem(id);
      } else {
        const newItems = cartItems.map((item) => {
          if (item.ID === id) {
            return { ...item, qty: item.qty - 1 };
          } else {
            return item;
          }
        });
        setCartItems(newItems);
      }
    }
  };

  const addCartItem = (product: ProductItem) => {
    console.log("product=> ", product);
    if (product) {
      const currentCartItem = cartItems.find((item) => item.ID === product.ID);
      if (currentCartItem) {
        const newItems = cartItems.map((item) => {
          if (item.ID === product.ID) {
            return { ...item, qty: item.qty + 1 };
          } else {
            return item;
          }
        });
        setCartItems(newItems);
      } else {
        const newItem = { ...product, qty: 1 };
        setCartItems([...cartItems, newItem]);
      }
    }
  };

  const removeCartItem = (id: number) => {
    console.log("removeCartItem => ", id);
    const currentCartItemIndex = cartItems.findIndex((item) => item.ID === id);
    const newItems = [...cartItems];
    newItems.splice(currentCartItemIndex, 1);
    setCartItems(newItems);
  };

  const clearCart = () => {
    console.log("clearCart => ");
    setCartItems([]);
  };

  return (
    <ShoppingContext.Provider
      value={{
        cartItems,
        cartQty,
        totalPrice,
        increaseQty,
        decreaseQty,
        addCartItem,
        removeCartItem,
        clearCart,
      }}
    >
      {children}
    </ShoppingContext.Provider>
  );
};

export default ShoppingContext;

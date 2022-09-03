interface Item {
  text: string;
}

interface SingleElementProps {
  item: Item;
  position: number;
  removeItem: (n: number) => void;
}

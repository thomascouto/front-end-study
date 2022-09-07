interface Item {
  text: string;
  date: string;
}

interface SingleElementProps {
  item: Item;
  position: number;
  removeItem: (n: number) => void;
  handleTask: (isChecked: boolean) => void;
}

type TextStyle = "text-normal" | "text-line";

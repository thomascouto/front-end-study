interface Item {
  text: string;
  date: string;
  isChecked: boolean;
}

interface SingleElementProps {
  item: Item;
  position: number;
  updateItemText: (n: number, newValue: string) => void;
  removeItem: (n: number) => void;
  handleTask: (n: number, isChecked: boolean) => void;
}

type TextStyle = "text-normal" | "text-line";

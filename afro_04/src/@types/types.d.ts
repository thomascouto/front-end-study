interface Item {
  text: string;
  date: string;
  isChecked: boolean;
  isOnEdit: boolean;
  endDate?: string;
  index?: number;
}

interface SingleElementProps {
  item: Item;
  index: number;
  loadSingleItem: (n: number) => void;
  removeItem: (n: number) => void;
  handleTask: (n: number, isChecked: boolean) => void;
}

type TextStyle = "text-normal" | "text-line";
type ElementEditStyle = {
  box: "border-normal" | "border-edit";
  icon: "icon-normal" | "icon-edit";
};

interface FormProps {
  handleItem: (item: Item) => void;
}

interface EditItemProps {
  editItem: Item | null;
}

interface CounterProps {
  checkedItems: number;
  arraySize: number;
}

type DateFormat = "dd/MM/yyyy" | "dd/MM/yy";

interface Item {
  id: number;
  text: string;
  date: string;
  isChecked: boolean;
  isOnEdit: boolean;
  endDate?: string;
}

interface SingleElementProps {
  item: Item;
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

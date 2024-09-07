import { MouseEvent, useState } from "react";

//in typescript we use interface for handling props in function
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

export default function ListGroup({ items, heading, onSelectItem }: Props) {
  //const items = ["Karachi", "Lahore", "Multan", "Islamabad"];

  //let selectedIndex = 0;

  //event handler
  // const handleClick = (event: MouseEvent) => {
  //   console.log(event);
  // };

  //hook
  //useState(variable(e.g:selectedIndex),update function)
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {/* {items.length === 0 ? <p>no item found</p> : ""} */}
      {items.length === 0 && <p>no item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex == index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={index}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

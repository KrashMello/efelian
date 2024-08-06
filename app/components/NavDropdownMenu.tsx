"use client";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
const NavDropdownMenu = (props: {
  items: { key: string; to: string; title: string }[];
}) => {
  return (
    <Dropdown className="bg-opacity-30 backdrop-filter backdrop-blur-lg dark:bg-opacity-30 dark:backdrop-filter dark:backdrop-blur-lg bg-slate-300 dark:bg-slate-700">
      <DropdownTrigger>
        <Button
          variant="light"
          isIconOnly
          className="text-slate-600 dark:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M3 18v-2h18v2H3Zm0-5v-2h18v2H3Zm0-5V6h18v2H3Z"
            />
          </svg>
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Dynamic Actions" items={props.items}>
        {(item) => (
          <DropdownItem
            key={item.key}
            href={item.to}
            className="text-slate-600 dark:text-white"
          >
            {item.title}
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  );
};

export default NavDropdownMenu;

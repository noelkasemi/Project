import { Popover, Transition, Fragment, Arrow, Table } from "../Page/Partials/Imports";

export default function MyPopover(props) {
  const data = [
    "Articles Details",
    "Terms Conditions",
    "Privacy Policy",
    "Integrations",
  ];

  return (
    <Popover
      className={`${props.PopoverStyle} relative 0 w-fit mt-2 rounded-lg font-semibold `}
    >
      <Popover.Button
        className={`${props.ButtonStyle} bg-gradient-to-r from-yellow-500 to-orange-600 hover:opacity-90 rounded focus:outline-none px-4 py-2 flex items-center`}
      >
        Drop
        <Arrow />
      </Popover.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel
          className={`${props.PanelStyle} absolute bg-orange-400 px-4 py-4 lg:mt-0 mt-4 -left-8 lg:-left-32 lg:-bottom-80 rounded  lg:w-fit z-10`}
        >
          <div className="">
            <Table />
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

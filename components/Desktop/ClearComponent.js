import getTag from "../../store/getTag";
import setActiveStore from '../../store/setActive'

export default function ClearComponent() {

    const clear = getTag((state) => state.clear);
    const active = setActiveStore(state => state.active);

    const onClear = () => {
        clear();
        setActiveStore.setState({ active: !active })
    }

    return (
        <div onClick={() => onClear()} className="lg:cursor-pointer flex pr-2">
            <svg
                className="self-center pr-1 text-[#5790cf]"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13H16C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11H8Z"
                    fill="currentColor"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    fill="currentColor"
                />
            </svg>
            <h1 className="self-center py-0.5 text-[#5790cf] font-poppins text-xs font-medium">
                Clear
            </h1>
        </div>
    )
}

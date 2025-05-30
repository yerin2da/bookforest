// components/HamburgerButton.jsx
import { FaBars } from "react-icons/fa6";

export default function HamburgerButton({ onClick }) {
    return (
        <FaBars
            className="lg:hidden text-2xl cursor-pointer"
            onClick={onClick}
        />
    );
}

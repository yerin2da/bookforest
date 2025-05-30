// components/MobileNavbar.jsx
import { motion, AnimatePresence } from 'framer-motion';
import { menuItems } from './NavbarItems';
import { Link } from 'react-router-dom';

export default function MobileNavbar({ isOpen, onClose }) {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-60 lg:hidden">
                    <motion.div
                        className="absolute right-0 w-[80%] bg-white h-full p-4 shadow-lg overflow-y-auto"
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                    >
                        <div className="flex justify-end mb-4">
                            <button className="text-gray-500 text-xl" onClick={onClose}>닫기 ✕</button>
                        </div>

                        <ul className="space-y-4 text-lg font-medium text-gray-800">
                            {menuItems.map((item, i) => (
                                <li key={i} className="group">
                                    {/* 1뎁스 */}
                                    <Link
                                        to={item.path}
                                        onClick={onClose}
                                        className="block py-3 group-hover:text-mainColor"
                                    >
                                        {item.title}
                                    </Link>

                                    {/* 2뎁스 */}
                                    {item.children.length > 0 && (
                                        <ul className="font-normal pl-4 text-base text-gray-600 space-y-3">
                                            {item.children.map((child, j) => (
                                                <li key={j}>
                                                    <Link
                                                        to={child.path}
                                                        onClick={onClose}
                                                        className="block hover:text-mainColor"
                                                    >
                                                        {child.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}

"client";
import Image from "next/image";
import Logo from "./logo";

export default function Header() {

    return (
        <section>
            <nav className="h-[80px] w-full">
                <div className="text-[#864720] flex items-center justify-around h-full playfair-f leading-[10px]">
                    <div className="cursor-pointer">Home</div>
                    <div className="cursor-pointer">Menus</div>
                    <Logo />
                    <div className="cursor-pointer">About</div>
                    <div className="cursor-pointer">Contact</div>
                </div>
            </nav>
        </section>
    );
}

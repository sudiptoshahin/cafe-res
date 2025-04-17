import Image from "next/image";
import logo from "../../public/images/logo_cup.svg";

export default function Logo() {
    return (
        <div className="cursor-pointer flex items-center relative montserrat-f">
            <h1 className={`absolute left-[-45px] font-bold text-[20px]`}>Coderz</h1>
            <Image src={logo} alt="logo" height={100} />
            <h1 className="absolute right-[-25px] font-bold text-[20px]">cafe</h1>
        </div>
    );
}
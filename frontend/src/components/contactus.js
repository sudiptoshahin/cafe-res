import Image from "next/image";
import Logo from "./logo";

export default function ContactUs() {

    return (
        <section className="flex">
            <div className="w-[50%] h-[700px]">
                <Image style={{objectFit: "cover"}} 
                    className="h-full" 
                    src={'/images/shop_location.jpg'} 
                    alt="lcoation" 
                    width={1000} 
                    height={600} />
            </div>
            <div className="w-[50%] flex flex-col items-center justify-center">
                <div className="w-[150px]">
                    <Logo />
                </div>
                <div className="text-[#864720] text-[16px]">
                    <h1 className="playfair-f font-bold my-[20px]">Our Location</h1>

                    <p className="montserrat-f font-medium">Cozy Corner, VIC 0000 Australia</p>

                    <h1 className="playfair-f font-bold my-[20px]">Opening Hours</h1>
                    <p className="montserrat-f font-medium mb-2">Monday to Thursday: 7:00 AM - 3:00 PM</p>
                    <p className="montserrat-f font-medium mb-2">Friday and Satureday: 7:00 AM - 5:00 PM</p>
                    <p className="montserrat-f font-medium mb-5">Sunday: 9:00 AM - 3:00 PM</p>
                </div>
                <button className="border border-[2px] border-[#864720] text-[#864720] uppercase 
                w-[calc(100%)-200px] p-2 text-[20px] font-bold cursor-pointer">
                    contact us
                </button>
            </div>


        </section>
    );
}
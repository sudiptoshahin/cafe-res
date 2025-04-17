"client";
import Image from "next/image";

export default function OurStory() {

    return (
        <section className="w-full text-center mt-[50px] bg-[#FFF8ED]">
            <div className="h-[300px] text-[#864720] flex flex-col items-center">
                <h1 className="uppercase text-[50px] font-bold mb-[10px]">Our Story</h1>
                <div className="w-[calc(100%-300px)] relative">
                    <Image className="absolute top-[-60px] left-[-30px]" src="/images/pasty_about.png" width={100} height={100} alt="pastry" />
                    <p className="text-[14px] leading-[30px] tracking-[1.5px]">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. But also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                    <Image className="absolute right-5" src="/images/logo_cup.svg" width={100} height={100} alt="coffee" />
                </div>
                <button className="mt-[30px] text-[18px] font-semibold uppercase border border-[2px] border-[#864720] mt-[10px] w-[120px] h-[50px]">
                    about us
                </button>
            </div>
        </section>
    );
}
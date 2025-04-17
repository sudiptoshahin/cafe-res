import Image from "next/image";

export default function WhatWeHaveItem({ img, btntext }) {

    return (
        <section className="flex flex-col items-center">
            <div>
                <Image className="w-[400px] h-[450px]" src={img} alt="items" height={450} width={400} />
            </div>
            <button className="uppercase playfair-f my-[30px] border border-[2px] border-[#864720] 
            w-[calc(100%-100px)] text-[20px] font-semibold py-2.5 rounded-md">{btntext}</button>
        </section>
    );
}
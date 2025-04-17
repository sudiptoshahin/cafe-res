
import Image from "next/image";
import WhatWeHaveItem from "./whatwehaveitem";

export default function WhatWeHave() {
    return (
        <section className="bg-[#FCEAD0]">
            <div className="w-full text-[#864720] text-center">
                <div className="mb-[50px]">
                    <h1 className="uppercase text-[50px] playfair-f font-bold mb-[20px] py-[20px]">What we have</h1>
                    <p className="text-[18px]">Crafted with finest ingredients and a passion for flavor, our menu offers a tantalizing array</p>
                    <p className="text-[18px]">of coffee creations, freshly baked goods and savory bites.</p>
                </div>

                <div className="w-full flex justify-around px-[100px]">
                    <WhatWeHaveItem img={'/images/lunch.jpg'} btntext={'all-day branch'} />
                    <WhatWeHaveItem img={'/images/pastries.jpg'} btntext={'pastries & sweets'} />
                    <WhatWeHaveItem img={'/images/coffee_bags.jpg'} btntext={'coffee & drinks'} />
                </div>
            </div>

        </section>
    );
}
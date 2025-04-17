import Image from "next/image";

export default function Social() {

    return (
        <section className="w-full h-[100px] bg-[#864720] flex justify-around items-center px-[50px]">
            <div className="flex items-center space-x-[10px] playfair-f font-medium">
                <Image src={'/images/icons/stars.svg'} alt="star" height={24} width={24} />
                <p className="text-white">instagram@coderz.cafe</p>
            </div>
            <div className="flex items-center space-x-[10px] playfair-f font-medium">
                <Image src={'/images/icons/stars.svg'} alt="star" height={24} width={24} />
                <p className="text-white">Use #coderz.cafe to share your experience with us</p>
            </div>

        </section>
    );
}
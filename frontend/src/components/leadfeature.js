
import Image from "next/image";
import featureImg from "../../public/images/landing-main.jpg";

export default function LeadFeature() {

    return (
        <section>
            <div className="relative playfair-f w-full">
                <Image className="w-full h-[820px]" src={featureImg} alt="feature-img" height={853} width={1280} />
                <div className="absolute bottom-5 right-20 text-white text-[50px] font-bold text-shadow-md">
                    <p>Savor Sunshine Morning with</p>
                    <p>Coffee & Golden Pastry!</p>
                </div>
            </div>
        </section>
    );
}
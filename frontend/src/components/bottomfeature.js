
import Image from "next/image";

export default function BottomFeature() {

    return (
        <section className="my-[50px]">
            <div className="w-full">
                <Image className="w-full" src={"/images/feature2.jpg"} alt="feature" width={1280} height={400} />
            </div>
        </section>
    );
}
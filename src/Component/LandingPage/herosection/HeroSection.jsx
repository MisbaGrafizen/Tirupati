import React from 'react';
// import '../../../Component/Style.css';
import video1 from '../../../../Public//herosec.mp4';

export default function HeroSection() {
    return (
        <section className="relative w-full h-screen">
            {/* Background Video */}
            <video 
                src={video1}
                autoPlay 
                loop 
                muted 
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-[0]"
            />

            {/* Black Overlay with Reduced Opacity */}
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-[1]" />

            {/* Content */}
            <div className="flex absolute top-[40%] mx-auto w-[70%] left-0 right-0 z-[300]">
                <div className="">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-10 text-[#fff]">
                            <div className="text text-center flex flex-col gap-[10px] overflow-hidden font-Outfit">
                                <h1 className="font-weight-bold font-Outfit heroTextanim md:leading-[60px] font-[600] text-[30px] md:text-[50px]">
                                    Ultra-precision, high-volume manufacturing
                                </h1>
                                <p className="font-[500] heroTextanim2 text-[20px] font-Outfit">
                                    Based on our core technologies fineblanking, forming, and electrolamination stamping, 
                                    we offer unparalleled expertise in processing steel sheets and optimizing manufacturing processes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


import React from "react";
import Image from "next/image";

export const OurClients = () => {
    return (
        <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12">
                    <p className="inline-block text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary-start)] to-[var(--color-primary-end)] uppercase tracking-[0.2em] mb-4">
                        พันธมิตรที่ไว้วางใจ
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-heading">
                        ลูกค้าของเรา
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                        เราภูมิใจที่ได้เป็นส่วนหนึ่งของความสำเร็จ และได้รับความไว้วางใจจากองค์กรชั้นนำ
                    </p>
                </div>

                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100 flex items-center justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-slate-50 to-white opacity-50 transition-opacity duration-500 group-hover:opacity-0" />
                    <div className="relative z-10 w-full max-w-4xl mx-auto grayscale hover:grayscale-0 transition-all duration-700 ease-in-out transform hover:scale-[1.02]">
                        <Image
                            src="/images/clients_logo.webp"
                            alt="Our Clients"
                            width={1200}
                            height={400} // Aspect ratio approximation, adjust if needed
                            className="w-full h-auto object-contain mix-blend-multiply"
                        // mix-blend-multiply helps if the image has a white background to blend it, 
                        // but since user said background is "dark", the wrapper bg-white + padding helps frame it.
                        // If the image itself has a dark background, we might need to invert or brightness filter it, 
                        // but standard logos usually look okay on white if framed properly.
                        />
                    </div>
                </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] left-[-5%] w-96 h-96 bg-[var(--color-primary-start)]/10 rounded-full blur-3xl" />
                <div className="absolute bottom-[10%] right-[-5%] w-96 h-96 bg-[var(--color-primary-end)]/10 rounded-full blur-3xl" />
            </div>
        </section>
    );
};

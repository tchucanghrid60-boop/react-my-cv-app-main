import NavBar from "./../components/NavBar";

export default function About() {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col justify-between">
            {/* ส่วนของ Menu */}
            <NavBar
                pname="a"
                colorLinkNavbar="#FFF714"
            />

            {/* ส่วนเนื้อหาหลัก */}
            <main className="max-w-6xl w-full mx-auto px-8 py-16 flex-grow flex flex-col justify-center">

                {/* ใช้ Grid 12 คอลัมน์เพื่อดันฝั่งขวาออกไปให้มีช่องว่างตรงกลาง */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">

                    {/* ฝั่งซ้าย: About Me + รูปภาพ (ใช้ 5 ช่องจาก 12 ช่อง) */}
                    <div className="md:col-span-5 flex flex-col items-start space-y-12">
                        <h1 className="text-4xl md:text-5xl font-bold font-serif">
                            About Me
                        </h1>

                        <div className="w-full flex justify-center md:justify-start">
                        <img src ="data:image/jpeg;base64,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" alt=""
            className="w-[200px] h-[200px] object-cover rounded-full"/>
                        </div>
                    </div>

                    {/* ฝั่งขวา: คำอธิบาย (เริ่มที่คอลัมน์ 7 และกินพื้นที่ไป 6 ช่อง ทำให้มีช่องว่างตรงกลาง) */}
                    <div className="md:col-start-7 md:col-span-6 space-y-5">
                        <h2 className="text-xl md:text-2xl font-serif font-bold leading-snug">
                            Hi, I'm Permpoon Chouton. A passionate Full Stack Web Developer based in Thailand.
                        </h2>

                        <p className="text-gray-300 text-sm md:text-base leading-relaxed text-justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt rem odit labore unde nemo omnis sequi hic sit laudantium repellendus recusandae vitae ea laborum, ipsa nisi eos autem. Blanditiis consequuntur velit nesciunt aperiam odit excepturi repellat libero in enim praesentium! Ex dicta est suscipit ipsam voluptate tempora voluptatum quam distinctio minus saepe nobis nulla amet fugiat sit autem deserunt asperiores vitae ea, libero sed! Libero fugit non, placeat nulla quae odio asperiores ratione! Accusantium placeat dolorem minus eos excepturi modi.
                        </p>
                    </div>
                </div>

                {/* ปุ่ม Download CV ตรงกลางด้านล่าง */}
                <br></br>
                <br></br>
                <div className="flex justify-center mt-20">
                    <a
                        
                        className="border border-white rounded-full px-8 py-2.5 text-base md:text-lg font-medium hover:bg-white hover:text-black transition-all duration-300 "
                    >
                        Download CV
                    </a>
                </div>
            </main>
        </div>
    );
}
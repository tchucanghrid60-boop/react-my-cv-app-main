import NavBar from "./../components/NavBar";
import Portfolio1 from "./../assets/img2.png";
import Portfolio2 from "./../assets/img3.png";
import Portfolio3 from "./../assets/img4.png";
import Portfolio4 from "./../assets/img5.png";


export default function Portfolio() {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col justify-between">
            {/* ส่วนของ Menu */}
            <NavBar pname="c" colorLinkNavbar="#FF4F" />

            {/* เนื้อหาหน้า Portfolio */}
            <main className="max-w-6xl w-full mx-auto px-6 py-12 flex-grow flex flex-col items-center">
                {/* หัวข้อหน้า Portfolio */}
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-center mb-16">
                    Portfolio
                </h1>
                <br></br>
                <br></br>
                <br></br>

                {/* รายการโปรเจกต์ */}
                <div className="flex flex-col space-y-28 w-full">

                    {/* ================= โปรเจกต์ที่ 1: Bikes and Beards ================= */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-center w-full">
                        {/* ฝั่งซ้าย: รูปภาพผลงาน (กรอบฟ้า) */}
                        <div className="flex justify-center">
                            <div >
                                <img
                                    src={Portfolio1}
                                    alt="Bikes and Beards Preview"
                                    className="w-full h-auto rounded-[2rem] object-cover"
                                />
                            </div>
                        </div>

                        {/* ฝั่งขวา: รายละเอียดโปรเจกต์ */}
                        <div className="flex flex-col space-y-6">
                            <h2 className="text-2xl md:text-3xl font-serif font-bold text-center">
                                Bikes and Beards
                            </h2>

                            <p className="text-gray-300 text-sm md:text-base leading-relaxed text-justify">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
                                rem odit labore unde nemo omnis sequi hic sit laudantium repellendus
                                recusandae vitae ea laborum, ipsa nisi eos autem. Blanditiis
                                consequuntur velit nesciunt aperiam odit excepturi repellat libero
                                in enim praesentium! Ex dicta est suscipit ipsam voluptate tempora
                                voluptatum quam distinctio minus saepe nobis nulla amet fugiat sit
                                autem deserunt asperiores vitae ea, libero sed! Libero fugit non.
                            </p>

                            {/* ปุ่ม View และ Git code */}
                            <div className="flex items-center gap-6 pt-4">
                                <a
                                    href="https://your-live-demo-link.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="border border-white rounded-full px-8 py-2 text-base font-medium hover:bg-white hover:text-black transition-all duration-300"
                                >
                                    View
                                </a>
                                <a
                                    href="https://github.com/your-username/repo-bikes"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2.5 text-base font-medium hover:text-gray-300 transition-colors"
                                >
                                    <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                                    </svg>
                                    <span>Git code</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                    {/* ================= โปรเจกต์ที่ 2: Learnify ================= */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-center w-full">
                        {/* ฝั่งซ้าย: รายละเอียดโปรเจกต์ */}
                        <div className="flex flex-col space-y-6 order-2 md:order-1">
                            <h2 className="text-2xl md:text-3xl font-serif font-bold text-center">
                                Learnify
                            </h2>

                            <p className="text-gray-300 text-sm md:text-base leading-relaxed text-justify">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
                                rem odit labore unde nemo omnis sequi hic sit laudantium repellendus
                                recusandae vitae ea laborum, ipsa nisi eos autem. Blanditiis
                                consequuntur velit nesciunt aperiam odit excepturi repellat libero
                                in enim praesentium! Ex dicta est suscipit ipsam voluptate tempora
                                voluptatum quam distinctio minus saepe nobis nulla amet fugiat sit
                                autem deserunt asperiores vitae ea, libero sed! Libero fugit non,
                                placeat nulla.
                            </p>

                            {/* ปุ่ม View และ Git code */}
                            <div className="flex items-center gap-6 pt-4">
                                <a
                                    href="https://your-live-demo-link.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="border border-white rounded-full px-8 py-2 text-base font-medium hover:bg-white hover:text-black transition-all duration-300"
                                >
                                    View
                                </a>
                                <a
                                    href="https://github.com/your-username/repo-learnify"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2.5 text-base font-medium hover:text-gray-300 transition-colors"
                                >
                                    <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                                    </svg>
                                    <span>Git code</span>
                                </a>
                            </div>
                        </div>

                        {/* ฝั่งขวา: รูปภาพผลงาน (กรอบเหลือง) */}
                        <div className="flex justify-center order-1 md:order-2">
                            <div>
                                <img
                                    src={Portfolio2}
                                    alt="Bikes and Beards Preview"
                                    className="w-full h-auto rounded-[2rem] object-cover"
                                />
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    {/* ================= โปรเจกต์ที่ 3: Anime-X ================= */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-center w-full">
                        {/* ฝั่งซ้าย: รูปภาพผลงาน (ธีมแดง/ขอบมน) */}
                        <div className="flex justify-center">
                            <div >
                                <img
                                    src={Portfolio3}
                                    alt="Bikes and Beards Preview"
                                    className="w-full h-auto rounded-[2rem] object-cover"
                                />
                            </div>
                        </div>

                        {/* ฝั่งขวา: รายละเอียดโปรเจกต์ + ปุ่ม */}
                        <div className="flex flex-col space-y-6">
                            <h2 className="text-2xl md:text-3xl font-serif font-bold text-center">
                                Anime-X
                            </h2>

                            <p className="text-gray-300 text-sm md:text-base leading-relaxed text-justify">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
                                rem odit labore unde nemo omnis sequi hic sit laudantium repellendus
                                recusandae vitae ea laborum, ipsa nisi eos autem. Blanditiis
                                consequuntur velit nesciunt aperiam odit excepturi repellat libero
                                in enim praesentium! Ex dicta est suscipit ipsam voluptate tempora
                                voluptatum quam distinctio minus saepe nobis nulla amet fugiat sit
                                autem.
                            </p>

                            {/* ปุ่ม View และ Git code */}
                            <div className="flex items-center gap-6 pt-4">
                                <a
                                    href="https://your-live-demo-link.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="border border-white rounded-full px-8 py-2 text-base font-medium hover:bg-white hover:text-black transition-all duration-300"
                                >
                                    View
                                </a>
                                <a
                                    href="https://github.com/your-username/repo-anime-x"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2.5 text-base font-medium hover:text-gray-300 transition-colors"
                                >
                                    <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                                    </svg>
                                    <span>Git code</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    {/* ================= โปรเจกต์ที่ 4: Tech-Z ================= */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-center w-full">
                        {/* ฝั่งซ้าย: รายละเอียดโปรเจกต์ */}
                        <div className="flex flex-col space-y-6 order-2 md:order-1">
                            <h2 className="text-2xl md:text-3xl font-serif font-bold text-center">
                                Tech-Z
                            </h2>

                            <p className="text-gray-300 text-sm md:text-base leading-relaxed text-justify">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
                                rem odit labore unde nemo omnis sequi hic sit laudantium repellendus
                                recusandae vitae ea laborum, ipsa nisi eos autem. Blanditiis
                                consequuntur velit nesciunt aperiam odit excepturi repellat libero
                                in enim praesentium! Ex dicta est suscipit ipsam voluptate tempora
                                voluptatum quam distinctio minus saepe nobis nulla amet fugiat sit
                                autem deserunt asperiores vitae ea, libero sed! Libero fugit non,
                                placeat nulla quae odio asperiores ratione! Accusantium placeat
                                dolorem minus eos excepturi modi. Lorem ipsum dolor sit amet
                                consectetur adipisicing elit. Nesciunt rem odit.
                            </p>

                            {/* ปุ่ม View และ Git code */}
                            <div className="flex items-center gap-6 pt-4">
                                <a
                                    href="https://your-live-demo-link.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="border border-white rounded-full px-8 py-2 text-base font-medium hover:bg-white hover:text-black transition-all duration-300"
                                >
                                    View
                                </a>
                                <a
                                    href="https://github.com/your-username/repo-tech-z"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2.5 text-base font-medium hover:text-gray-300 transition-colors"
                                >
                                    <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                                    </svg>
                                    <span>Git code</span>
                                </a>
                            </div>
                        </div>

                        {/* ฝั่งขวา: รูปภาพผลงาน (กรอบมนโทนม่วง) */}
                        <div className="flex justify-center order-1 md:order-2">
                            <div >
                                <img
                                    src={Portfolio4}
                                    alt="Bikes and Beards Preview"
                                    className="w-full h-auto rounded-[2rem] object-cover"
                                />
                            </div>
                        </div>
                    </div>


                </div>
            </main>
        </div>
    );
}
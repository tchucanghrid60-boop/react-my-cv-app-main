import NavBar from "./../components/NavBar";
import Portfolio1 from "./../assets/c1.png";
import Portfolio2 from "./../assets/c2.png";
import Portfolio3 from "./../assets/c3.png";

export default function Portfolio() {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col justify-between">
            {/* ส่วนของ Menu (ส่ง pname='c' หรือค่าที่ใช้จับคู่กับปุ่ม Let's talk) */}
            <NavBar pname="p" colorLinkNavbar="#ff0000" />

            {/* เนื้อหาหน้า Let's talk */}
<main className="min-h-screen w-full flex flex-col items-center justify-center px-6 py-12">
    
    {/* Wrapper จำกัดความกว้างให้อยู่ตรงกลางพอดี */}
    <div className="w-full max-w-4xl flex flex-col items-center justify-center space-y-16">
        
        {/* หัวข้อและคำอธิบาย */}
        <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-wide">
                Let's talk
            </h1>
            <p className="text-gray-300 text-lg md:text-xl font-medium">
                Don't be a stranger! Say hello and let's collaborate
            </p>

        </div>
        <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

        {/* รายการช่องทางการติดต่อ 3 รายการ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full text-center">

            {/* ช่องทางที่ 1: อีเมล */}
            <div className="flex flex-col items-center justify-center space-y-4">
                <div className="h-20 flex items-center justify-center">
                    <img
                        src={Portfolio1}
                        alt="Email"
                        className="w-full h-auto rounded-[2rem] object-cover"
                    />
                </div>
                <a
                    href="mailto:ninninsau@gmail.com"
                    className="text-gray-200 text-base md:text-lg hover:text-white transition-colors"
                >
                    ninninsau@gmail.com
                </a>
            </div>

            {/* ช่องทางที่ 2: ที่อยู่ / สถานที่ */}
            <div className="flex flex-col items-center justify-center space-y-4">
                <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
                    <img
                        src={Portfolio2}
                        alt="Location"
                        className="w-full h-auto rounded-[2rem] object-cover"
                    />
                </div>
                <p className="text-gray-200 text-base md:text-lg">
                    Thailand, Bangkok
                </p>
            </div>

            {/* ช่องทางที่ 3: LinkedIn */}
            <div className="flex flex-col items-center justify-center space-y-4">
                <div className="h-20 flex items-center justify-center">
                    <img
                        src={Portfolio3}
                        alt="LinkedIn"
                        className="w-full h-auto rounded-[2rem] object-cover"
                    />
                </div>
                <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 text-base md:text-lg hover:text-white transition-colors"
                >
                    Pichet Choojangreed
                </a>
            </div>

        </div>

    </div>
</main>

        </div>
    );
}
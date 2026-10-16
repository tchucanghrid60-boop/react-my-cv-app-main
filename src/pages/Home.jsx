import NavBar from "./../components/NavBar";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import css from "./../assets/css.png";
import figma from "./../assets/figma.png";
import react from "./../assets/react.png";
import node from "./../assets/node.png";
import html from "./../assets/html.png";
import spring from "./../assets/spring.png";
import java from "./../assets/java.png";
import Firebase from "./../assets/Firebase.png";

export default function Home() {
    return (
    <>
    {/*ส่วนของ NavBar */}
    <NavBar pname='h' colorLinkNavbar='#FFF714' />

    {/*ส่วนของ Hero Section */}
    <div className="flex items-center justify-between p-30 pl-80 pr-80 ">
    {/*รายละเอียดด้านซ้าย */}
        <div className="flex flex-col gap-2">
            <span className="text-white text-6xl font-bold">Full Stack</span>
            <span className="text-white text-6xl font-bold">Developer !</span>
            <span className="text-white text-2xl ">Hi, I'm Pichet Chopojangreed. A passwionate Full Stack </span>
            <span className="text-white text-2xl">Web Developer based in Thailand.</span>
        <div className="flex gap-3 pt-3"> 
            <FaLinkedinIn className="text-green-400 text-4xl"/>
            <FaGithub className="text-green-400 text-4xl"/>
        </div>
        </div>
        {/*รูปด้านขวา */}
        <div>
            <img src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq7GXNNpuNtoX6Rm44pgZSoEHS4KS_9CPMLxTW0Hxyuw&s" alt=""
            className="w-[450px] h-[300px] object-cover rounded-full"/>
        </div>
    </div>
    {/*ส่วนของข้อความ Tech Stack */}
    <div className="flex justify-center pt-20 ">
        <p className= "text-white text-2xl font-bold">
            My Tech Stack 
        </p>
    </div>
    {/*ส่วนของรูปภาพ Tech Stack */}
    <div className="flex items-center justify-center gap-10 pt-10 ">
        <img src={html} alt="html"></img>
        <img src={css} alt="css"></img>
        <img src={node} alt="node"></img>
        <img src={react} alt="react"></img>
        <img src={spring} alt="spring"></img>
        <img src={java} alt="java"></img>
        <img src={figma} alt="figma"></img>
        <img src={Firebase} alt="Firebase"></img>
        

    </div>
    </>
    );
}

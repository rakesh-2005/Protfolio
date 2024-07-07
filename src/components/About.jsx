import aboutImg from "../assests/assets/about.jpg";
import {ABOUT_TEXT} from "../constants";
import {motion} from "framer-motion";
const About = () => {

  return (
    <div className="border-b border-neutral-900 pb-4">
        <h1 className="my-20 text-center text-4xl">
            ABOUT
            <span className="text-neytral-500">ME</span>
        </h1>
        <div className="flex flex-wrap">
            <motion.div 

            whileInview={{opacity:1 , x:0}}
            initial={{opacity:0 , x:-100}}
            transition={{duration:0.5}}


            
            className="w-full lg:w-1/2 lg:p-8">
             <motion.div
             whileInview={{opacity:1,x:0}}
             initial={{opacity:0,x:100}}
             
             
             className="flex items-center justify-center">
                <img className="rounded-2xl" src={aboutImg} alt="about" />
             </motion.div>
            </motion.div>
            <div className="w-full lg:w-1/2"></div>
            <div className="flex flex-col justify-center">
                <p className="my-2 maxw-w-xl py-6">{ABOUT_TEXT}</p>
            </div>
        </div>
    </div>


  );
};

export default About

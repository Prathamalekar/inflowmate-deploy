import icon1 from "../image/icon1.svg";
import icon2 from "../image/icon2.svg";
import icon3 from "../image/icon3.svg";
import Product from "../image/product.png";
import Integration from "./integration-logo";
import integration from "../image/integration-logoSubs.png"
import Dots from "../image/Dots.png"
const obj = [{
    id:1,
    icon:icon1,
    title:"Getting Started",
    content:"Kickstart your project with bases of information.",
    info:"Provide us a URL or Documents and the rest will be taken care of. All the info that the Bot needs to know will be curated and fed into our systems to provide you a state of the art bot that converts like magic.",
    img:Product,
    boolean:true,
    booleanPratham:true,
},
{
    id:2,
    icon: icon2,
    title:"Integration",
    content:"We will integrate your Chatbot on your desired platform.",
    info:"Don’t worry, we have an exhaustive list of platforms where your chatbot can be integrated. Because Tech has no boundaries and your business too shouldn’t have any.",
    img: integration,
    boolean:false,
    booleanPratham:true,

},
{
    id:3,
    icon:icon3,
    title:"Unlock Your brand’s potential",
    content:"See a sharp change in the trajectory of growth, revenue and efficiency.",
    info:"We maximise the leverage we have in order to provide you the super-power of benefiting from LLM’s like ChatGPT. See a sharp growth in boosted efficiency, costs being cut, Boost revenue and automate systems.",
    img:Dots,
    boolean:true,
    booleanPratham:false,

}];
export default obj;
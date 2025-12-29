import { FaFacebook, FaGoogle, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer(){
     return(
          <footer>
               <div className="foter">
               <h2>Contact</h2>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptates, eum facere porro maiores reiciendis a accusamus officia sit mollitia cum eos labore nemo incidunt atque ratione, natus ad id.</p>
               </div>
               <div className="foter">
               <h2>Follow Us</h2>
               <div className="icon">
                         <div><FaGoogle/></div>
                         <div><FaFacebook/></div>
                         <div><FaTwitter/></div>
                         <div><FaLinkedin/></div>
                         </div>
               </div>
          </footer>
     )
}
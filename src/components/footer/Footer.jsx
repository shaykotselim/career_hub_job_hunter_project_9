import React from "react";
import footerImg from "../../assets/Icons/Group 9969.png"
const Footer = () => {
  return (
   
      <footer className="footer p-10 bg-black text-base-content">
          <div className="text-white sm:grid gap-8 sm:grid-cols-5">
            <div>
                <div className="bg-cyan-50 p-2 rounded">
                <p className="text-3xl font-medium bg-gradient-to-r from-blue-500 via-pink-500 to-blue-500 inline-block text-transparent bg-clip-text ">
                  Job_Hunter
                </p>
                </div>
                <p className="text-white mt-4 ">
                  There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.
                </p>
                  <img className="mt-4" src={footerImg} alt="" />
            </div>
            <div>
              <p className="text-xl font-bold mt-8 lg:mt-0 mb-4">Company</p>
              <p>About</p>
              <p>Work</p>
              <p>Latest News</p>
              <p>Careers</p>
            </div>
            <div>
              <p className="text-xl font-bold mt-8 mb-4 lg:mt-0">Product</p>
              <p>Prototype</p>
              <p>Plans $ Pricing</p>
              <p>Customers</p>
              <p>Integration</p>
            </div>
            <div>
              <p className="text-xl font-bold mt-8 mb-4 lg:mt-0">Support</p>
              <p>Help Desk</p>
              <p>Sales</p>
              <p>Become A Partner</p>
              <p>Developers</p>
            </div>
            <div>
              <p className="text-xl font-bold mt-8 mb-4 lg:mt-0">Contact</p>
              <p>524 Broadway , NYC</p>
              <p>+1777-978-5570</p>
            </div>
          </div>
      </footer>
    
  );
};

export default Footer;

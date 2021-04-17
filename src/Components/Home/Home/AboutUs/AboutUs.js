import React from 'react';
import aboutbenaer from '../../../../images/About.jpg';

const AboutUs = () => {
    return (
        <main className=" bg-primary  mt-5">
            <div className="container">
            <div className="row">
                <div className="col-md-6 text-light">
                    <h2>About <span className="text-primary"> Us </span></h2>
                    <h5>Your Local Computer Specialist Servicing</h5>
                    <h6>Computer Repair is dedicated to providing the best customer service and computer repair available to you. When your Laptop, PC or Mac needs repairing, you won’t have to worry for long! Our technicians are skilled in dealing with all computers and gadgets whether you need home or business computer repairs.</h6>
                    <h4 className="ms-5 p-3 ">
                        <li>
                            Microsoft Windows PC Computer Repair

                    </li>
                        <li>
                            Apple iMac and Macbook Computer Repair

                    </li>
                        <li>
                            Data Recovery

                    </li>
                        <li>
                            Viruses, Spyware, Adware and Ransom-ware Removal

                    </li>
                        <li>
                            Cracked and Broken Laptop Screen Replacements

                    </li>
                        <li>
                            Charging Issues, Charging Ports Repairs and Replacements

                    </li>
                        <li>
                            Computer Tune Ups, Hardware Repair, Installations

                    </li>
                        <li>
                            Printer Set Ups / Troubleshooting

                    </li>
                    </h4>
                </div>
                <div className="col-md-6">
                    
                    <img src={aboutbenaer}class="img-thumbnail mt-2" alt="..."></img>

                </div>
            </div>
            </div>
        </main>
    );
};

export default AboutUs;
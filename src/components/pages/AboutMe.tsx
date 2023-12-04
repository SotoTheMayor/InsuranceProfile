//AboutMe section - loads in page body when corresponding tab is clicked
import React from "react";

export default function AboutMe() {
    return (
        <div className="wholePage container-fluid">
        <div className="row">
            <div className="imageBanner aboutImg col-4"></div>
            <div className="col-8">
                <div className="sectionHeader row">
                    <h2>About Me</h2>
                </div>
                <div className="sectionBody row justify-content-center">
                    <p className="col-8 aboutBody"><em>With a proper growth mentality and enough 
                    hard work, the world is full of possibilities.</em></p>
                    <p className="col-8 aboutBody">I believe in people.  Colleagues, customers, family, 
                    and friends, when you respect and appreciate those around you they can tell.  
                    I've had some amazing success building relationships in the insurance industry, across the entire USA, 
                    and the key to my success has been simple: I genuinely care.</p>
                    <p className="col-8 aboutBody">When a customer calls me with an issue with my company's product, 
                    I get it.  I want to help because I know I'd probably be frustrated too.  If you call me, you're giving me 
                    a chance to make it better, and I'm going to do that.  When my employee doesn't feel well, go get 
                    some rest.  I'll cover your phone calls.  It's been a while since I've said hi to some agents anyway, and 
                    it sounds nice.</p>
                    <p className="col-8 aboutBody">That's not all, of course.  In order to better understand the tech side of insuretech, 
                    I went to engineering bootcamp.  So that I can help take care of a growing Spanish-speaking population, estoy aprendiendo hablar 
                    espanol.  I've created and ran voice of the customer projects, driven record high CSAT scores, built customer success 
                    and experience teams from the ground up, and just generally have done everything I can to make my company's customers 
                    feel a part of the family culture I build within my teams.</p>
                    <p className="col-8 aboutBody">I believe in people.</p>
                </div>
            </div>
        </div>
        </div>
    )
}
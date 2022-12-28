import React from "react";
import './global.css';

function Homecoreui() {

    const a = 8999;
    const b = "Thsi is Heading";
    const c = <h1 className="constc"> This Is JXS {a} Formate</h1>;

    return (
        <div>
            <div className="mynav">
                <ul>
                    <li><a href='http://google.com'>Home</a></li>
                    <li><a href='http://google.com'>Home</a></li>
                    <li><a href='http://google.com'>Home</a></li>
                    <li><a href='http://google.com'>Home</a></li>
                    <li><a href='http://google.com'>Home</a></li>
                    <li><a href='http://google.com'>Home</a></li>
                    <li><a href='http://google.com'>Home</a></li>

                </ul>

            </div>

            <section className="rownew">
                <h1>{a}</h1>
                {c}



            </section>


        </div>
    )
}

export default Homecoreui;

import React, { Component } from 'react';
import './landingpage.css';
import '../main.js';

import NavBar from '../components/NavBar';
import pic2 from '../image/pic2.jpg';
import pic3 from '../image/pic3.jpg'






class landingpage extends Component
{
    render()
    {
        return (
            <div>
                <NavBar />
        <section id="wrapper" class="skewed">
            <div class="layer bottom">
                <div class="content-wrap">
                    <div class="content-body">
                        <h1>Back To the Future</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
                            cumque quidem numquam velit atque, exercitationem ullam voluptatum
                            earum tenetur enim.
            </p>
                    </div>
                    <img src={pic3} alt="graffiti" height="520" width="600" />
                </div>
            </div>

            <div class="layer top">
                <div class="content-wrap">
                    <div class="content-body">
                        <h1>Thriller</h1>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
                            cumque quidem numquam velit atque, exercitationem ullam voluptatum
                            earum tenetur enim.
            </p>
                    </div>
                    <img src={pic2} alt="graffiti" height="520" width="600" />
                </div>
            </div>

            <div class="handle"></div>
        </section>

                <script src="js/main.js"></script>


                </div>
          )  };
}
export default landingpage;

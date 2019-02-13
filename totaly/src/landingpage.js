import React, { Component } from 'react';
import './landingpage.css';
import './main.js';
import './img/train.jpg'



class Landingpage extends Component
{
    render()
    {
        return (
            <div>
        <section id="wrapper" class="skewed">
            <div class="layer bottom">
                <div class="content-wrap">
                    <div class="content-body">
                        <h1>Back in the Days</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
                            cumque quidem numquam velit atque, exercitationem ullam voluptatum
                            earum tenetur enim.
            </p>
                    </div>
                    <img src="./img/train.jpg" alt="graffiti" height="520" width="600" />
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
                    <img src="../img/train2.jpg" alt="graffiti" height="520" width="600" />
                </div>
            </div>

            <div class="handle"></div>
        </section>

                <script src="js/main.js"></script>


                </div>
          )  };
}
export default Landingpage;

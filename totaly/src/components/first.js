import React, { Component } from 'react';
import './first.css';
import NavBar from '../components/NavBar'


class page1 extends Component
{
    render()
    {
        return (

            <div>
                <NavBar />
                
                   
                
                <div id="boombox">
                    <div id="handle"></div>
                    <div id="handlel"></div>
                    <div id="handletopl"></div>
                    <div id="handler"></div>
                    <div id="handletopr"></div>
                    <div id="antenna1">
                        <div id="antenna2">
                            <div id="antennatop"></div>
                        </div>
                    </div>
                    <div id="buttonarea">
                        <div class="button"></div>
                        <div class="button"></div>
                        <div class="button"></div>
                        <div class="button"></div>
                        <div class="button"></div>
                        <div class="button"></div>
                    </div>
                    <div id="controls">
                        <div id="speakerbacksml" class="speakerbacksm">
                            <div class="centersm"></div></div>
                        <div id="speakerlsm" class="speakersm"></div>
                        <div id="speakerbacksmr" class="speakerbacksm">
                            <div class="centersm"></div></div>
                        <div id="speakerrsm" class="speakersm"></div>
                        <div id="controlpanel">
                            <div id="controlpanelinside">
                                <div id="controlsleft">
                                    <div id="colorbar"></div>
                                    <div id="needle"></div>
                                </div>
                                <div id="controlsright">
                                    <div id="numbers">
                                        <p class="numbers">88</p>
                                        <p class="numbers">94</p>
                                        <p class="numbers">100</p>
                                        <p class="numbers">106</p>
                                    </div>
                                    <div id="controlbar">
                                        <div id="mark"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="main">
                        <div id="speakerbackl" class="speakerback">
                            <div class="center"></div>
                        </div>
                        <div id="speakerl" class="speaker">
                        </div>
                        <div id="speakerbackr" class="speakerback">
                            <div class="center"></div>
                        </div>
                        <div id="speakerr" class="speaker">
                        </div>
                        <div id="cassettearea">
                            <div id="cassettebox">
                                <div id="cassettewindow">
                                    <div id="wheelleft" class="wheel">
                                        <div class="wheelcenter"></div>
                                    </div>
                                    <div id="wheelright" class="wheel">
                                        <div class="wheelcenter"></div>
                                    </div>
                                </div>
                                <div id="redbar"></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    };
}
export default page1;


import React, { Component } from 'react';
import dosa from '../shared/images/dosa.jfif';
import jalebi from '../shared/images/jalebi.jfif';
import staticdata from '../shared/constant/constantData';

class MyImagesComp extends Component {

    render() {
        return (
            <div>
                <h2>This is MyImages Component</h2>
                <img src={dosa} alt='Dosa' height="200px" width="200px" />
                <img src={jalebi} alt='jalebi' height="200px" width="200px" /> <br/>
                <video src={staticdata.vdo} controls></video>
                <audio src={staticdata.ado} controls></audio>
                <img src={staticdata.samosa1} alt='samosa' height="200px" width="200px" />
            </div>
        )
    }
}

export default MyImagesComp

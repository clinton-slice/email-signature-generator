import './GenerateSignatureImg.css';
import React from 'react';
import domtoimage from "dom-to-image";

class GenerateSignatureImg extends React.Component {
    render(){
        if(!this.props.signatureElement){
            return null;
        }
        return (
            <div className={'image-holder'}>
                <div className="ui segment">
                    <div id="signature-image">
                        {render(this.props.signatureElement)}
                    </div>
                </div>
            </div>
        );
    }
}

const render = node => {
    domtoimage.toPng(node)
        .then(dataUrl => {
            const img = new Image();
            img.src = dataUrl;
            var signatureHolder = document.getElementById('signature-image');
            if (signatureHolder) {
                signatureHolder.append(img);
            }
        })
        .catch(error =>
            console.error('Something went wrong!!!', error)
        );
};

export default GenerateSignatureImg;

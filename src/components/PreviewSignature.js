import './PreviewSignature.css';
import logo from '../img/logo.png';
import React from 'react';
import {connect} from 'react-redux'
import GenerateSignatureImg from "./GenerateSignatureImg";
import domtoimage from 'dom-to-image';

class PreviewSignature extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showImage: false
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.showImage) {
            this.setState({ showImage: false })
        }
    }

    render() {
        if (!this.props.selectedEmployee) {
            return (
                <div className="ui message">
                    <div className="header">
                        No Employee Selected
                    </div>
                    <p>Please select an employee from the left panel.</p>
                </div>
            );
        }

        return (
            <div>
                <div className="ui segment">
                    <div id='signaturePreview' className="signaturePreview ui column grid" ref={ node => this.domNode = node }>
                        <div className="column four wide">
                            <img src={logo} alt={'logo'}/>
                        </div>
                        <div className="employee-info column nine wide">
                            <h1>{this.props.selectedEmployee.name}</h1>
                            <p className='position'>{this.props.selectedEmployee.position}</p>
                            <div className="contact-details">
                                <div className={'contact-field'}>
                                    <b className="col-25">Phone:</b>
                                    <p>{this.props.selectedEmployee.phone}</p>
                                </div>
                                <div className={'contact-field'}>
                                    <b className="col-25">Fax:</b>
                                    <p>{this.props.selectedEmployee.fax}</p>
                                </div>
                                <div className={'contact-field'}>
                                    <b className="col-25">Email:</b>
                                    <p><a href={`mailto:${this.props.selectedEmployee.email}`}>{this.props.selectedEmployee.email}</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <button className="ui labeled icon button" onClick={()=> {this.onClick()}}>
                        <i className="sync icon"></i>
                        Generate Image
                    </button>
                    <button className="ui labeled icon button" onClick={()=> {this.onClickDownload(this.domNode)}}>
                        <i className="download icon"></i>
                        Download as Image
                    </button>
                </div>
                { this.renderImage() }
            </div>
        );
    }

    onClick = () => {
        this.setState({ showImage: !this.state.showImage })
    };

    onClickDownload = node => {
        const name = this.props.selectedEmployee.name;
        domtoimage.toPng(node, { quality: 0.95 })
            .then(function (dataUrl) {
                var link = document.createElement('a');
                link.download = `${name}-signature.png`;
                link.href = dataUrl;
                link.click();
            });
    };

    renderImage() {
        if(this.state.showImage) {
            return (
                <div>
                    <GenerateSignatureImg signatureElement={this.domNode} />
                </div>
            )
        } else {
            return null
        }
    }
}

const mapStateToProps = (state) => {
    return {selectedEmployee: state.selectedEmployee}
};

export default connect (mapStateToProps)(PreviewSignature);

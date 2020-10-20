import './PreviewSignature.css';
import logo from '../../img/logo1.png';
import React from 'react';
import {connect} from 'react-redux'
import GenerateSignatureImg from "../GenerateSignatureImg/GenerateSignatureImg";
import domtoimage from 'dom-to-image';
import {selectedEmployeeReducer, employeesReducer} from '../../reducers'

const PreviewSignature =()=> {

    const [showImage, setShowImage] = React.useState(false);
    const testNode = React.useRef(null)

    React.useEffect(()=>{
        if(showImage){
        setShowImage(showImage => !showImage)
    }
    },[showImage])

    // componentDidUpdate(prevProps, prevState) {
    //     if (prevState.showImage) {
    //         this.setState({ showImage: false })
    //     }
    // }
    const onClick = () => {
        setShowImage(!showImage)
    };

    const onClickDownload = node => {
        const name = employee.name;
        domtoimage.toPng(node, { quality: 0.95 })
            .then(function (dataUrl) {
                var link = document.createElement('a');
                link.download = `${name}-signature.png`;
                link.href = dataUrl;
                link.click();
            });
    };

    const renderImage = () => {
        if(showImage) {
            return (
                <div>
                    <GenerateSignatureImg signatureElement={this.domNode} />
                </div>
            )
        } else {
            return null
        }
    }

    const [employee, dispatch] = React.useReducer(selectedEmployeeReducer, employeesReducer);
   
    //const employee = {id: 1, name: 'Julia A. Slanina', position: 'Founder & CEO', phone: '613-321-4567 Ex 100', fax: '613-867-5309', email: 'jslanina@treehousemedicals.ca'};
    console.log(employee)
        if (!employee) {
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
                    <div id='signaturePreview' className="signaturePreview ui column grid" ref={ testNode }>
                        <div className="column four wide">
                            <img src={logo} alt={'logo'}/>
                        </div>
                        <div className="employee-info column nine wide">
                            <h1>{employee.name}</h1>
                            <p className='position'>{employee.position}</p>
                            <div className="contact-details">
                                <div className={'contact-field'}>
                                    <b className="col-25">Phone:</b>
                                    <p>{employee.phone}</p>
                                </div>
                                <div className={'contact-field'}>
                                    <b className="col-25">Fax:</b>
                                    <p>{employee.fax}</p>
                                </div>
                                <div className={'contact-field'}>
                                    <b className="col-25">Email:</b>
                                    <p><a href={`mailto:${employee.email}`}>{employee.email}</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <button className="ui labeled icon button" onClick={()=> {onClick()}}>
                        <i className="sync icon"></i>
                        Generate Image
                    </button>
                    <button className="ui labeled icon button" onClick={()=> {onClickDownload(testNode)}}>
                        <i className="download icon"></i>
                        Download as Image
                    </button>
                </div>
                { renderImage }
            </div>
        );
    

}

const mapStateToProps = (state) => {
    return {selectedEmployee: state.selectedEmployee}
};

export default connect (mapStateToProps)(PreviewSignature);

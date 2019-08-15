import React from 'react';
import EmployeeList from "./EmployeeList";
import PreviewSignature from './PreviewSignature'

const App = () => {
    return (
        <div className={'ui floating message'} style={{marginTop:'20px', marginRight:'40px', marginLeft:'40px'}}>
            <div className={'ui container grid'}>
                <div className={'ui row'}>
                    <div className={'column six wide'}>
                        <EmployeeList/>
                    </div>
                    <div className={'column ten wide'}>
                        <PreviewSignature/>
                    </div>
                </div>
            </div>
        </div>);
};

export default App;

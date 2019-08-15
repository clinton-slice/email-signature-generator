import {combineReducers} from "redux";

const employeesReducer = () => {
    return [
        {id: 1, name: 'Julia A. Slanina', position: 'Founder & CEO', phone: '613-321-4567 Ex 100', fax: '613-867-5309', email: 'jslanina@treehousemedicals.ca'},
        {id: 2, name: 'Clinton C. Nkemdilim', position: 'Frontend Developer', phone: '613-321-4567 Ex 100', fax: '613-867-5309', email: 'cnkemdilim@treehousemedicals.ca'},
        {id: 3, name: 'Alaya T. Fury', position: 'Full-Stack Developer', phone: '613-321-4567 Ex 100', fax: '613-867-5309', email: 'afury@treehousemedicals.ca'},
        {id: 4, name: 'Tomi G. Bryant', position: 'DevOps Engineer', phone: '613-321-4567 Ex 100', fax: '613-867-5309', email: 'tbryanta@treehousemedicals.ca'},
        {id: 5, name: 'Polly I. Daniels', position: 'Contract Administrator', phone: '613-321-4567 Ex 100', fax: '613-867-5309', email: 'pdaniels@treehousemedicals.ca'},
        {id: 6, name: 'Havins R. Petersen', position: 'Copywriter - Brand Storyteller', phone: '613-321-4567 Ex 100', fax: '613-867-5309', email: 'hpetersen@treehousemedicals.ca'},
        {id: 7, name: 'Michelle P. Freeman', position: 'Customer Success Specialist', phone: '613-321-4567 Ex 100', fax: '613-867-5309', email: 'mfreeman@treehousemedicals.ca'},
        {id: 8, name: 'Clement F. Hooper', position: 'Reporting Analyst', phone: '613-321-4067 Ex 100', fax: '613-867-5305', email: 'chooper@treehousemedicals.ca'}
    ]
};

const selectedEmployeeReducer = (selectedEmployee = null, action) => {
    if (action.type === 'SELECT_EMPLOYEE') {
        return action.payload
    }
    return selectedEmployee;
};

export default combineReducers({
    employees: employeesReducer,
    selectedEmployee: selectedEmployeeReducer
});

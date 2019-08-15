//Action creator
export const selectEmployee = employee => {
    //return an action
    return{
        type: 'SELECT_EMPLOYEE',
        payload: employee
    };
};


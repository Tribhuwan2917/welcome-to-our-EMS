import * as Yup from 'yup';
const digitsOnly = (value) => /^\d+$/.test(value)
export const AddEmployeeDetailsSchema=Yup.object({
    employeeId:Yup.number().required("Employee Id Is Reuired"),
    employeeFirstName:Yup.string().matches(/[A-Z][a-z]+/,"Invalid Employee First Name").required("Employee First Name Is Required"),
    employeeLastName:Yup.string().matches(/[A-Z][a-z]+/,"Invalid Employee Last Name").required("Employee Last Name Is Required"),
    // employeeEmail:Yup.string().email("InValid Email Id: ").required("Employee email is required"),
    employeeDesignation: Yup.string().required("Employee Zip Is Required"),
    employeeAddressCity:Yup.string().matches(/[A-Z][a-z]+/,"Invalid Employee Address City").required("Employee City Is Required"),
    employeeSalaryPerMonth:Yup.number().required("Employee Salary Is Required"),
    employeeGender:Yup.string().required("Employee Gender Is Required"),
    employeeCountry:Yup.string().required("Employee Country Is Required"),
    employeeMobileNo:Yup.string().required("Employee Number Is Required").test('len', 'In Valid Mobile Number', val => val.length === 10).test('Digits only', 'In valid Mobile Number', digitsOnly)

})


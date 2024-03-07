import * as Yup from 'yup';

const digitsOnly = (value) => /^\d+$/.test(value)
export const UpdateEmployeeDetailsSchema=Yup.object({
    employeeId:Yup.number().required("Employee Id Is Required"),
    employeeFirstName:Yup.string().matches(/[A-Z][a-z]+/,"Invalid Employee First Name").required("Employee First Name Is Required"),
    employeeLastName:Yup.string().matches(/[A-Z][a-z]+/,"Invalid Employee Last Name").required("Employee Last Name Is Required"),
    employeeMobileNo:Yup.string().required("Employee Number Is Required").test('len', 'In valid Mobile Number', val => val.length === 10).test('Digits only', 'In valid Mobile Number', digitsOnly),
    employeeDesignation: Yup.string().required("Employee Zip is required"),
    employeeAddressCity:Yup.string().matches(/[A-Z][a-z]+/,"Invalid Employee Address City").required("Employee City Is Required"),
    employeeSalaryPerMonth:Yup.number().required("Employee Salary Is Required"),
    employeeGender:Yup.string().required("Employee Gender Is Required"),
    employeeCountry:Yup.string().required("Employee Country Is Required")

})

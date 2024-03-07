import * as Yup from 'yup';
export const UpdateCurrentProjectSchema=Yup.object({
   
    currentProjectTitle:Yup.string().matches(/[A-Z][a-z]+/,"In Valid Project  Name").required("Project  Name Is Required"),
    currentProjectDescription:Yup.string().required("Project description Is Required"),
    currentProjectObjective: Yup.string().required("Project Objective Is Required"),
    employeeId:Yup.number().required("Employee Id Is Required")

})

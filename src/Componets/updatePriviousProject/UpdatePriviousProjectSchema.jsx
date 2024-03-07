import * as Yup from 'yup';
export const UpdatePriviousProjectSchema=Yup.object({
   
    priviousProjectTitle:Yup.string().matches(/[A-Z][a-z]+/,"In Valid Project Title").required("Project Title Is Required"),
    priviousProjectDescription:Yup.string().required("Project Description Is Required"),
    priviousProjectObjective: Yup.string().required("Project Objective Is Required"),
    employeeId:Yup.number().required("Project Employee Id Is Required")

})

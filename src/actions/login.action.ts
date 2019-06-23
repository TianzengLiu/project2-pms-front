import { project2_pms } from "../include/axios";



export const logintypes={

    INVALID_CREDENTIALS:'INVALID_CREDENTIALS',
    SUCCESSFUL_LOGIN:'SUCCESSFUL LOGIN'
}

export const loginaction = (username:string, history, password:string)=> async (dispatch) =>{



    try{

       const reqBody = {
            username: username,
            password: password
        }

        // const response = await project2_pms.get('/users/username/' + username)
         const response = await project2_pms.post('/user/login', reqBody)

        

        if(response.status === 200){
            const loginUser = response.data
            dispatch({
                payload:{
                    user: loginUser
                },
                type: logintypes.SUCCESSFUL_LOGIN
            })
            
            history.push('/finance') 
            
            
           
        }else{
            dispatch({
                type:logintypes.INVALID_CREDENTIALS
            })
        }
    }catch(err){
        console.log(err)
    }


}
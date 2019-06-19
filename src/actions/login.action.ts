import { project2_pms } from "../include/axios";



export const logintypes={

    INVALID_CREDENTIALS:'INVALID_CREDENTIALS',
    SUCCESSFUL_LOGIN:'SUCCESSFUL LOGIN'
}

export const loginaction = (username:string, password:string)=> async (dispatch:any) =>{

    
  
    try{

        const credentials = {
            username,
            password
        }
        // const response = await project2_pms.get('/users/username/' + username)
         const response = await project2_pms.post('/login', credentials)


        if(response.status === 200){
            const user = response.data
            dispatch({
                payload:{
                    user: user
                },
                type: logintypes.SUCCESSFUL_LOGIN
            })
        }else{
            dispatch({
                type:logintypes.INVALID_CREDENTIALS
            })
        }
    }catch(err){
        console.log(err)
    }


}
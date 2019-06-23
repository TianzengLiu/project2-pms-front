import { project2_pms } from '../include/axios'

export const fetchUsersTypes = {
    SUCCESSFUL_USERS_FETCH: 'USERS_FETCH_SUCCESSFUL',
    UNSUCCESSFUL_USERS_FETCH: 'USERS_FETCH_UNSUCCESSFUL'
}

export const findAllUsersAction = () => async(dispatch) =>{
    
    try{

        const response = await project2_pms.get('/user')
        if(response.status === 200){
            const users = response.data
            dispatch({
                payload:{
                    users: users
                },
                type: fetchUsersTypes.SUCCESSFUL_USERS_FETCH
            })
        } else{
            dispatch({
                type: fetchUsersTypes.UNSUCCESSFUL_USERS_FETCH
            })
        }
    } catch(err){
        console.log(err)
    }
} 
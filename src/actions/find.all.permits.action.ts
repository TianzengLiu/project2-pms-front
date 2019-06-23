import { project2_pms } from '../include/axios'

export const fetchPermitsTypes = {
    SUCCESSFUL_PERMITS_FETCH: 'PERMITS_FETCH_SUCCESSFUL',
    UNSUCCESSFUL_PERMITS_FETCH: 'PERMITS_FETCH_UNSUCCESSFUL'
}

export const findAllPermitsAction = () => async(dispatch) =>{
    
    try{

        const response = await project2_pms.get('/permit')
        if(response.status === 200){
            const permits = response.data
            dispatch({
                payload:{
                    permits: permits
                },
                type: fetchPermitsTypes.SUCCESSFUL_PERMITS_FETCH
            })
        } else{
            dispatch({
                type: fetchPermitsTypes.UNSUCCESSFUL_PERMITS_FETCH
            })
        }
    } catch(err){
        console.log(err)
    }
} 
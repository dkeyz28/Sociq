import { supabase } from "../lib/supabase";

export const getUserData = async(userId)=>{
    try{
       const {data, error} = await supabase
       .from('Users')
       .select()
       .eq('id, userId')
       .single();
       if(error){
        return {success: false, msg: error?.message};
       }
       return {success: true, data}
    }catch(error){
        console.log('got error: ', error);
        return{success: false, msg:error.message};
    }
}
export const updateUser = async(userId, data)=>{
    try{
       const { data: resData, error} = await supabase
       .from('Users')
       .update(data)
       .eq('id', userId)
       .select()
       .single();
       
       if(error){
        return {success: false, msg: error?.message};
       }
       return {success: true, data}
    }catch(error){
        console.log('got error: ', error);
        return{success: false, msg:error.message};
    }
}
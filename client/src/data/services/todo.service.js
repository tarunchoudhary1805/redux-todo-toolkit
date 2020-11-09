import {api,get,post,getHeaders} from './services.common'

export const createTodoItemAPI = async (todoItem) => {
    let url = `${api}create`
   let headers = getHeaders()
   return await post(url,todoItem,headers)
}
export const loadTodoItemAPI =async () =>{
    let url = `${api}`
    let headers = getHeaders()
return await get(url,headers)
}
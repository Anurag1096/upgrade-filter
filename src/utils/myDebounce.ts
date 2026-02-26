

export function myDebounce<T extends (...args:any[])=>void>(callback:T ,delay:number){
let timer:ReturnType<typeof setTimeout>| null=null

return (...args:Parameters<T>)=>{
    if(timer) clearTimeout(timer)
  
    timer=setTimeout(()=>{
      callback(...args)
    },delay)

}
}
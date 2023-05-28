export const getBuffer=(fileData:Blob)=>{
    return function(resolve:any){
const reader= new FileReader()
reader.readAsArrayBuffer(fileData)
reader.onload= function (){
    let arrayBuffer= reader.result
    resolve(arrayBuffer)
}
    }
}
export function FormatDate(date:any){
    return new Date(date).toLocaleDateString('en-Us', {
        year:'numeric',
        month:'long',
        day:'numeric'
    })
}

export function FirstToUpper(text:string){
    return String(text).charAt(0).toUpperCase() + String(text).slice(1)
}
function Select(props:any){
    return(
        <select value={props.value} onChange={(e) => props.onValueChange(e.target.value)} className={`flex h-10 items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 w-48 ${props.className}`} >
            {props.children}
        </select>
    )
}

function Option(props:any){
    return(
        <>
            <option className={` ${props.className}`} value={props.value}>{props.children}</option>
        </>
    )
}

export { Select, Option }
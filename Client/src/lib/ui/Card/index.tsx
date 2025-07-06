function Card(props:any){
    return(
        <div className={`rounded-lg bg-white text-gray-900 ${props.className}`}>
            {props.children}
        </div>
    )
}

function CardHeader(props:any){
    return(
        <div className="flex flex-col space-y-1.5 p-6">
            {props.children}
        </div>
    )
}

function CardTitle(props:any){
    return(
        <h3 className="text-2xl font-semibold leading-none tracking-tight">
            {props.children}
        </h3>
    )
}

function CardDescription(props:any){
    return(
        <p className="text-sm text-gray-600">
            {props.children}
        </p>
    )
}

export {Card, CardHeader, CardTitle, CardDescription}
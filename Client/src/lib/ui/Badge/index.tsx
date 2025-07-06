function Badge(props:any){
    const {children, className} = props

    return(
        <div className={`bg-zinc-200 inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent ${className} `} >
            {children}
        </div>
    )
}
export default Badge
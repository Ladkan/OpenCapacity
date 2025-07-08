import { FirstToUpper } from "../../utils"

function Tab(props:any){
    return(
        <div className={`${props.className}`}>
            {props.children}
        </div>
    )
}

function TabList(props:any){
    return(
        <div className={`h-10 items-center justify-center rounded-md bg-zinc-200 p-1 text-zinc-500 ${props.className}`}>
            {props.children}
        </div>
    )
}

function TabTrigger(props:any){
    return(
        <button 
        onClick={() => props.setActive(props.value)}
        className={`cursor-pointer inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${props.active === props.value && 'bg-white text-gray-900 shadow-2xs'} ${props.className}`}>
            {FirstToUpper(props.value)}
        </button>
    )
}

function TabContent(props:any){
    return(
        <div className={`ring-offset-background focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-6 ${props.active != props.value && 'hidden'} ${props.className}`}>
            {props.children}
        </div>
    )
}

export {Tab, TabList, TabContent, TabTrigger}
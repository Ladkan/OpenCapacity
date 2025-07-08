import { FirstToUpper } from "../../utils"

function InputGroup(props:any){
    return(
        <div className={`${props.className}`} >
            <label for={props.name} className="block text-sm/6 font-medium text-gray-900" >{FirstToUpper(props.name)}</label>
            <div className="mt-2">
                <input onChange={props.action} type={props.type} name={props.name} id={props.name} placeholder={props.placeholder} className="w-full border-gray-200 border p-2 rounded-lg text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" />
            </div>
        </div>
    )
}

export {InputGroup}
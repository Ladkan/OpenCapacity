function Modal(props:any){
    return(
        <div className={`${!props.active && 'hidden'}  z-50 relative ${props.className} `}>
            <div className="fixed inset-0 bg-gray-700/75 transition-opacity" aria-hidden="true"></div>
            <div className="fixed inset-0 z-50 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    
                    <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 ms:w-full sm:may-w-lg">
                        {props.children}
                    </div>

                </div>
            </div>
        </div>
    )
}

function ModalBottom(props:any){
    return(
        <div className={`bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse ms:px-6 gap-4 ${props.className}`}>
            {props.children}
        </div>
    )
}

export {Modal, ModalBottom}
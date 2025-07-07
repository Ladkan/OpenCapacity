import { useQuery } from "@tanstack/react-query"
import { getAllListings } from "../lib/query/listings.queryOptions"

function Market(){
        const {data} = useQuery(getAllListings())
        console.log(data)
    return(
        <>
        </>
    )
}

export default Market
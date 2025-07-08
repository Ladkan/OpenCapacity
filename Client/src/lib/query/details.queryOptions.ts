import { queryOptions } from "@tanstack/react-query";
import axios from "axios";
import config from "../../config";

export function getDetail(id:string){
    return queryOptions({
        queryKey: ['detail_'+id],
        queryFn: () => axios.get(config.API_URL+"/details/"+id),
        staleTime: 50000,
        placeholderData: (prev) => prev
    })
}
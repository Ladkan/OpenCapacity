import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import config from "../../config";

axios.defaults.withCredentials = true

export function getUser(){
    return axios.get(config.API_URL+"/user")
}

export function useGetUser() {
    return useQuery({
        queryKey: ['user'],
        queryFn: () => getUser(),
        staleTime: Infinity
    })
}

export function useLogin(){
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (data:any) => {
            return axios.post(config.API_URL+"/auth/login", data)
        },
        onSuccess: (user) => {
            queryClient.setQueryData(['user'], user)
        }
    })

}

export function useRegister(){
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (data) => {
            return axios.post(config.API_URL+"/auth/register", data)
        },
        onSuccess: (user) => {
            queryClient.setQueryData(['user'], user)
        }
    })

}
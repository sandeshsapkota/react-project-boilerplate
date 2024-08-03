import {useQuery} from "@tanstack/react-query";
import http from "@/utils/http/http.utils";
import Front from "@/hoc/layout/front";


const Index = () => {
    /*
    * ERROR API
    * */

    // const {data, isLoading, isError, error} = useQuery({
    //     queryKey: [],
    //     retry: 2,
    //     queryFn: () => {
    //         return http().get("https://dummyjson.com/user/me")
    //     },
    // })


    const {data:countryList} = useQuery({
        queryKey: ['countryList'],
        retry: 2,
        queryFn: () => {
            return http().get("https://restcountries.com/v3.1/all")
        },
        select: data => {
            return data.data.map((item:any) => ({name: item?.name?.common, capital: item.capital}))
        }
    })

    console.log(countryList)

    return (
        <Front>
            hello
        </Front>
    );
};

export default Index;

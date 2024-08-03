import Front from "@/hoc/layout/front";
import {useQuery} from "@tanstack/react-query";
import http from "@/utils/http/http.utils";

const Homepage = () => {

    const {data:countiresData} = useQuery({
        queryKey: ['courtrylist'],
        retry: 2,
        queryFn: () => {
            return http().get("https://restcountries.com/v3.1/all")
        },
        select: data => {
            return data.data.map((item:any) => ({name: item?.name?.common, capital: item.capital}))
        }
    })

    console.log(countiresData)



    return (
      <Front>
        <div className="p-8 text-xl items-center justify-center">Dashboard</div>
      </Front>
  );
};

export default Homepage;

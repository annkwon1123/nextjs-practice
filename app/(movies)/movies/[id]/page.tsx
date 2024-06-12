import { Suspense } from "react";
import { API_URL } from "../../../../lib/constants";
import MovieInfo from "../../../components/movie-info";
import MovieVideos from "../../../components/movie-videos";

interface IParams {
    params: {id: string};
}

export async function generateMetadata({params: {id}} : IParams) {
    return {
        title: "lalalal",
    };
}

export default async function MovieDetail({params: {id},}: IParams) {
    return (
    <div>
        <Suspense fallback={<h1>Loading movie info</h1>} >
            <MovieInfo id={id} />
        </Suspense>
        <Suspense fallback={<h1>Loading movie videos</h1>} >           
            <MovieVideos id={id} />
        </Suspense>
    </div>
    );
} 
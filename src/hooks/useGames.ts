import  { FetchResponse } from "../services/api-client";
import ms from 'ms'

import { GameQuery } from "../App";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { Platform } from "./usePlatforms";
import APIClient from "../services/api-client";
export interface Game {
  id: number;
  name: string;
  background_image: string;
  metacritic: number;
  parent_platforms:{platform: Platform}[];
  rating_top: number;


}


const apiClient = new APIClient<Game>('/games')

const useGames = (gameQuery: GameQuery) => 
useInfiniteQuery<FetchResponse<Game>, Error>({
  queryKey: ['games', gameQuery],
  queryFn: ({pageParam = 1}) => apiClient
                    .getAll({
                      params: {
                        genres: gameQuery.genreId,
                        parent_platforms: gameQuery.platformId,
                        ordering: gameQuery.sortOrder,
                        search: gameQuery.searchText,
                        page: pageParam
                    }}),
          
  staleTime: ms('24h'),
  getNextPageParam: (lastPage, allPages) => {
    return lastPage.next ? allPages.length + 1 : undefined;
  }
})

export default useGames
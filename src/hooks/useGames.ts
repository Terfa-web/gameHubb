import  { FetchResponse } from "../services/api-client";

import { GameQuery } from "../App";
import { useQuery } from "@tanstack/react-query";
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
useQuery<FetchResponse<Game>, Error>({
  queryKey: ['games', gameQuery],
  queryFn: () => apiClient
                    .getAll({
                      params: {
                        genres: gameQuery.genre?.id,
                        parent_platforms: gameQuery.platform?.id,
                        ordering: gameQuery.sortOrder,
                        search: gameQuery.searchText
                    }}),
          
  staleTime: 24 * 60 * 60 * 1000
})

export default useGames
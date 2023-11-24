import React from "react";
import useScreenShots from "../hooks/useScreenShots";
import { SimpleGrid, Image } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  gameId: number;
}
const GameScreenShots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenShots(gameId);
  const images = data?.results;

  if (isLoading) return null;

  if (error) throw error;

  return (
    <>
      <SimpleGrid minChildWidth="350px" gap={2}>
        {images?.map((image) => (
          <Image key={image.id} src={getCroppedImageUrl(image.image)} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameScreenShots;

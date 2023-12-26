import { Box, Text } from "@chakra-ui/react";

interface ICardInfo {
  mainContent?: string;
  content?: string;
}

export default function CardInfo({ mainContent, content }: ICardInfo) {
  return (
    <Box
      backgroundColor={"white"}
      minHeight={"180px"}
      padding={8}
      borderRadius={"2xl"}
    >
      <Text fontSize={"2xl"} fontWeight={"bold"}>{mainContent}</Text>
      <Text fontSize={"xl"}>{content}</Text>
    </Box>
  );
}

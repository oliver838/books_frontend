import { Paper, Box, Text, Image, Badge, Group } from "@mantine/core";
import { IconBook, IconStar } from "@tabler/icons-react";
import "./MyCard.css";

export const MyCard = ({
  title,
  author,
  cover,
  description,
  rating,
  name,
}) => {
  return (
    <Paper radius="lg" p="md" className="mycard-paper">
      <div className="mycard-border" />

      {/* BORÍTÓ */}
      <Box className="mycard-cover-wrapper">
        <Image src={cover} alt={title} fallbackSrc="https://placehold.co/600x400?text=Placeholder" className="mycard-cover" />
      </Box>

      {/* TARTALOM */}
      <Box className="mycard-content">
        <Group spacing="xs" align="center">
          <IconBook size={18} color="#a88cff" />
          <Badge className="mycard-category">{name}</Badge>
        </Group>

        <Text className="mycard-title">{title}</Text>
        <Text className="mycard-author">{author}</Text>
        <Text className="mycard-description">{description}</Text>

        {rating && (
          <Group spacing={4} align="center" className="mycard-rating">
            <IconStar size={16} color="#ffd166" />
            <span>{rating} / 5</span>
          </Group>
        )}
      </Box>
    </Paper>
  );
};

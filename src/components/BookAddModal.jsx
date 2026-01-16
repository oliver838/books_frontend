import React, { useState } from "react";
import { Modal, TextInput, Textarea, NumberInput, Button, Select, Stack, Text } from "@mantine/core";
import { IconBook, IconX } from "@tabler/icons-react";
import "./bookaddmodal.css";
import { addNewBook } from "../utils";

export const BookAddModal = ({ opened, onClose}) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [category_id, setCategory] = useState("");
  const [rating, setRating] = useState(0);
const handleSubmit = async () => {
  // Kötelező mezők ellenőrzése
  if (!title || !author || !category_id) return;

  const bookToSave = {
    title,
    author,
    description,
    category_id:2, 
    rating:2,
    cover :"alma", 
  };

  try {
    await addNewBook(bookToSave);
    console.log(bookToSave);
    
    setTitle("");
    setAuthor("");
    setDescription("");
    setCategory("");
    setRating(0);
    onClose();
  } catch (error) {
    console.error("Hiba könyv létrehozásakor:", error);
  }
};


  return (
    <Modal
      opened={opened}
      onClose={onClose}
      centered
      withCloseButton={false}
      classNames={{ content: 'lux-glass-cardd' }}
    >
      <Stack spacing="md">
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div className="lux-glass-icon">
            <IconBook size={22} />
          </div>
          <Text size="lg" fw={600}>Új könyv hozzáadása</Text>
        </div>

        {/* Close icon */}
        <div
          className='lux-glass-iconn'
          style={{ position: 'absolute', top: '14px', right: '14px', cursor: 'pointer' }}
        >
          <IconX size={22} onClick={onClose} />
        </div>

        {/* Inputok */}
        <TextInput label="Cím" placeholder="Könyv címe" value={title} onChange={(e) => setTitle(e.target.value)} />
        <TextInput label="Szerző" placeholder="Szerző neve" value={author} onChange={(e) => setAuthor(e.target.value)} />
        <Textarea label="Leírás" placeholder="Rövid leírás" value={description} onChange={(e) => setDescription(e.target.value)} />
        <Select
          label="Kategória"
          placeholder="Válassz kategóriát"
          value={category_id}
          onChange={setCategory}
          data={[
            { value: "Sci-Fi", label: "Sci-Fi" },
            { value: "Regény", label: "Regény" },
            { value: "Krimi", label: "Krimi" },
            { value: "Történelem", label: "Történelem" },
          ]}
        />
        <NumberInput
          label="Értékelés"
          placeholder="1-10"
          min={0}
          max={10}
          value={rating}
          onChange={setRating}
        />

        <Button fullWidth mt="sm" onClick={handleSubmit}>
          Hozzáadás
        </Button>
      </Stack>
    </Modal>
  );
};

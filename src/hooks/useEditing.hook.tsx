import { useState } from "react";

export const useEditing = () => {
  const [isEditing, setEditing] = useState(false);

  const handleEdit = () => {
    setEditing(!isEditing);
  };
  return {
    isEditing,
    handleEdit,
  };
};

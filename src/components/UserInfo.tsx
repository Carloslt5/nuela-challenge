import { useEditing } from "../hooks/useEditing.hook";
import { User } from "../types/User.types";

type UserInfoProps = {
  user: User;
};

export const UserInfo = ({ user }: UserInfoProps) => {
  const { isEditing, handleEdit } = useEditing();

  return (
    <article className="flex items-center gap-2 py-2 my-2 border-gray-500 h-28 border-y">
      <div className="flex items-center justify-center h-full text-5xl bg-[#D6D5FF] rounded-2xl text-nuela-primary aspect-square">
        MM
      </div>
      <div className="flex flex-col justify-between h-full">
        {!isEditing ? (
          <>
            <h3 className="font-bold">
              {user.firstName} {user.lastName}
            </h3>
            <p>{user.email}</p>
            <p className="text-sm">{user.phone}</p>
          </>
        ) : (
          <h3 className="font-bold">Formulario para editar el perfil...</h3>
        )}
      </div>
      <button className="p-4 ml-auto text-nuela-primary" onClick={handleEdit}>
        {!isEditing ? "Edit" : "Guardar"}
      </button>
    </article>
  );
};

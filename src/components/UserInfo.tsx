export const UserInfo = () => {
  return (
    <article className="flex items-center gap-2 py-2 my-2 border-gray-500 h-28 border-y">
      <div className="flex items-center justify-center h-full text-5xl bg-[#D6D5FF] rounded-2xl text-nuela-primary aspect-square">
        MM
      </div>
      <div className="flex flex-col justify-between h-full">
        <h3 className="font-bold">Marta Martinez</h3>
        <p>profesora123@colegio.com</p>
        <p className="text-sm">+34 666 555 444</p>
      </div>
      <button className="p-4 ml-auto text-nuela-primary">Edit</button>
    </article>
  );
};

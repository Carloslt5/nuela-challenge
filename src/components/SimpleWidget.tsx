type SimpleWidgetProps = {
  title: string;
  value: number;
};
export const SimpleWidget = ({ title, value }: SimpleWidgetProps) => {
  return (
    <div className="flex flex-col w-full gap-4 p-2 bg-white rounded-xl">
      <h4 className="text-sm">{title}</h4>
      <p className="text-3xl font-bold">{value} horas</p>
    </div>
  );
};

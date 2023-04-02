type Props = {
  title: string;
  value: string;
};

function Variant({ title, value }: Props) {
  return (
    <div className="flex">
      <button className="mr-2 rounded-md bg-slate-200 px-2 py-1 hover:bg-slate-300 focus:outline-none">
        {title}
      </button>
    </div>
  );
}

export default Variant;

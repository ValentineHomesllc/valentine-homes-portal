export function Button({ children, ...props }) {
  return (
    <button className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded" {...props}>
      {children}
    </button>
  );
}
export default function Sectionone() {
  return <>{Banner("Our Techonology", 4)}</>;
}

export function Banner(name: string, num: number) {
  return (
    <section className="bg-blue-500 mt-10 p-5 rounded-3xl overflow-clip">
      <div className="  flex justify-between items-center text-white text-4xl ">
        {Array.from({ length: num }).map((_, index) => (
          <div key={index} className="flex gap-2 justify-center items-center">
            <div className="whitespace-nowrap">{name}</div>
            <div className="px-4">+</div>
          </div>
        ))}
      </div>
    </section>
  );
}

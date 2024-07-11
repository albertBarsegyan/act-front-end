const companiesList = [
  { id: 0, content: <div>Icon 1</div> },
  { id: 2, content: <div>Icon 2</div> },
  { id: 3, content: <div>Icon 2</div> },
  { id: 4, content: <div>Icon 2</div> },
  { id: 5, content: <div>Icon 2</div> },
];

export function CompaniesSection() {
  return (
    <div className="mt-20">
      <div className="border-secondary relative flex h-48 w-full flex-col items-center justify-center rounded-3xl border-4 p-5 md:rounded-full md:p-10">
        <p className="text-center text-xl font-bold md:text-4xl">TECHNOLOGIES & HARDWARE</p>
        <p className="mt-2 text-lg md:text-3xl">USED BY HYDRA VR.</p>
        <div className="bg-secondary absolute -bottom-8 h-16 w-16 rounded-full"></div>
        <div className="bg-primary absolute -bottom-7 h-14 w-14 rounded-full"></div>
      </div>

      <div className="mt-20 flex flex-wrap items-center justify-center gap-5">
        {companiesList.map((company) => (
          <div key={company.id}>{company.content}</div>
        ))}
      </div>
    </div>
  );
}

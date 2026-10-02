export default function Home() {
  return (
    <main>
      <header className="relative flex min-h-svh flex-col overflow-hidden bg-[#d2d4d1] px-[4vw] text-[#591e2a] selection:bg-[#591e2a] selection:text-[#d2d4d1]">
        <h1 className="pt-[2vh] text-[max(115px,23.1vw)] font-semibold max-lg:leading-[1.08] tracking-[-0.045em]">terrane</h1>
        <div className="mt-[3vh] border-t-2 border-[#591e2a] pt-5">
          <p className="text-[max(14px,1.7vw)]">Everything, eventually.</p>
        </div>
      </header>
    </main>
  );
}
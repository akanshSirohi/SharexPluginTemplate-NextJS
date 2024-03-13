import Image from "next/image";

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen">
      <div className="text-4xl text-center relative">
          {/* <img src="" alt="sharex-logo" className="mx-auto mb-4 w-[200px] h-auto" /> */}
          <Image src="logo.png" alt="sharex-logo" width={200} height={200} className="mx-auto mb-4" />
          <div className="mt-8">Hello, ShareX!</div>
      </div>
    </main>
  );
}

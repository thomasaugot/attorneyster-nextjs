import Image from "next/image";
import banner from "/src/assets/img/homepage/banner-main.svg";

export default function Home() {
  return (
    <main>
      <Image src={banner} width={"100vw"} height={"auto"} alt="logo" />
    </main>
  );
}

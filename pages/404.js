import bao from "../public/sad-bao.jpeg";
import Image from "next/image";
import Link from "next/link";

export default function Custom404() {
  return (
    <div
      style={{
        margin: "auto",
        width: "25%",
      }}
    >
      <h1 style={{ textAlign: "center" }}>
        404 - There's Momo on the{" "}
        <Link href="/menu">
          <a>Menu!</a>
        </Link>
      </h1>
      <Image src={bao} width={4000} height={4000}></Image>
    </div>
  );
}

import Image from "next/image";

/*
 * Real Old Trafford photograph:
 * "Old Trafford, view from Stretford End 1.jpg"
 * Photographer: Joris van Rooden
 * License: CC BY-SA 4.0
 * Source: Wikimedia Commons
 */
const OLD_TRAFFORD_IMAGE = "/old-trafford.jpg";

export default function StadiumBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url("${OLD_TRAFFORD_IMAGE}")`,
          backgroundPosition: "center 48%",
        }}
        aria-hidden="true"
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(11,0,16,0.58) 0%, rgba(55,0,60,0.48) 35%, rgba(11,0,16,0.78) 72%, rgba(11,0,16,0.94) 100%)",
        }}
        aria-hidden="true"
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 30%, rgba(55,0,60,0.12) 0%, rgba(11,0,16,0.34) 72%, rgba(11,0,16,0.72) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="absolute inset-x-0 bottom-0 flex justify-center">
        <Image
          src="/league-logo.jpg"
          alt=""
          width={224}
          height={224}
          className="mb-6 h-40 w-40 rounded-full opacity-[0.07] mix-blend-screen sm:h-56 sm:w-56"
        />
      </div>
    </div>
  );
}

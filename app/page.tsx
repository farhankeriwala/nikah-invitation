import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { dancingScript, karla } from "@/fonts";
import { IconBrandGoogleMaps, IconBrandWhatsapp } from "@tabler/icons-react";
import Link from "next/link";

export default function Home() {
  return (
      <main className="min-h-screen bg-gradient-to-br from-[#fefaf4] to-[#f5eadd] flex flex-col items-center justify-center text-center p-6">
        <Card className="max-w-2xl w-full border-none bg-[#fcf5ed] shadow-xl">
          <CardContent className="space-y-6 px-6 py-10">
            <div className="space-y-4">
              <Image
                  src="/assets/bismillah.png"
                  alt="bismillah"
                  width={400}
                  height={50}
                  className="mx-auto"
              />
              <h1 className={`text-2xl md:text-3xl mt-12 ${karla.className} text-[#5f4d3f]`}>
                We, Mr & Mrs Hifzur-Rehman Kaka, are delighted to invite you to the Nikkah and Walima of our beloved son
              </h1>
              <h1 className={`text-6xl md:text-7xl font-bold ${dancingScript.className} text-[#a1664c]`}>Humza</h1>
              <p className={`text-4xl md:text-6xl font-bold ${dancingScript.className} text-[#a1664c]`}>&</p>
              <h1 className={`text-6xl md:text-7xl font-bold ${dancingScript.className} text-[#a1664c]`}>Farheen</h1>
            </div>

            <div className="mt-8 text-[#5f4d3f] space-y-6">
              <div className="shadow-lg rounded-xl p-6">
                <h3 className="text-2xl font-semibold mb-2">Nikkah</h3>
                <div className="space-y-1">
                  <p><strong>Date:</strong> Saturday, 31st May 2025</p>
                  <p><strong>Time:</strong> 10:00 AM</p>
                  <p><strong>Venue:</strong> Shahi Jama Masjid, Near Ellis Bridge</p>
                </div>
              </div>

              <div className="shadow-lg rounded-xl p-6">
                <h3 className="text-2xl font-semibold mb-2">Walima</h3>
                <div className="space-y-1">
                  <p><strong>Date:</strong> Saturday, 31st May 2025</p>
                  <p><strong>Time:</strong> 8:00 PM</p>
                  <Link
                      className="flex items-center gap-2 text-blue-600 hover:underline"
                      href="https://www.google.com/maps?q=XG94+2V+Crystal+Farm,+Ahmedabad,+Sarkhej-Okaf,+Gujarat+380055&ftid=0x395e9b63a4b655b1:0x93e9ec94981d3037"
                      target="_blank"
                  >
                    <IconBrandGoogleMaps className="h-5 w-5" />
                    Crystal Farm, Sarkhej-Okaf, Ahmedabad
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>

          <CardFooter className="flex justify-center py-6">
            <Link
                href="https://wa.me/447490410160?text=Assalamu%20Alaikum%2C%20I%20would%20like%20to%20RSVP%20for%20the%20Nikah%20ceremony%20of%20Humza%20and%20Farheen."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-[#8b5e3c] text-white px-6 py-3 rounded-full shadow hover:bg-[#70492e] transition-all duration-300"
            >
              <IconBrandWhatsapp className="h-5 w-5 mr-2 shrink-0 text-white" /> RSVP via WhatsApp
            </Link>
          </CardFooter>
        </Card>

        <footer className="mt-12 text-sm text-[#7a6654]">
          With love, <br /> Mr & Mrs Hifzur Rehman Kaka
        </footer>
      </main>
  );
}
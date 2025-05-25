import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { dancingScript, karla } from "@/fonts";
import { IconBrandWhatsapp } from "@tabler/icons-react";
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
              <h1 className={`text-xl md:text-2xl my-12 ${karla.className} text-[#5f4d3f]`}>
                Mr. & Mrs. Hifzur-Rehman Kaka, are delighted to invite you to the Nikkah and Walima of our beloved son
              </h1>
              <h1 className={`text-7xl font-bold ${dancingScript.className} text-[#a1664c]`}>Humza</h1>
              <p className={`text-5xl font-bold ${dancingScript.className} text-[#a1664c]`}>&</p>
              <h1 className={`text-7xl font-bold ${dancingScript.className} text-[#a1664c]`}>Farheen</h1>
            </div>

            <section className="mt-8 text-[#5f4d3f] space-y-6">
              <div className="shadow-lg rounded-xl p-6">
                <h3 className="text-2xl font-semibold mb-2">Nikkah</h3>
                <div className="space-y-1">
                  <p><strong>Date:</strong> Saturday, 31st May 2025</p>
                  <p><strong>Time:</strong> 10:00 AM</p>
                  <Link className={"text-blue-600 hover:underline"} href={"https://www.google.com/maps/place/Shahi+Jam-e-Masjid+Bhadra/@23.0214014,72.5736345,1286m/data=!3m1!1e3!4m10!1m2!2m1!1ssahi+juma+masjid+ahmedabad!3m6!1s0x395e8452046d29cb:0xa5b8924b54c806dc!8m2!3d23.0227183!4d72.5789408!15sChpzYWhpIGp1bWEgbWFzamlkIGFobWVkYWJhZFocIhpzYWhpIGp1bWEgbWFzamlkIGFobWVkYWJhZJIBBm1vc3F1ZZoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VSaWFrczNiVXhCRUFFqgFZEAEqFCIQc2FoaSBqdW1hIG1hc2ppZCgAMh8QASIb6CyxApN0k6SfWIdZAtB1py2ODIekEXU4ozYnMh4QAiIac2FoaSBqdW1hIG1hc2ppZCBhaG1lZGFiYWTgAQD6AQQIABAZ!16s%2Fm%2F012dwtpy?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoASAFQAw%3D%3D"}><strong>Venue:</strong> Shahi Jama Masjid, Near Ellis Bridge, Lal Darwaja, Ahmedabad</Link>
                </div>
              </div>
              <div className="shadow-lg rounded-xl p-6">
                <h3 className="text-2xl font-semibold mb-2">Walima</h3>
                <div className="space-y-1">
                  <p><strong>Date:</strong> Saturday, 31st May 2025</p>
                  <p><strong>Time:</strong> 8:00 PM</p>
                  <Link href={"https://maps.app.goo.gl/oHMnfniyGtkeqjN48?g_st=iw"} className={"text-blue-600 hover:underline"}><strong>Venue:</strong> Crystal Farm, Sarkhej-Olaf, Ahmedabad</Link>
                </div>
              </div>
            </section>
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
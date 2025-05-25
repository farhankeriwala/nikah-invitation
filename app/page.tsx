import Image from "next/image";
import {Card, CardContent, CardFooter} from "@/components/ui/card";
import {parisienne, karla} from "@/fonts";
import {IconBrandWhatsapp} from "@tabler/icons-react";
import Link from "next/link";

export default function Home() {
    return (
        <main
            className="min-h-screen bg-[url('/assets/invite-bg.png')] bg-cover bg-center flex flex-col items-center justify-center text-center p-6">
            <Card className="max-w-3xl w-full border border-[#e6d6c1] bg-[#fcf5ed]/90 shadow-2xl rounded-[2rem]">
                <CardContent className="space-y-8 px-8 py-12">
                    <div className="space-y-6">
                        <Image
                            src="/assets/bismillah.png"
                            alt="bismillah"
                            width={300}
                            height={40}
                            className="mx-auto"
                        />
                        <p className={`text-lg md:text-xl ${karla.className} text-[#5f4d3f] italic`}>With the blessings
                            of Allah (SWT)</p>
                        <h1 className={`text-xl md:text-3xl ${karla.className} text-[#5f4d3f] leading-relaxed`}>
                            Mr. & Mrs. Hifzur-Rehman Kaka cordially request the honour of your presence at the Nikkah
                            and Walima celebration of their beloved son
                        </h1>
                        <div className={"my-8 flex flex-col items-center space-y-2"}>
                            <h2 className={`text-7xl md:text-7xl font-bold ${parisienne.className} text-[#a1664c]`}>Humza</h2>
                            <p className={`text-5xl md:text-6xl font-bold ${parisienne.className} text-[#a1664c]`}>&</p>
                            <h2 className={`text-7xl md:text-7xl font-bold ${parisienne.className} text-[#a1664c]`}>Farheen</h2>
                        </div>
                    </div>

                    <section className="mt-10 text-[#5f4d3f] space-y-10">
                        <div className="rounded-2xl p-6 shadow-xl border-[#e7daca]">
                            <h3 className="text-2xl font-semibold mb-3">Nikkah Ceremony</h3>
                            <div className={"flex flex-col space-y-2"}>
                                <p><strong>Date:</strong> Saturday, 31st May 2025</p>
                                <p><strong>Time:</strong> 10:00 AM</p>
                                <Link
                                    className="text-blue-700 hover:underline"
                                    href="https://www.google.com/maps/place/Shahi+Jam-e-Masjid+Bhadra/@23.0214014,72.5736345,1286m/data=!3m1!1e3!4m10!1m2!2m1!1ssahi+juma+masjid+ahmedabad!3m6!1s0x395e8452046d29cb:0xa5b8924b54c806dc"
                                    target="_blank"
                                >
                                    <strong>Venue:</strong> Shahi Jama Masjid, Lal Darwaja, Ahmedabad
                                </Link>
                            </div>
                        </div>

                        <div className="rounded-2xl p-6 shadow-xl border-[#e7daca]">
                            <h3 className="text-2xl font-semibold mb-3">Walima Reception</h3>
                            <div className={"flex flex-col space-y-2"}>
                                <p><strong>Date:</strong> Saturday, 31st May 2025</p>
                                <p><strong>Time:</strong> 8:00 PM</p>
                                <Link
                                    href="https://maps.app.goo.gl/oHMnfniyGtkeqjN48?g_st=iw"
                                    target="_blank"
                                    className="text-blue-700 hover:underline"
                                >
                                    <strong>Venue:</strong> Crystal Farm, Sarkhej-Olaf, Ahmedabad
                                </Link>
                            </div>
                        </div>
                    </section>
                </CardContent>

                <CardFooter className="flex justify-center py-6">
                    <Link
                        href="https://wa.me/447490410160?text=Assalamu%20Alaikum%2C%20I%20would%20be%20honoured%20to%20attend%20the%20Nikah%20and%20Walima%20ceremony%20of%20Humza%20and%20Farheen.%20Please%20count%20me%20in."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#8b5e3c] text-white font-medium shadow-lg hover:bg-[#70492e] transition duration-300 overflow-hidden"
                    >
                        <span
                            className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#a87b5c] to-[#8b5e3c] opacity-0 group-hover:opacity-20 transition duration-300"/>
                        <IconBrandWhatsapp className="h-5 w-5 mr-2 text-white z-10"/>
                        <span className="z-10">RSVP via WhatsApp</span>
                    </Link>
                </CardFooter>
            </Card>

            <footer className="mt-12 text-sm text-[#7a6654]">
                Mr & Mrs Hifzur Rehman Kaka
            </footer>
        </main>
    );
}
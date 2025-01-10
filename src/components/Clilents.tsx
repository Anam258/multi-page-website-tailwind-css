import React from "react";
import Container from "./Container";
import logoBrightPath from "../../public/images/clients/bright-path/logo-light.svg";
import logoFamilyFund from "../../public/images/clients/family-fund/logo-light.svg";
import logoGreenLife from "../../public/images/clients/green-life/logo-light.svg";
import logoHomeWork from "../../public/images/clients/home-work/logo-light.svg";
import logoMailSmirk from "../../public/images/clients/mail-smirk/logo-light.svg";
import logoNorthAdventures from "../../public/images/clients/north-adventures/logo-light.svg";
import logoPhobiaLight from "../../public/images/clients/phobia/logo-light.svg";
import logoUnseal from "../../public/images/clients/unseal/logo-light.svg";
import FadeIn, { FadeInStagger } from "./FadeIn";
import Image from "next/image";

const clients = [
  ["Phobia", logoPhobiaLight],
  ["Family Fund", logoFamilyFund],
  ["Unseal", logoUnseal],
  ["Mail Smirk", logoMailSmirk],
  ["Home Work", logoHomeWork],
  ["Green Life", logoGreenLife],
  ["Bright Path", logoBrightPath],
  ["North Adventures", logoNorthAdventures],
];

const Clients = () => {
  return (
    <div className="mt-24 py-16 bg-gradient-to-r from-blue-900 via-blue-500 to-pink-400 rounded-[50px]">
      <Container>
        <div>
          <FadeIn className="flex items-center gap-x-8 mb-8">
            <h2 className="text-center text-2xl font-semibold text-gray-800 tracking-wide sm:text-left">
              Trusted by Leading Companies
            </h2>
            <div className="h-px flex-auto bg-neutral-700" />
          </FadeIn>
          <FadeInStagger faster>
            <ul
              role="list"
              className="mt-10 grid grid-cols-2 gap-6 lg:grid-cols-4 gap-8"
            >
              {clients.map(([client, logo]) => (
                <li key={client} className="flex justify-center items-center transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <FadeIn>
                    <Image
                      src={logo}
                      alt={client}
                      unoptimized
                      className="max-w-full h-auto max-h-16 transition-transform duration-300 hover:scale-110"
                    />
                  </FadeIn>
                </li>
              ))}
            </ul>
          </FadeInStagger>
        </div>
      </Container>
    </div>
  );
};

export default Clients;

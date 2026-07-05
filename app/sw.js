import { defaultCache } from "@serwist/next/worker";
import { Serwist } from "serwist";

// `self.__SW_MANIFEST` is injected by Serwist at build time with the list of
// precache entries generated from the Next.js build output.
const serwist = new Serwist({
    precacheEntries: self.__SW_MANIFEST,
    skipWaiting: true,
    clientsClaim: true,
    navigationPreload: true,
    runtimeCaching: defaultCache,
});

serwist.addEventListeners();

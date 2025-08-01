import { For } from "solid-js";

const serverRoot = window.location.hostname;

const services: {
  name: string;
  description: string;
  icon: string;
  url: string;
}[] = [
  {
    name: "glance",
    description: "super cool home page smh",
    icon: "/images/glance.svg",
    url: `https://home.${serverRoot}`,
  },
  {
    name: "nekommit",
    description:
      "(forgejo) commit to your waifus!! (registrations are closed currently, hmu if you need an account smh)",
    icon: "/images/forgejo.svg",
    url: `https://git.${serverRoot}`,
  },
  {
    name: "swingmusic",
    description:
      "the greatest music server with the greatest music collection ever",
    icon: "/images/swing.svg",
    url: `https://music.${serverRoot}`,
  },
  {
    name: "filebrowser",
    description: "please do not spam",
    icon: "/images/filebrowser.svg",
    url: `https://files.${serverRoot}`,
  },
  {
    name: "navidrome",
    description: "music server that is fast",
    icon: "/images/navidrome.png",
    url: `https://radio.${serverRoot}`,
  },
  {
    name: "jellyfin",
    description: "if this is compromised, my cpu is cooked",
    icon: "/images/jellyfin.png",
    url: `https://tv.${serverRoot}`,
  },
];

const features = [
  "incredible uptime (10% at best)",
  "a lot of useful publicly accessible services (atleast 1? i think? idk)",
  "running on an absolute BEAST of a machine (see specs below)",
  "we nuked your data when i reinstalled linux, forgot to backup your data. sowwy >~<",
];

const specs = [
  "CPU: 12th Gen Intel® Core™ i7-1255U — 10-core hybrid beast (Performance cores for anime encoding, Efficiency cores for wasting RAM)",
  "GPU: Intel Iris Xe Graphics — can *technically* run Minecraft, probably also your Kubernetes dashboard at 5 FPS",
  "RAM: 12GB DDR4-3200 — dual rank frankensteined together from two sticks that probably weren’t meant to meet",
  "Disk: 512GB Samsung NVMe — reads fast, writes faster, dies who knows when",
  "Motherboard: Lenovo LNVNB161216 — rolls right off the tongue, engineered for maximum mediocrity",
  "Cooling: Thermal solution? More like thermally confused. Fans spin if the vibes are off",
  "Battery: Celxpert 57Wh — no idea who Celxpert is, but they tried their best",
  "OS: Arch Linux (btw) — bleeding edge and occasionally just bleeding",
  "Display: 1920x1080 @ 60Hz — full HD so you can see all 60 frames of your terminal animations",
  "Kernel: 6.14.10 — patched more than your average high school LAN party distro",
  "Desktop: Hyprland — because X11 is for the weak and the sane",
  "Audio: PipeWire + SOF — every boot is a gamble, will the mic work today? who knows!",
  "Swap: 4GB zram — compressed RAM because who needs memory discipline?",
  "Networking: Wi-Fi (Intel AX201) — works most of the time, until you actually need it",
  "Bluetooth: Yes, technically",
  "Virtualization: VT-x — ready to host a full homelab *if you believe hard enough*",
  "GPU APIs: Vulkan 1.3, OpenGL 4.6 — impressive support for all the 2D GUIs you'll never run",
  "Thermals: idles at 50°C — just chillin’, literally",
  "Uptime: somewhere between 5 minutes and 30 days, depending on mood",
  "Case: wrapped in the finest injection-molded plasti c Lenovo could afford in 2022",
];

function App() {
  return (
    <div class="w-full h-full flex justify-center">
      <div class="w-4/5 max-w-[1080px] py-4 flex flex-col">
        <div class="flex justify-between items-center mb-12">
          <div class="flex flex-col">
            <h1 class="text-4xl font-extrabold">hai!!! &gt;~&lt;</h1>

            <h2 class="text-typo-muted text-sm">
              if youre here, it means my "homelab" is online
            </h2>
          </div>

          <a
            href="https://furina.is-a.dev"
            title="who even am i? great question!"
            class="hover:scale-110 duration-300 transition-transform"
          >
            <img
              src="https://furina.is-a.dev/avatar.jpg"
              alt=""
              class="w-16 rounded-full"
            />
          </a>
        </div>

        <div class="flex flex-col gap-8 pb-16">
          <div>
            <h1 class="text-xl">features of this incredible homelab:</h1>
            <ul class="list-inside list-disc px-4 py-2 flex flex-col gap-2">
              <For each={features}>
                {(feature) => <li class="text-sm">{feature}</li>}
              </For>
            </ul>
          </div>
          <div class="flex flex-col gap-4">
            <h1 class="text-xl">services running on this homelab:</h1>
            <For each={services}>
              {(service) => (
                <a
                  href={service.url}
                  target="_blank"
                  class="flex gap-4 bg-surface-alt p-4 hover:scale-[102%] transition-transform"
                >
                  <img
                    src={service.icon}
                    alt=""
                    class="w-12 aspect-square object-contain"
                  />
                  <div class="flex flex-col justify-between">
                    <h2 class="text-lg">{service.name}</h2>
                    <p class="text-sm text-typo-muted">{service.description}</p>
                  </div>
                </a>
              )}
            </For>
            <p>
              in case you want to have an account on any of these services,
              registrations are disabled, but you can always DM me on discord!
              you can see all my socials
              <a
                class="text-accent underline pl-1"
                target="_blank"
                href="https://furina.is-a.dev/socials"
              >
                here
              </a>
            </p>
          </div>
          <div class="flex flex-col gap-4">
            <h1 class="text-xl">
              specs of the machine behind this massive homelab:
            </h1>
            <ul class="list-inside list-disc px-4 py-2 flex flex-col gap-4">
              <For each={specs}>
                {(spec) => <li class="text-sm">{spec}</li>}
              </For>
            </ul>
          </div>
          <div class="flex flex-col gap-4">
            <h1 class="text-xl">thats it!</h1>
            <p class="text-typo-muted text-sm">
              hmu if you have any recommendations for other massive services i
              can host on my beast of a homelab
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

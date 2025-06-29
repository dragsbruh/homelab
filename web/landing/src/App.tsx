import { For } from "solid-js";

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
    url: "https://glance.vinster.xyz",
  },
  {
    name: "forgy",
    description:
      "kawaii git hosting!! (registrations are closed currently, hmu if you need an account smh)",
    icon: "/images/forgejo.svg",
    url: "https://git.vinster.xyz",
  },
  {
    name: "uptime",
    description: "see the incredible uptime of this incredible homelab!!!1!",
    icon: "/images/kuma.svg",
    url: "https://uptime.vinster.xyz/status/postmiku",
  },
  // {
  //   name: "searxng",
  //   description: "bestestest search engine!!11!",
  //   icon: "/images/searxng.svg",
  //   url: "https://search.vinster.xyz",
  // },
  {
    name: "portainer",
    description: "surely safe enough to expose right???2?",
    icon: "/images/portainer.png",
    url: "https://sudo.vinster.xyz",
  },
];

const features = [
  "incredible uptime (10% at best)",
  "a lot of useful publicly accessible services (atleast 1? i think? idk)",
  "running on an absolute BEAST of a machine (see specs below)",
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
  "Thermals: idles at 43°C — just chillin’, literally",
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

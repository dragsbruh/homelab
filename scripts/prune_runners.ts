declare global {
  var process: any;
}

const res = await fetch(
  `https://waifustation.miku-royal.ts.net/tea/api/v1/admin/actions/runners`,
  {
    headers: {
      Authorization: "Bearer " + process.env.ADMIN_TOKEN!,
    },
  }
);
const runners = (await res.json()).runners;

runners.forEach((runner: any) => {
  fetch(
    `https://waifustation.miku-royal.ts.net/tea/api/v1/admin/actions/runners/${runner.id}`,
    {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + process.env.ADMIN_TOKEN!,
      },
    }
  );
});

export {};

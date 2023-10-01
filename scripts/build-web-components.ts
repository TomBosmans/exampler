import { watch } from "fs";
import { join } from "path";
import config from "../src/config";

const dir = join(import.meta.dir, "..", "src/pages/_web-components");
const outdir = join(import.meta.dir, "..", "assets");

const build = async () => {
  await Bun.build({
    entrypoints: [`${dir}/index.ts`],
    outdir,
    target: "browser",
    naming: "[dir]/web-components.[ext]",
  });
};

const setupWatch = async () => {
  const watcher = watch(dir, async (_event, filename) => {
    if (typeof filename === "string") build();
  });

  process.on("SIGINT", () => {
    watcher.close();
    process.exit(0);
  });
};

const script = async () => {
  config.watch.webComponents ? setupWatch() : build();
};

script();

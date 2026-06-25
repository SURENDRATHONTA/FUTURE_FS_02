import { cp, mkdir, rm } from "node:fs/promises";

await rm("build", { recursive: true, force: true });
await mkdir("build", { recursive: true });
await cp("public", "build", { recursive: true });

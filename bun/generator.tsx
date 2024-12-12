import * as ITEMSLOTTIE from "../lottie/index";
import { Glob } from "bun";

const onGenerateTypeLottie = async () => {
    const ITEMS = Object.keys(ITEMSLOTTIE)

    for (let i = 0; i < ITEMS.length; i++) {
        const itemKey = ITEMS[i];
        const ITEM = ITEMSLOTTIE[itemKey]
        await Bun.write(`./json/${itemKey}.json`, `${JSON.stringify(ITEM)}`, {
            createDirs: true,
        });
    }
    await Bun.write(`./src/interface/index.tsx`, `export type typeLottie = "${ITEMS.join('"|"')}"`, {
        createDirs: true,
    });

}


const onGenerateExport = async () => {
    const glob = new Glob("*/**/index.tsx");

    const listExport : string[] = []

    for (const file of glob.scanSync("./src")) {
        listExport.push(
            `${file}`.replace("/index.tsx","")
        )
    }

    await Bun.write(`./src/index.tsx`, `${listExport.map(e=>`export * from "./${e}";\n`).join("")}`, {
        createDirs: true,
    });
}

const main = async () => {
    await onGenerateTypeLottie()
    await onGenerateExport()
};
main();

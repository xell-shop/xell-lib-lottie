import * as ITEMSLOTTIE from "../lottie/index";

const main = async () => {
    const ITEMS = Object.keys(ITEMSLOTTIE)

    for (let i = 0; i < ITEMS.length; i++) {
        const itemKey = ITEMS[i];
        const ITEM = ITEMSLOTTIE[itemKey]
        await Bun.write(`./json/${itemKey}.json`, `${JSON.stringify(ITEM)}`, {
            createDirs: true,
        });
    }
    await Bun.write(`./src/typeLottie.tsx`, `export type typeLottie = "${ITEMS.join('"|"')}"`, {
        createDirs: true,
    });
};
main();

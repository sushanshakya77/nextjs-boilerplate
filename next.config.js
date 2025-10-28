import { createJiti } from "jiti";
const jiti = createJiti(import.meta.url, { debug: true });

jiti.import("./src/app/env");

/** @type {import('next').NextConfig} */
export default {};

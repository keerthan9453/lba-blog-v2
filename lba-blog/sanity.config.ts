import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({

    projectId: "gkx9isc7",

    dataset: "production",

    title: "LBA Blog",

    apiVersion: "2023-05-25",

    basePath: "/admin",

    plugins: [deskTool()],

    schema: { types: schemas }
})

export default config;
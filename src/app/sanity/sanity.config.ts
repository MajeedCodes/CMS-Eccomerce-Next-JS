'use client'

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { MainSchema } from "@/app/sanity/schema/index"; 
import client from "./sanity.client";

export const Config = defineConfig({
  title: "Sanity",
  basePath: "/studio",
  projectId: "w4oh94pm",
  dataset: "production",
  apiVersion: "2023-08-01",
  useCdn: false,
  plugins: [visionTool(), structureTool()],
  schema: {
    types: MainSchema.types, 
  },
  
});


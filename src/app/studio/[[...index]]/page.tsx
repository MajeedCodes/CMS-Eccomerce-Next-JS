import { NextStudio } from "next-sanity/studio";
import { Config } from "@/app/sanity/sanity.config";

export default function StudioPage() {

    return <NextStudio config={Config} />

}
  
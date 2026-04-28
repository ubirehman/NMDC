import { dmVessels } from "../../../content/content";
import { DredgingMarineVesselDetailPage } from "../../pages";

export function generateStaticParams() {
  return dmVessels.map((vessel) => ({ slug: vessel.slug }));
}

export default async function Page({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <DredgingMarineVesselDetailPage slug={slug} />;
}


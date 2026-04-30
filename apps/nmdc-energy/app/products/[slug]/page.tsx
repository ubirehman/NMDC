import { notFound } from "next/navigation";
import { nmdcEnergyContent as content } from "../../../content/content";
import { NmdcEnergyProductDetailPage } from "../../pages";

export function generateStaticParams() {
  return content.products.details.map((detail) => ({ slug: detail.slug }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const detail = content.products.details.find((item) => item.slug === slug);

  if (!detail) {
    notFound();
  }

  return <NmdcEnergyProductDetailPage detail={detail} />;
}

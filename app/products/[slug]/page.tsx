import { notFound } from "next/navigation";
import {
  NmdcGroupProductDetailPage,
  getNmdcGroupProductDetailBySlug,
  nmdcGroupProductDetailSlugs,
} from "../../../features/landing-pages/nmdc-group";

export function generateStaticParams() {
  return nmdcGroupProductDetailSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const detail = getNmdcGroupProductDetailBySlug(slug);

  return {
    title: detail
      ? `${detail.fullTitle} | NMDC Group Products`
      : "NMDC Group Product",
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const detail = getNmdcGroupProductDetailBySlug(slug);

  if (!detail) {
    notFound();
  }

  return <NmdcGroupProductDetailPage detail={detail} />;
}

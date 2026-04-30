import { permanentRedirect } from "next/navigation";

export default async function NmdcGroupProductDetailRedirect({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  permanentRedirect(`/products/${slug}`);
}

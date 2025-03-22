import { notFound } from "next/navigation";

type Params = {
  locale: string;
};

export default async function HomePage({ params }: { params: Params }) {
  const { locale } = await params;

  try {
    const Content = (await import(`./${locale}.mdx`)).default;
    return <Content />;
  } catch {
    notFound();
  }
}

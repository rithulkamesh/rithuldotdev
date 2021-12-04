import Head from 'next/head';

export default function SEO({ page }: props) {
  return (
    <Head>
      <title>Rithul Kamesh - {page}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Just a random 15 year old on the internet making youtube videos for fun, and I do web dev coz why not :p" />
      <meta name="author" content="Rithul Kamesh" />
      <meta name="author" content="rithulkamesh" />
      <link rel="apple-touch-icon" href="apple-touch-icon.png" />
      <link
        rel="shortcut icon"
        href="/images/favicon.ico"
        type="image/x-icon"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@rithulkamesh" />
      <meta name="twitter:creator" content="@rithulkamesh" />
      <meta name="twitter:image" content="/images/banner.png" />
      <meta property="og:site_name" content="Rithul Kamesh's portfolio" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/images/banner.png" />
      <meta name="theme-color" content="#bb240c" />
    </Head>
  );
}
interface props {
  page: string;
}

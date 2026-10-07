import { readFile, writeFile } from "node:fs/promises";

const marker = "<!-- SOCIAL_URLS: preenchidas com o domínio público durante o build na Vercel -->";
const rawUrl = process.env.SITE_URL || process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;

if (!rawUrl) {
  throw new Error("Defina SITE_URL ou habilite as variáveis de sistema da Vercel para gerar os metadados sociais.");
}

const siteUrl = new URL(rawUrl.includes("://") ? rawUrl : `https://${rawUrl}`);
if (siteUrl.protocol !== "https:" || !siteUrl.hostname) {
  throw new Error("A URL pública do site deve usar HTTPS e conter um domínio válido.");
}

const origin = siteUrl.origin;
const indexUrl = new URL("../dist/index.html", import.meta.url);
const html = await readFile(indexUrl, "utf8");
if (!html.includes(marker)) {
  throw new Error("Marcador de metadados sociais não encontrado em dist/index.html.");
}

const metadata = [
  `<link rel="canonical" href="${origin}/" />`,
  `<meta property="og:url" content="${origin}/" />`,
  `<meta property="og:image" content="${origin}/og.png" />`,
  '<meta property="og:image:type" content="image/png" />',
  '<meta property="og:image:width" content="1733" />',
  '<meta property="og:image:height" content="907" />',
  '<meta property="og:image:alt" content="Logo Essenza Estética e a frase A sua beleza, na sua melhor versão." />',
  `<meta name="twitter:image" content="${origin}/og.png" />`,
  '<meta name="twitter:image:alt" content="Logo Essenza Estética e a frase A sua beleza, na sua melhor versão." />',
].join("\n    ");

const output = html.replace(marker, metadata);
if (process.argv.includes("--check")) {
  console.log(`Metadados preparados para ${origin}/og.png`);
} else {
  await writeFile(indexUrl, output, "utf8");
  console.log(`Metadados sociais configurados para ${origin}`);
}

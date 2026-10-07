# Essenza Estética

Site fictício de clínica estética, feito em HTML, CSS e JavaScript. A página e todas as imagens necessárias para publicação estão em `dist/`.

## Publicar na Vercel

1. Envie o conteúdo desta pasta para um repositório no GitHub. Inclua a pasta `dist/` inteira (página, imagens, `og.png` e `favicon.svg`), a pasta `scripts/` e o `vercel.json`.
2. Na Vercel, importe o repositório GitHub e escolha **Other** como framework.
3. Mantenha a raiz do repositório como **Root Directory**. O `vercel.json` define `dist` como **Output Directory** e executa um pequeno comando Node para inserir as URLs públicas dos metadados sociais.
4. Faça o deploy. Atualizações futuras em `dist/` serão publicadas a partir dos próximos commits no GitHub.

Não é necessário instalar dependências. Para a imagem de compartilhamento, o comando usa `VERCEL_PROJECT_PRODUCTION_URL` (ou `VERCEL_URL`), fornecida pela Vercel quando as variáveis de sistema estão expostas. Opcionalmente, defina `SITE_URL` na Vercel com o domínio final, incluindo `https://`, para fixar esse endereço nos metadados. Se o build avisar que falta uma URL, habilite **Automatically expose System Environment Variables** em **Settings → Environment Variables** ou configure `SITE_URL`.

## Testar localmente

Sirva a pasta `dist/` em um servidor estático, por exemplo:

```powershell
python -m http.server 4173 --directory dist
```

Abra `http://localhost:4173/`.

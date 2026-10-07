# Essenza Estética

Site fictício de clínica estética, feito em HTML, CSS e JavaScript. A página e todas as imagens necessárias para publicação estão em `dist/`.

## Publicar na Vercel

1. Envie o conteúdo desta pasta para um repositório no GitHub. Inclua a pasta `dist/` inteira (página, imagens, `og.png` e `favicon.svg`) e o `vercel.json`.
2. Na Vercel, importe o repositório GitHub e escolha **Other** como framework.
3. Mantenha a raiz do repositório como **Root Directory**. O `vercel.json` define `dist` como **Output Directory**; não há comando de build.
4. Faça o deploy. Atualizações futuras em `dist/` serão publicadas a partir dos próximos commits no GitHub.

Não é necessário instalar dependências nem configurar variáveis de ambiente. Os metadados sociais e a URL canônica apontam para `https://essenza-estetica-nine.vercel.app/`. Se o domínio de produção mudar, atualize essas URLs em `dist/index.html`.

## Testar localmente

Sirva a pasta `dist/` em um servidor estático, por exemplo:

```powershell
python -m http.server 4173 --directory dist
```

Abra `http://localhost:4173/`.

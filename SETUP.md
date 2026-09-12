# Setup y Deployment — HME / MEF en GitHub Pages

---

## 1. CREACIÓN DEL REPOSITORIO

### En GitHub

1. Ve a [github.com/new](https://github.com/new)
2. **Nombre del repositorio**: `hme-mef.github.io` (importante: exactamente así)
3. **Descripción**: "HME — Honorarios Mínimos Equivalentes | Plataforma de investigación y advocacy"
4. **Visibilidad**: Public
5. Crea el repositorio

### Clonar localmente

```bash
git clone https://github.com/[TU_USUARIO]/hme-mef.github.io.git
cd hme-mef.github.io

# Crear Gemfile
cat > Gemfile << 'EOF'
source "https://rubygems.org"
gem "github-pages", group: :jekyll_plugins
gem "jekyll-feed", "~> 0.12"
gem "jekyll-seo-tag"
EOF

# Instalar dependencias
bundle install
```

---

## 2. ESTRUCTURA DEL PROYECTO

```
hme-mef.github.io/
├── _config.yml
├── _includes/
│   ├── header.html
│   └── footer.html
├── _layouts/
│   └── default.html
├── assets/
│   ├── css/
│   │   ├── main.css
│   │   └── responsive.css
│   ├── js/
│   ├── images/
│   └── documents/              ← PDFs, estudios, propuestas
│       └── advocacy/
├── publicaciones/              ← Artículos académicos
│   ├── index.md
│   └── articulos/
├── marco-legal/                ← Análisis legal
│   ├── index.md
│   ├── constitucion/
│   ├── directivas/
│   └── jurisprudencia/
├── advocacy/                   ← Propuestas formales
│   ├── index.md
│   └── propuestas/
├── recursos/                   ← FAQ, glosario, bibliografía
│   ├── faq.md
│   ├── glosario.md
│   └── bibliografia.md
├── index.md
├── Gemfile
├── .gitignore
├── SETUP.md
└── README.md
```

---

## 3. DESARROLLO LOCAL

### Levantar servidor

```bash
bundle exec jekyll serve

# Output:
# Server address: http://127.0.0.1:4000
# Server running... press ctrl-c to stop.
```

Abre **http://localhost:4000** en tu navegador.

### Editar contenido

#### Cambiar homepage

Edita `index.md`:

```yaml
---
layout: home
title: "HME — Honorarios Mínimos Equivalentes"
excerpt: "Propuesta de regulación..."
---

## Título

Contenido en Markdown...
```

#### Agregar página nueva

1. Crea `nombre-pagina/index.md`:

```yaml
---
layout: page
title: "Título de la página"
---

Contenido en Markdown...
```

2. La navegación se actualiza automáticamente (va a `/nombre-pagina/`)

#### Agregar artículo/documento

```bash
mkdir -p publicaciones/articulos/alvira-hme-2026
cat > publicaciones/articulos/alvira-hme-2026/index.md << 'EOF'
---
layout: page
title: "Minimum Equivalent Fees (2026)"
---

Contenido del artículo...
EOF
```

#### Subir documentos (PDF, Excel, etc.)

1. Coloca archivos en `assets/documents/`
2. Enlaza desde Markdown:

```markdown
[Descargar artículo]({{ '/assets/documents/Alvira-HME-2026.pdf' | relative_url }})
```

---

## 4. DEPLOYMENT

### Automático en GitHub (recomendado)

1. Ve a **Settings > Pages** en tu repositorio
2. **Source**: "Deploy from a branch"
3. **Branch**: `main` / `root`
4. Guarda

Ahora cada vez que hagas `git push`:

```bash
git add .
git commit -m "Actualizar contenido HME"
git push origin main
```

GitHub construye el sitio automáticamente en 1-2 minutos. Verifica en **Actions** si hay errores.

---

## 5. CONECTAR DOMINIO PERSONALIZADO

### Registro de dominio

Opciones recomendadas:
- `hme-mef.es` (dominio español)
- `mef-arquitectos.es`
- `honorarios-minimos.es`

### Configurar DNS

**Si registraste en IONOS:**

1. Ve a "Mis dominios" → Gestión DNS
2. Busca registros **A** o **CNAME**
3. Crea/edita:

| Tipo | Nombre | Valor |
|---|---|---|
| CNAME | www | hme-mef.github.io |
| A | @ | 185.199.108.153 |

4. Espera 24-48 horas para propagación

**Si registraste en otro lugar:**

Similar, pero busca la sección "DNS Records" o "Manage DNS" en el panel de control.

### Configurar en GitHub

1. **Settings > Pages** en tu repo
2. **Custom domain**: `www.hme-mef.es` (o tu dominio)
3. Click "Save"
4. Espera a que GitHub valide (puede tardar 24h)
5. Marca **Enforce HTTPS** una vez validado

---

## 6. FLUJO DE TRABAJO DIARIO

### Actualizar FAQ

```bash
git pull origin main
nano recursos/faq.md    # Editar FAQ
jekyll serve            # Ver cambios en http://localhost:4000
git add recursos/faq.md
git commit -m "Actualizar FAQs sobre HME"
git push origin main
```

### Agregar artículo académico nuevo

```bash
git pull origin main

# Crear estructura
mkdir -p publicaciones/articulos/nuevo-articulo

# Crear archivo
cat > publicaciones/articulos/nuevo-articulo/index.md << 'EOF'
---
layout: page
title: "Título del Artículo"
---

Contenido...
EOF

# Subir PDF a assets/documents
cp ~/Descargas/articulo.pdf assets/documents/

# Hacer commit
git add publicaciones/articulos/nuevo-articulo/
git add assets/documents/articulo.pdf
git commit -m "Agregar nuevo artículo: [Título]"
git push origin main
```

### Actualizar propuesta formal

```bash
git pull origin main
nano advocacy/index.md

# Actualizar cronología, documentos, estado de tramitación

jekyll serve    # Verificar
git add advocacy/index.md
git commit -m "Actualizar estado advocacy — respuesta de MECE"
git push origin main
```

---

## 7. MANTENIMIENTO

### Actualizar dependencias

```bash
bundle update
git add Gemfile.lock
git commit -m "Actualizar dependencias Jekyll"
git push origin main
```

### Revisar errores de build

1. Ve a **Actions** en GitHub
2. Click en último workflow
3. Si hay error, verás detalles
4. Errores comunes:
   - **Sintaxis YAML**: revisar frontmatter
   - **Rutas de archivos**: verificar que existan
   - **Caracteres especiales**: escapar `{` `}` como `{% raw %}{{ }}{% endraw %}`

### Limpieza de cache local

```bash
rm -rf _site/
bundle exec jekyll clean
bundle exec jekyll serve
```

---

## 8. BACKUP Y VERSIONADO

### Crear backup

```bash
git archive --format=zip HEAD > hme-mef-backup-2026-09.zip
```

### Ver historial de cambios

```bash
git log --oneline
```

### Revertir cambios previos

```bash
git revert [HASH-COMMIT]
```

---

## 9. SOLUCIÓN DE PROBLEMAS

### El sitio no se publica

**Checklist:**
- [ ] El repositorio es **público** (Settings > Visibility)
- [ ] El nombre del repositorio es exactamente `hme-mef.github.io`
- [ ] Rama es `main` o `master` (coherente en Settings > Pages)
- [ ] No hay errores en **Actions**

### El dominio no funciona

```bash
# Verificar DNS
nslookup www.hme-mef.es
# Debería mostrar: hme-mef.github.io

# Si no funciona:
# - Espera 24-48h más
# - Revisa registros DNS en registrador
# - Intenta con `@` (sin www) en GitHub
```

### CSS no se actualiza

```bash
# Limpiar caché navegador
# Mac: Cmd+Shift+R
# Windows/Linux: Ctrl+Shift+R

# O en local:
bundle exec jekyll clean
bundle exec jekyll serve
```

### Errores de Markdown

Valida sintaxis YAML:
- [yamllint.com](https://www.yamllint.com)

Valida Markdown:
- [markdownlint.com](https://markdownlint.com)

---

## 10. REFERENCIAS ÚTILES

- **Jekyll docs**: [jekyllrb.com/docs/](https://jekyllrb.com/docs/)
- **GitHub Pages**: [pages.github.com](https://pages.github.com)
- **Markdown cheatsheet**: [commonmark.org/help/](https://commonmark.org/help/)
- **YAML validator**: [yamllint.com](https://www.yamllint.com)

---

**Última actualización**: Septiembre 2026  
**Versión de esta guía**: 1.0

---

## Preguntas?

Contacta con: **ricardo@hme-mef.es**

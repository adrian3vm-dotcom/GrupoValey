<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">

<xsl:template match="/">

<html lang="es">

<head>

<meta charset="UTF-8"/>

<title>Grupo Valey | XML Sitemap</title>

<style>

body{
    margin:0;
    background:#f5f5f2;
    font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;
    color:#2d2d2d;
}

.container{
    max-width:1100px;
    margin:auto;
    padding:70px 50px;
}

.logo{
    font-size:14px;
    letter-spacing:8px;
    color:#8b7355;
    text-transform:uppercase;
    margin-bottom:18px;
}

h1{
    font-weight:300;
    font-size:46px;
    margin:0;
}

.subtitle{
    margin-top:18px;
    color:#666;
    line-height:1.8;
    max-width:760px;
}

.card{
    margin-top:55px;
    background:white;
    border-radius:14px;
    overflow:hidden;
    box-shadow:0 18px 45px rgba(0,0,0,.08);
}

table{
    width:100%;
    border-collapse:collapse;
}

th{
    text-align:left;
    background:#f8f8f8;
    padding:18px 28px;
    font-weight:600;
    font-size:13px;
    letter-spacing:1px;
    text-transform:uppercase;
}

td{
    padding:22px 28px;
    border-top:1px solid #ececec;
    font-size:15px;
}

a{
    color:#2d2d2d;
    text-decoration:none;
}

a:hover{
    color:#8b7355;
}

.footer{
    margin-top:40px;
    color:#777;
    font-size:14px;
}

.badge{
    display:inline-block;
    margin-top:18px;
    padding:8px 14px;
    border:1px solid #d9d9d9;
    border-radius:999px;
    color:#666;
    font-size:13px;
}

</style>

</head>

<body>

<div class="container">

<div class="logo">
GRUPO VALEY
</div>

<h1>XML Sitemap</h1>

<p class="subtitle">
Este sitemap contiene las páginas públicas del sitio web de Grupo Valey.
Su propósito es facilitar el rastreo e indexación por motores de búsqueda
como Google, Bing y otros.
</p>

<div class="badge">
Sitio oficial • grupovaley.com
</div>

<div class="card">

<table>

<thead>

<tr>
<th>URL</th>
<th>Prioridad</th>
</tr>

</thead>

<tbody>

<xsl:for-each select="sitemap:urlset/sitemap:url">

<tr>

<td>
<a href="{sitemap:loc}">
<xsl:value-of select="sitemap:loc"/>
</a>
</td>

<td>
<xsl:value-of select="sitemap:priority"/>
</td>

</tr>

</xsl:for-each>

</tbody>

</table>

</div>

<div class="footer">

Última actualización automática del sitemap de Grupo Valey.

</div>

</div>

</body>

</html>

</xsl:template>

</xsl:stylesheet>
// React uygulaması içinde sitemap oluşturucu utility
export const generateSitemapXML = async () => {
  const today = new Date().toISOString().split('T')[0];

  // XML sitemap oluştur
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

  <!-- Ana Sayfa -->
  <url>
    <loc>https://nurullahgundogdu.com/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- Hakkımda Sayfası -->
  <url>
    <loc>https://nurullahgundogdu.com/about</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- Brewle Privacy Policy -->
  <url>
    <loc>https://nurullahgundogdu.com/brewle-privacy</loc>
    <lastmod>${today}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.4</priority>
  </url>
</urlset>`;

  return sitemap;
};

// Sitemap'i tarayıcıda indirme fonksiyonu
export const downloadSitemap = async () => {
  try {
    const sitemapXML = await generateSitemapXML();
    const blob = new Blob([sitemapXML], { type: 'application/xml' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'sitemap.xml';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Sitemap indirilirken hata:', error);
  }
};

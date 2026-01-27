const fs = require('fs');
const path = require('path');

async function generateSitemap() {
  try {
    console.log('🔄 Sitemap oluşturuluyor...');
    
    // XML sitemap oluştur
    const today = new Date().toISOString().split('T')[0];

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

    // Sitemap dosyasını yaz
    const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
    fs.writeFileSync(sitemapPath, sitemap, 'utf8');
    
    console.log(`🎉 Sitemap başarıyla oluşturuldu: ${sitemapPath}`);
    console.log(`📊 Toplam URL sayısı: 3`);
    
  } catch (error) {
    console.error('❌ Sitemap oluşturulurken hata:', error.message);
    
    // Hata durumunda statik sitemap oluştur
    const today = new Date().toISOString().split('T')[0];

    const fallbackSitemap = `<?xml version="1.0" encoding="UTF-8"?>
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

    const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
    fs.writeFileSync(sitemapPath, fallbackSitemap, 'utf8');
    console.log('⚠️ Fallback sitemap oluşturuldu');
  }
}

// Script çalıştır
generateSitemap();

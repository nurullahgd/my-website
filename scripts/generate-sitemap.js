const fs = require('fs');
const path = require('path');

const apiBaseUrl = "https://api.nurullahgundogdu.com";

async function generateSitemap() {
  try {
    console.log('🔄 Sitemap oluşturuluyor...');
    
    // API'den blog verilerini çek
    const response = await fetch(`${apiBaseUrl}/api/blogs/`);
    
    if (!response.ok) {
      throw new Error(`API hatası: ${response.status}`);
    }
    
    const blogs = await response.json();
    console.log(`📝 ${blogs.length} blog yazısı bulundu`);
    
    // Sadece görünür blogları filtrele
    const visibleBlogs = blogs.filter(blog => blog.visibility === true);
    console.log(`✅ ${visibleBlogs.length} görünür blog yazısı`);
    
    // XML sitemap oluştur
    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

  <!-- Ana Sayfa -->
  <url>
    <loc>https://nurullahgundogdu.com/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- Hakkımda Sayfası -->
  <url>
    <loc>https://nurullahgundogdu.com/about</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- Blog Ana Sayfası -->
  <url>
    <loc>https://nurullahgundogdu.com/blog</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <!-- Blog Detay Sayfaları -->`;

    // Her blog için URL ekle
    visibleBlogs.forEach(blog => {
      const lastmod = new Date(blog.updated_at || blog.created_at).toISOString().split('T')[0];
      sitemap += `
  <url>
    <loc>https://nurullahgundogdu.com/blog/${blog.slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
    });

    sitemap += `
</urlset>`;

    // Sitemap dosyasını yaz
    const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
    fs.writeFileSync(sitemapPath, sitemap, 'utf8');
    
    console.log(`🎉 Sitemap başarıyla oluşturuldu: ${sitemapPath}`);
    console.log(`📊 Toplam URL sayısı: ${3 + visibleBlogs.length}`);
    
  } catch (error) {
    console.error('❌ Sitemap oluşturulurken hata:', error.message);
    
    // Hata durumunda statik sitemap oluştur
    const fallbackSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

  <!-- Ana Sayfa -->
  <url>
    <loc>https://nurullahgundogdu.com/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- Hakkımda Sayfası -->
  <url>
    <loc>https://nurullahgundogdu.com/about</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- Blog Ana Sayfası -->
  <url>
    <loc>https://nurullahgundogdu.com/blog</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
</urlset>`;

    const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
    fs.writeFileSync(sitemapPath, fallbackSitemap, 'utf8');
    console.log('⚠️ Fallback sitemap oluşturuldu');
  }
}

// Script çalıştır
generateSitemap();

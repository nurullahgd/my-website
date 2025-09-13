// Dinamik sitemap oluşturucu
const apiBaseUrl = "https://api.nurullahgundogdu.com";

async function generateSitemap() {
  try {
    // API'den blog verilerini çek
    const response = await fetch(`${apiBaseUrl}/api/blogs/`);
    const blogs = await response.json();
    
    // Sadece görünür blogları filtrele
    const visibleBlogs = blogs.filter(blog => blog.visibility === true);
    
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

    return sitemap;
  } catch (error) {
    console.error('Sitemap oluşturulurken hata:', error);
    return null;
  }
}

// Node.js ortamında çalıştırılabilir
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { generateSitemap };
}

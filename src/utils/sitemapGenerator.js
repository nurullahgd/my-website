// React uygulaması içinde sitemap oluşturucu utility
const apiBaseUrl = "https://api.nurullahgundogdu.com";

export const generateSitemapXML = async () => {
  try {
    // API'den blog verilerini çek
    const response = await fetch(`${apiBaseUrl}/api/blogs/`);
    
    if (!response.ok) {
      throw new Error(`API hatası: ${response.status}`);
    }
    
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
    
    // Hata durumunda statik sitemap döndür
    return `<?xml version="1.0" encoding="UTF-8"?>
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
  }
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

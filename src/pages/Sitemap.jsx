import React, { useEffect, useState } from 'react';
import { generateSitemapXML } from '../utils/sitemapGenerator';

const Sitemap = () => {
  const [sitemapXML, setSitemapXML] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const generateSitemap = async () => {
      try {
        const xml = await generateSitemapXML();
        setSitemapXML(xml);
      } catch (error) {
        console.error('Sitemap oluşturulurken hata:', error);
      } finally {
        setLoading(false);
      }
    };

    generateSitemap();
  }, []);

  // XML olarak response döndür
  useEffect(() => {
    if (sitemapXML && !loading) {
      // Content-Type header'ı ayarla
      const response = new Response(sitemapXML, {
        headers: {
          'Content-Type': 'application/xml; charset=utf-8',
        },
      });

      // Tarayıcıya XML olarak gönder
      window.location.href = `data:application/xml;charset=utf-8,${encodeURIComponent(sitemapXML)}`;
    }
  }, [sitemapXML, loading]);

  if (loading) {
    return <div>Loading sitemap...</div>;
  }

  return null;
};

export default Sitemap;

import React from 'react';
import { notFound } from 'next/navigation';
import { productsCatalog, productsBySlug } from '../../../data/productsCatalog';
import ProductDetailClient from '../../../components/ProductDetailClient';

export const instant = false;

export async function generateStaticParams() {
  return productsCatalog.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = productsBySlug[slug];

  if (!product) {
    return {
      title: 'Product Not Found | श्री स्वामी समर्थ एजन्सी',
    };
  }

  const title = `${product.name.mr} | ${product.name.en} | श्री स्वामी समर्थ एजन्सी सांगली`;
  const description = `${product.name.mr} - ${product.tagline.mr}. क्षमता: ${product.hpRange}. Swan Agro व Popular Group अधिकृत वितरक श्री स्वामी समर्थ एजन्सी, सांगली, कुमठा फाटा, जत.`;

  return {
    title,
    description,
    keywords: [
      product.name.mr,
      product.name.en,
      product.brand,
      product.category,
      'rotavator sangli',
      'rotavator dealer jat',
      'agricultural implements sangli',
      'Swan Agro Maharashtra',
    ],
    openGraph: {
      title,
      description,
      type: 'article',
      images: [
        {
          url: product.image,
          width: 800,
          height: 600,
          alt: `${product.name.en} — Shree Swami Samarth Agency`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [product.image],
    },
  };
}

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const product = productsBySlug[slug];

  if (!product) {
    notFound();
  }

  // Related products from same brand
  const relatedProducts = productsCatalog
    .filter((p) => p.brandKey === product.brandKey && p.slug !== product.slug)
    .slice(0, 4);

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name.mr,
    alternateName: product.name.en,
    image: `https://shree-swami-samarth-agency.onrender.com${product.image}`,
    description: product.description.mr,
    category: product.category,
    brand: {
      '@type': 'Brand',
      name: product.brand,
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      url: `https://shree-swami-samarth-agency.onrender.com/products/${product.slug}`,
      seller: {
        '@type': 'Organization',
        name: 'श्री स्वामी समर्थ एजन्सी',
      },
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'मुख्यपृष्ठ (Home)',
        item: 'https://shree-swami-samarth-agency.onrender.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'उत्पादने (Products)',
        item: 'https://shree-swami-samarth-agency.onrender.com/#products',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: product.name.mr,
        item: `https://shree-swami-samarth-agency.onrender.com/products/${product.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <ProductDetailClient
        product={product}
        relatedProducts={relatedProducts}
      />
    </>
  );
}

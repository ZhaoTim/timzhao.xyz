import React from 'react';
import { useMDXComponent } from 'next-contentlayer/hooks';

import { Layout } from '../../components/layout';
import { Container } from '../../components/container';
import { PostHeader } from '../../components/post-header';
import { PostBody } from '../../components/post-body';
import { ArticleJsonLd, NextSeo } from 'next-seo';
import { BlogSiteUrl } from '../../data/about';
import { ExternalLink } from '../../components/external-link';
import { OpenGraph } from '../../data/social-media';
import { Navigation } from '../../components/navigation';
import { TwitterIcon } from '../../components/icons';
import { allBlogs } from 'contentlayer/generated';
import type { Blog } from 'contentlayer/generated';

export async function getStaticPaths() {
  return {
    paths: allBlogs.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const post = allBlogs.find((post) => post.slug === params.slug)!;

  return { props: { post } };
}

const Post = ({
  post: { title, description, body, slug, author, date, readingTime, tags },
}: {
  post: Blog;
}) => {
  const Component = useMDXComponent(body.code);

  return (
    <Layout>
      <NextSeo
        title={title}
        description={description}
        canonical={`${BlogSiteUrl}/${slug}`}
        openGraph={{
          url: `${BlogSiteUrl}/${slug}`,
          title,
          description,
          images: [{ url: `${process.env.NEXT_PUBLIC_SITE_URL}/api/og?title=${title}` }],
          site_name: title,
        }}
      />
      <ArticleJsonLd
        url={`${BlogSiteUrl}/${slug}`}
        title={title}
        images={[`${process.env.NEXT_PUBLIC_SITE_URL}/api/og?title=${title}`]}
        datePublished={date}
        authorName={author.name!}
        publisherName={author.name!}
        publisherLogo={author.picture!}
        description={description}
      />
      <Navigation />
      <PostHeader
        title={title}
        date={date}
        author={author}
        readingTime={readingTime.text}
        tags={tags}
      />
      <Container>
        <div className="mb-32">
          <PostBody>
            <Component />
          </PostBody>
        </div>
      </Container>
    </Layout>
  );
};

export default Post;

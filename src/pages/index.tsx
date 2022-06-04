import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { format } from 'date-fns';

import { Projects } from '../data/projects';
import { Travel } from '../data/travel';
import { SiteDescription, SiteTitle } from '../data/about';

import { Badge } from '../components/badge';
import { Section } from '../components/section';
import { Layout } from '../components/layout';
import { Container } from '../components/container';
import { Item } from '../components/item';
import { PhotoCard } from '../components/photo-card';
import { ExternalLink } from '../components/external-link';
import { Navigation } from '../components/navigation';

import Avatar from '../../public/assets/blog/authors/tim.jpeg';
import { ArrowSmRightIcon, ExternalLinkIcon } from '@heroicons/react/outline';
import { PageTitle } from '../components/page-title';
import { Button } from '../components/button';
import { Substack } from '../components/substack';

import { compareDesc } from 'date-fns';
import { allBlogs } from 'contentlayer/generated';
import type { Blog } from 'contentlayer/generated';

const latestPostsLimit = 5;
export const getStaticProps = async () => {
  const latestPosts = allBlogs
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    })
    .slice(0, latestPostsLimit);

  return {
    props: { latestPosts },
  };
};

type Props = {
  latestPosts: Blog[];
};

const Index = ({ latestPosts }: Props) => {
  return (
    <Layout>
      <NextSeo
        title={SiteTitle}
        description={SiteDescription}
        canonical={process.env.NEXT_PUBLIC_SITE_URL}
        openGraph={{
          url: process.env.NEXT_PUBLIC_SITE_URL,
          title: SiteTitle,
          description: SiteDescription,
          images: [{ url: `${process.env.NEXT_PUBLIC_SITE_URL}/api/og?title=${SiteTitle}` }],
          site_name: SiteTitle,
        }}
      />
      <Navigation />
      <Container>
        <section className="flex flex-col-reverse justify-between gap-x-12 sm:flex-row">
          <header>
            <PageTitle>Tim Zhao</PageTitle>
            <p className="mt-4 text-base">每一个不曾起舞的日子，都是对生命的辜负。</p>
            <p className="mt-4 text-base">你好，我是赵美成。</p>
          </header>
          <div className="flex-shrink-0 overflow-hidden">
            <Image src={Avatar} width="100" height="100" alt="avatar" className="rounded-full" />
          </div>
        </section>
        <Section>
          <Section.Title
            as="h2"
            action={
              <Link href="/blog">
                <Button data-testid="btn-blog-show-all">
                  <span className="inline-flex items-center justify-center px-1">
                    Show all <ArrowSmRightIcon className="ml-1 inline h-5 w-5" />
                  </span>
                </Button>
              </Link>
            }
          >
            Blog
          </Section.Title>
          <Section.Content>
            {latestPosts.map((post) => {
              return (
                <Link key={post.title} href={`/blog/${post.slug}`}>
                  <Item>
                    <Item.Title>{post.title}</Item.Title>
                    <Item.Subtitle>{post.description}</Item.Subtitle>
                    <Item.Description>
                      {format(new Date(post.date), 'MMM dd, yyyy')}
                    </Item.Description>
                  </Item>
                </Link>
              );
            })}
          </Section.Content>
        </Section>
      </Container>
    </Layout>
  );
};

export default Index;

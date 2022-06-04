import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import {
  ArrowSmLeftIcon,
  HomeIcon,
  MoonIcon,
  SunIcon,
  UserIcon,
  PhotographIcon,
} from '@heroicons/react/outline';
import { Button } from './button';

export const Navigation: React.FC = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const router = useRouter();
  const isBackButtonVisible = router.pathname !== '/';

  return (
    <nav className="top-background sticky top-0 z-50 mb-8 flex h-20 w-full flex-row items-center justify-center backdrop-blur-xl">
      <div className="container mx-auto flex max-w-5xl flex-row justify-end px-5">
        <div className="mr-auto">
          {isBackButtonVisible && (
            <Button onClick={() => router.back()} data-testid={'back-button'}>
              <ArrowSmLeftIcon className="h-4 w-4" />
            </Button>
          )}
        </div>
        <div className="flex flex-row space-x-2">
          <Link href="/">
            <Button data-testid={'back-btn'}>
              <HomeIcon className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/photo">
            <Button data-testid={'back-btn'}>
              <PhotographIcon className="h-4 w-4" />
            </Button>
          </Link>
          <Button
            data-testid={'theme-btn'}
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
          >
            {resolvedTheme === 'dark' ? (
              <SunIcon className="h-4 w-4" />
            ) : (
              <MoonIcon className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>
    </nav>
  );
};

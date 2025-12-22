import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Link } from '@/components/link'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { image } from '@/sanity/image'
import {
  getCategories,
  getFeaturedPosts,
  getPosts,
  getPostsCount,
} from '@/sanity/queries'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
  CheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpDownIcon,
  RssIcon,
} from '@heroicons/react/16/solid'
import { clsx } from 'clsx'
import dayjs from 'dayjs'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Explanations',
  description:
    'Clear, inspectable explanations of how tax rules, Roth conversions, IRMAA, and retirement systems actually work.',
}

const postsPerPage = 5

/* -------------------------------------------------------------------------- */
/*                              FEATURED EXPLANATIONS                         */
/* -------------------------------------------------------------------------- */

async function FeaturedPosts() {
  let { data: featuredPosts } = await getFeaturedPosts(3)

  if (featuredPosts.length === 0) return

  return (
    <div className="mt-16 bg-linear-to-t from-gray-100 pb-14">
      <Container>
        <h2 className="text-2xl font-medium tracking-tight">
          Start here
        </h2>

        <p className="mt-2 max-w-2xl text-sm/6 text-gray-600">
          These explain the core mechanics behind RothMax — how tax brackets,
          IRMAA, and lifetime projections interact.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {featuredPosts.map((post) => (
            <div
              key={post.slug}
              className="relative flex flex-col rounded-3xl bg-white p-2 shadow-md ring-1 shadow-black/5 ring-black/5"
            >
              {post.mainImage && (
                <img
                  alt={post.mainImage.alt || ''}
                  src={image(post.mainImage).size(1170, 780).url()}
                  className="aspect-3/2 w-full rounded-2xl object-cover"
                />
              )}

              <div className="flex flex-1 flex-col p-8">
                <div className="text-sm/5 text-gray-700">
                  {dayjs(post.publishedAt).format('MMMM D, YYYY')}
                </div>

                <div className="mt-2 text-base/7 font-medium">
                  <Link href={`/blog/${post.slug}`}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </Link>
                </div>

                <div className="mt-2 flex-1 text-sm/6 text-gray-500">
                  {post.excerpt}
                </div>

                <div className="mt-4 text-sm/5 font-medium text-gray-900">
                  Read explanation →
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*                                CATEGORIES                                  */
/* -------------------------------------------------------------------------- */

async function Categories({ selected }: { selected?: string }) {
  let { data: categories } = await getCategories()

  if (categories.length === 0) return

  return (
    <div className="flex flex-wrap items-center justify-between gap-2">
      <Menu>
        <MenuButton className="flex items-center justify-between gap-2 font-medium">
          {categories.find(({ slug }) => slug === selected)?.title ||
            'All topics'}
          <ChevronUpDownIcon className="size-4 fill-gray-900" />
        </MenuButton>

        <MenuItems
          anchor="bottom start"
          className="min-w-48 rounded-lg bg-white p-1 shadow-lg ring-1 ring-gray-200"
        >
          <MenuItem>
            <Link
              href="/blog"
              data-selected={selected === undefined ? true : undefined}
              className="group grid grid-cols-[1rem_1fr] items-center gap-2 rounded-md px-2 py-1 data-focus:bg-gray-950/5"
            >
              <CheckIcon className="hidden size-4 group-data-selected:block" />
              <p className="col-start-2 text-sm/6">All topics</p>
            </Link>
          </MenuItem>

          {categories.map((category) => (
            <MenuItem key={category.slug}>
              <Link
                href={`/blog?category=${category.slug}`}
                data-selected={category.slug === selected ? true : undefined}
                className="group grid grid-cols-[1rem_1fr] items-center gap-2 rounded-md px-2 py-1 data-focus:bg-gray-950/5"
              >
                <CheckIcon className="hidden size-4 group-data-selected:block" />
                <p className="col-start-2 text-sm/6">{category.title}</p>
              </Link>
            </MenuItem>
          ))}
        </MenuItems>
      </Menu>

      <Button variant="outline" href="/blog/feed.xml" className="gap-1">
        <RssIcon className="size-4" />
        RSS
      </Button>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*                               EXPLANATION LIST                             */
/* -------------------------------------------------------------------------- */

async function Posts({ page, category }: { page: number; category?: string }) {
  let { data: posts } = await getPosts(
    (page - 1) * postsPerPage,
    page * postsPerPage,
    category,
  )

  if (posts.length === 0 && (page > 1 || category)) notFound()
  if (posts.length === 0) {
    return <p className="mt-6 text-gray-500">No explanations found.</p>
  }

  return (
    <div className="mt-6">
      {posts.map((post) => (
        <div
          key={post.slug}
          className="relative grid grid-cols-1 border-b border-b-gray-100 py-10 first:border-t first:border-t-gray-200 sm:grid-cols-3"
        >
          <div>
            <div className="text-sm/5 text-gray-700">
              {dayjs(post.publishedAt).format('MMMM D, YYYY')}
            </div>
          </div>

          <div className="sm:col-span-2 sm:max-w-2xl">
            <h2 className="text-sm/6 font-medium">{post.title}</h2>
            <p className="mt-3 text-sm/6 text-gray-500">{post.excerpt}</p>

            <div className="mt-4">
              <Link
                href={`/blog/${post.slug}`}
                className="flex items-center gap-1 text-sm/5 font-medium"
              >
                <span className="absolute inset-0" />
                Read explanation
                <ChevronRightIcon className="size-4 fill-gray-400" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*                                 PAGINATION                                 */
/* -------------------------------------------------------------------------- */

async function Pagination({
  page,
  category,
}: {
  page: number
  category?: string
}) {
  function url(page: number) {
    let params = new URLSearchParams()
    if (category) params.set('category', category)
    if (page > 1) params.set('page', page.toString())
    return params.size !== 0 ? `/blog?${params.toString()}` : '/blog'
  }

  let totalPosts = (await getPostsCount(category)).data
  let pageCount = Math.ceil(totalPosts / postsPerPage)
  if (pageCount < 2) return

  return (
    <div className="mt-6 flex items-center justify-between gap-2">
      <Button variant="outline" href={page > 1 ? url(page - 1) : undefined}>
        <ChevronLeftIcon className="size-4" />
        Previous
      </Button>

      <div className="flex gap-2 max-sm:hidden">
        {Array.from({ length: pageCount }, (_, i) => (
          <Link
            key={i + 1}
            href={url(i + 1)}
            data-active={i + 1 === page ? true : undefined}
            className={clsx(
              'size-7 rounded-lg text-center text-sm/7 font-medium',
              'data-hover:bg-gray-100',
              'data-active:ring-1 data-active:ring-black/10',
            )}
          >
            {i + 1}
          </Link>
        ))}
      </div>

      <Button variant="outline" href={page < pageCount ? url(page + 1) : undefined}>
        Next
        <ChevronRightIcon className="size-4" />
      </Button>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*                                    PAGE                                    */
/* -------------------------------------------------------------------------- */

export default async function Blog({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  let params = await searchParams
  let page =
    'page' in params
      ? typeof params.page === 'string' && parseInt(params.page) > 1
        ? parseInt(params.page)
        : notFound()
      : 1

  let category =
    typeof params.category === 'string' ? params.category : undefined

  return (
    <main className="overflow-hidden">
      <GradientBackground />

      <Container>
        <Navbar />

        <Subheading className="mt-16">Explanations</Subheading>

        <Heading as="h1" className="mt-2">
          How the system works.
        </Heading>

        <Lead className="mt-6 max-w-3xl">
          Clear, inspectable explanations of tax rules, Roth conversions,
          Medicare IRMAA, and the assumptions behind RothMax.
        </Lead>
      </Container>

      {page === 1 && !category && <FeaturedPosts />}

      <Container className="mt-16 pb-24">
        <Categories selected={category} />
        <Posts page={page} category={category} />
        <Pagination page={page} category={category} />
      </Container>

      <Footer />
    </main>
  )
}
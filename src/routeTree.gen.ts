/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const IssuesLazyImport = createFileRoute('/issues')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const IssuesLazyRoute = IssuesLazyImport.update({
  id: '/issues',
  path: '/issues',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/issues.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/issues': {
      id: '/issues'
      path: '/issues'
      fullPath: '/issues'
      preLoaderRoute: typeof IssuesLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/issues': typeof IssuesLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/issues': typeof IssuesLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/issues': typeof IssuesLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/issues'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/issues'
  id: '__root__' | '/' | '/issues'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  IssuesLazyRoute: typeof IssuesLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  IssuesLazyRoute: IssuesLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/issues"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/issues": {
      "filePath": "issues.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */

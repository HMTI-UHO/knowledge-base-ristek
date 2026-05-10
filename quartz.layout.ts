import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// 1. Definisikan Explorer yang sudah kita modifikasi agar bisa dipakai di kedua layout
const sharedExplorer = Component.Explorer({
  filterFn: (node: any) => {
    return node.name !== "00 - Meta"
  },
  mapFn: (node: any) => {
    if (node && node.displayName) {
      node.displayName = node.displayName.replace(/^(\d+[-_])+\s*/, "")
    }
  },
  sortFn: (a: any, b: any) => {
    const nameA = a?.name ?? ""
    const nameB = b?.name ?? ""
    return nameA.localeCompare(nameB, undefined, {
      numeric: true,
      sensitivity: "base",
    })
  },
  order: ["filter", "map", "sort"],
})

export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/HMTI-UHO",
      "Discord HMTI": "",
    },
  }),
}

export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        { Component: Component.Search(), grow: true },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    sharedExplorer, // Menggunakan explorer yang sudah di-fix
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(), 
    Component.ArticleTitle(), 
    Component.ContentMeta()
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        { Component: Component.Search(), grow: true },
        { Component: Component.Darkmode() },
      ],
    }),
    sharedExplorer, // Explorer di halaman folder sekarang juga ter-fix!
  ],
  right: [],
}
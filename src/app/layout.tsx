"use client"
import './globals.css'
import { Sidebar, Topbar } from '@/components'
import "@mantine/core/styles.css"
import { MantineProvider } from '@mantine/core'
import { useState } from 'react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [theme, setTheme] = useState<"dark" | "light">("light")
  return (
    <html lang="en">
      <body data-them={theme}>
        <MantineProvider forceColorScheme={theme} theme={{ fontFamily: "'Rethink Sans', sans-serif" }}>
          <div className="app">
            <Topbar />
            <div className="app_container">
              <Sidebar />
              <div className="app_content">
                {children}
              </div>
            </div>
          </div>
        </MantineProvider>
      </body>
    </html>
  )
}

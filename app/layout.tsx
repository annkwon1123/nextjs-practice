import "../styles/global.css"
import AboutUs from "./about-us/page"
import Navigation from "./components/navigation"

export const metadata = {
  title: "Home | Next Movies",
  description: "The best Movies on the best framework",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
        </body>
    </html>
  )
}
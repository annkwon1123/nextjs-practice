export const metadata = {
    description: "The best Movies on the best framework",
  }
  
export default function Layout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div>
        {children}
        $copy; Next JS is GREAT!
        </div>
    )
  }
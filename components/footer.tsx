import NavMenu from "./navMenu"
import NavMenuSmall from "./navMenuSmall"

export default function Footer() {
  return (
    <footer className="bg-grey-200 flex flex-col items-center mt-8 pb-14 space-y-4 md:flex-row md:space-y-0 md:justify-between md:mt-6 md:mx-4 md:pb-10 xl:mx-0 xl:mt-10 xl:pb-20">
      <h4 className="text-2xl font-bold md:text-3xl">omar@shour</h4>
      <NavMenuSmall />
      <NavMenu />
    </footer>
  )
}

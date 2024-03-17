import { Kbd } from "react-daisyui";
import AppFooter from "../../../AppFooter";

export default function Home() {
  return (
    <div className="flex flex-col h-full justify-between bg-neutral text-neutral-content rounded-xl">
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-left">
          <div className="flex items-center">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              Welcome to FFXVI Tools!
            </h2>
            <p className="ml-4 text-md">
              <Kbd>o</Kbd> + <Kbd>/</Kbd>
            </p>
          </div>
          <p className="mt-4 text-lg">
            Your go-to resource for planning and optimizing your adventures in Final Fantasy XVI.
          </p>
          <p className="mt-4 text-lg">
            We&apos;re currently under construction, but stay tuned for exciting updates!
          </p>
          <div className="mt-6">
            <a href="#" className="font-medium">Join our Discord</a>
            <span className="mx-4">|</span>
            <a href="#" className="font-medium">Support us on Patreon</a>
          </div>
        </div>
      </div>

      <AppFooter />
    </div>
  )
}
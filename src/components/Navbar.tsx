import Link from 'next/link'
import MaxWidthWrapper from './MaxWidthWrapper'
import { ModeToggle } from './ThemeSwitch'
import { buttonVariants } from './ui/button'
import { ArrowRight } from 'lucide-react'

const Navbar = () => {
	return (
		<nav className="sticky inset-x-0 top-0 z-30 h-14 border-b border-gray-200 backdrop-blur-lg transition-all">
		
				<div className="flex px-20 h-14 items-center justify-between border-b border-zinc-200">
					<Link href="/" className="z-40 flex font-semibold">
						<span>@guiDog</span>
					</Link>
					<div className="hidden items-center space-x-4 sm:flex">
						<>
							<ModeToggle />
							<Link
								className={buttonVariants({
									variant: 'ghost',
									size: 'sm',
								})}
								href="/signin"
							>
								Sign in
							</Link>
							<Link
								className={buttonVariants({
									size: 'sm',
								})}
								href="/registration"
							>
								Get Started <ArrowRight className="ml-1.5 h-5 w-5" />
							</Link>
						</>
					</div>
				</div>
			
		</nav>
	)
}

export default Navbar

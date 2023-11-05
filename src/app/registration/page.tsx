import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { ProfileForm } from '@/components/RegisterClient'

const Page = () => {
	const mainClasses =
		'mb-12 mt-14 sm:mt-20 w-4/6 items-center justify-center text-left'

	return (
		<MaxWidthWrapper className={mainClasses}>
			<ProfileForm source='registration' />
		</MaxWidthWrapper>
	)
}

export default Page

import { PropsWithChildren } from 'react'
import { Header } from '../../header/ui'

export function BaseLayout({ children }: PropsWithChildren) {
	return (
		<>
			<Header />
			<main>{children}</main>
		</>
	)
}

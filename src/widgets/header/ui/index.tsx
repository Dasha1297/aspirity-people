import { Logo } from './logo'
import { Profile } from './profile'
import { SearchInput } from './search-input'
import styles from './styles.module.scss'

export function Header() {
	return (
		<header className={styles.header}>
			<div className='container'>
				<div className={styles.headerContainer}>
					<Logo />
					<div className={styles.info}>
						<SearchInput />
						<Profile />
					</div>
				</div>
			</div>
		</header>
	)
}

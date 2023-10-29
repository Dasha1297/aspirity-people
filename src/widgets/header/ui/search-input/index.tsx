import { SearchIcon } from '@/app/assets/icons'
import styles from './styles.module.scss'

export function SearchInput() {
	return (
		<div className={styles['search-container']}>
			<input type='text' placeholder='Поиск...' />
			<div>
				<img src={SearchIcon} />
			</div>
		</div>
	)
}

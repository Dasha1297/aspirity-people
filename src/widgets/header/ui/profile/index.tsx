import { Link } from 'react-router-dom'

import styles from './styles.module.scss'

export function Profile() {
	return (
		<Link to='#'>
			<img
				src='https://russianemirates.family/assets/thumbnails/6a/6acb61728d4b5c8f8ae2767ed5a8faa0.jpg.webp'
				className={styles.profile}
			/>
		</Link>
	)
}

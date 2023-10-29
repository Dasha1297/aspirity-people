import { Link } from 'react-router-dom'

import styles from './styles.module.scss'
import { AspirityLogo } from '@/app/assets/icons'

export function Logo() {
	return (
		<Link to='/' className={styles.logo}>
			<img src={AspirityLogo} />
			<h1>Aspirity people</h1>
		</Link>
	)
}

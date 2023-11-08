import css from './SubscribeForm.module.css'
import { nanoid } from '@reduxjs/toolkit'

const SubscribeForm = () => {
	const emailId = nanoid()
	const handleClick = e => {
		e.preventDefault()
	}
	return (
		<form className={css.form}>
			<label htmlFor={emailId} className={css.envelope}>
				<svg width='20' height='16'>
					<use href='/src/images/icomoon/icons.svg#icon-icon-envelope'></use>
				</svg>
			</label>
			<input
				type='email'
				name='email'
				id={emailId}
				placeholder='Enter your email address'
				className={css.input}
			/>
			<button
				type='subscribe'
				className={css.button}
				onClick={e => {
					handleClick(e)
				}}
			>
				Subscribe
			</button>
		</form>
	)
}

export default SubscribeForm

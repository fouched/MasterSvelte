import { fail } from '@sveltejs/kit';


/** @type {import('./$types').Actions} */
export const actions = {	
	default: async ({ request }) => {
		const formData = await request.formData()
		const email = formData.get('email')
		const message = formData.get('message')

		// very basic validation
		const errors = {}
		if (!email || email.toString().length < 3) {
			console.log('email validation failed')
			errors.hasErrors = true
 			errors.email = email
			errors.emailMissing = 'Email required'
		}
		if (!message || message.toString().length < 3) {
			console.log('message validation failed');
			errors.hasErrors = true
			errors.message = message
			errors.messageMissing = 'Message required'
		}

		if (errors.hasErrors) {
			return fail(422, {errors})
		}

		return { success: true };		

	}
};

import type { Ref } from 'vue';
import { defineStore } from 'pinia';

export const authStore = defineStore('authStore', () => {
	const userLogin: Ref<AUTH.ILogin> = ref({
		mail: '',
		password: '',
	});

	const userSignup: Ref<AUTH.ISignupMail> = ref({
		login: '',
		mail: '',
		password: '',
	});

	return {
		userLogin,
		userSignup,
	};
});

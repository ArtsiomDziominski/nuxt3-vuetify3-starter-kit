<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { authStore } from '~/store/auth';
import { userStore } from '~/store/user';

const storeAuth = authStore();
const { userLogin } = storeToRefs(storeAuth);

const storeUser = userStore();
const { isAuthenticated } = storeToRefs(storeUser);

const router = useRouter();

const submit = async (): Promise<void> => {
	console.log('submit');
};
</script>

<template>
	<v-form
		fast-fail
		class="form"
		@submit.prevent="submit"
	>
		<v-card
			color="secondary"
			class="mx-auto pa-8 card"
		>
			<v-card-title class="card__title">
				<p class="text-h4">
					Вход
				</p>
			</v-card-title>
			<v-card-item class="card__item">
				<v-text-field
					v-model="userLogin.mail"
					class="card__input"
					label="Email address"
					placeholder="johndoe@gmail.com"
					type="email"
					variant="outlined"
					required
				/>

				<v-text-field
					v-model="userLogin.password"
					class="card__input"
					hint="Enter your password to access this website"
					label="Password"
					type="password"
					variant="outlined"
				/>
				<p class="card__signup text-grey-lighten-2 text-caption">
					Нет аккаунта? <NuxtLink
						class="text-white"
						to="/signup"
					>
						Регистрация
					</NuxtLink>
				</p>
			</v-card-item>

			<v-card-actions class="card__actions">
				<v-btn
					class="mt-2"
					type="submit"
					block
				>
					Войти
				</v-btn>
			</v-card-actions>
		</v-card>
	</v-form>
</template>

<style scoped lang="scss">
.form {
  width: 100%;

  .card {
    min-width: 300px;
    max-width: 600px;
    width: 100%;

    &__title {
      display: flex;
      justify-content: center;
    }

    &__input {
      padding: 6px 0;
    }

    &__signup {

      a {
        text-decoration: none;
        color: var(--color-text);
      }
    }

    &__actions {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>

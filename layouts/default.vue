<script setup lang="ts">

</script>

<template>
	<v-app>
		<div class="app">
			<LayoutHeader class="header" />
			<main class="page">
				<slot />
			</main>
			<LayoutFooter class="footer" />
		</div>
	</v-app>
</template>

<style scoped lang="scss">
.app {
  display: grid;
  grid-template-rows: 64px calc( 100vh - 64px) min-content;
  grid-template-columns: 100%;

  .header {
    grid-area: 1/2/1/2;
  }

  .page {
    grid-area: 2/1/3/2;
  }

  .footer {
    grid-area: 3/1/4/2;
  }
}
</style>

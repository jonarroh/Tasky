<script>
	import HeaderNav from "$lib/images/components/HeaderNav.svelte";
import "../app.postcss";
    import './styles.css';
</script>

<div class="app">
	<HeaderNav/>
	<main class="text-dark dark:text-white">
		<slot></slot>
	</main>
</div>

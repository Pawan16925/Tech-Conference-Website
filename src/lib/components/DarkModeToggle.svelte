<script>
    import { onMount } from 'svelte';

    let darkMode = false;

    function toggleDarkMode() {
        darkMode = !darkMode;
        document.documentElement.setAttribute('data-bs-theme', darkMode ? 'dark' : 'light');
        localStorage.setItem('darkMode', darkMode.toString());
    }

    onMount(() => {
        const savedMode = localStorage.getItem('darkMode');
        if (savedMode) {
            darkMode = savedMode === 'true';
            document.documentElement.setAttribute('data-bs-theme', darkMode ? 'dark' : 'light');
        }
    });
</script>

<button 
    class="btn btn-outline-secondary" 
    on:click={toggleDarkMode}
>
    {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
</button>
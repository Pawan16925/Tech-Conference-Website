<script>
    import DarkModeToggle from './DarkModeToggle.svelte';
</script>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
        <a class="navbar-brand" href="/">Tech Conference 2025</a>
        <button 
            class="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
        >
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <a class="nav-link" href="/">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/speakers">Speakers</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/schedule">Schedule</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/sponsors">Sponsors</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/about">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/contact">Contact</a>
                </li>
                <li class="nav-item">
                    <DarkModeToggle />
                </li>
            </ul>
        </div>
    </div>
</nav>
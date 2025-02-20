<script>
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import { speakers } from '$lib/data/speakers.js';
</script>

<Header />

<main class="container py-5">
    <h1 class="text-center mb-4">Our Speakers</h1>
    
    <div class="row">
        {#each speakers as speaker}
            <div class="col-md-4 mb-4">
                <div class="card h-100">
                    <img 
                        src={speaker.image || '/images/default-speaker.jpg'} 
                        alt={speaker.name} 
                        class="card-img-top"
                    >
                    <div class="card-body">
                        <h5 class="card-title">{speaker.name}</h5>
                        <p class="card-text">{speaker.title}</p>
                        <p class="card-text">{speaker.bio}</p>
                        {#if speaker.keynote}
                            <span class="badge bg-primary">Keynote Speaker</span>
                        {/if}
                    </div>
                </div>
            </div>
        {/each}
    </div>
</main>

<Footer />
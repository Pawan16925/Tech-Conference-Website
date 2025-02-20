<script>
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import { sponsors } from '$lib/data/sponsors.js';
</script>

<Header />

<main class="container py-5">
    <h1 class="text-center mb-4">Our Sponsors</h1>
    
    {#each Object.entries(sponsors) as [tier, sponsorList]}
        <section class="mb-5">
            <h2 class="text-center text-capitalize mb-4">{tier} Sponsors</h2>
            <div class="row justify-content-center">
                {#each sponsorList as sponsor}
                    <div class="col-md-3 col-sm-6 mb-4 text-center">
                        <a href={sponsor.website} target="_blank" rel="noopener noreferrer">
                            <img 
                                src={sponsor.logo} 
                                alt={sponsor.name} 
                                class="img-fluid" 
                                style="max-height: 150px;"
                            >
                        </a>
                    </div>
                {/each}
            </div>
        </section>
    {/each}
</main>

<Footer />
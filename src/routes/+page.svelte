<script>
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import { speakers } from '$lib/data/speakers.js';
    import { createCountdown } from '$lib/utils/countdown.js';
    import { onMount } from 'svelte';

    const conferenceDate = '2025-03-15';
    let countdown = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    let featuredSpeakers = speakers.filter(speaker => speaker.keynote);

    onMount(() => {
        const getCountdown = createCountdown(conferenceDate);
        const updateCountdown = () => {
            countdown = getCountdown();
            if (countdown.total > 0) {
                requestAnimationFrame(updateCountdown);
            }
        };
        updateCountdown();
    });
</script>

<Header />

<main>
    <section class="hero bg-primary text-white text-center py-5">
        <div class="container">
            <h1 class="display-4">Tech Conference 2025</h1>
            <p class="lead">Connecting Innovators, Inspiring Future</p>
            
            <div class="countdown my-4">
                <h2>Conference Starts In</h2>
                <div class="d-flex justify-content-center">
                    <div class="mx-3">
                        <h3>{countdown.days}</h3>
                        <small>Days</small>
                    </div>
                    <div class="mx-3">
                        <h3>{countdown.hours}</h3>
                        <small>Hours</small>
                    </div>
                    <div class="mx-3">
                        <h3>{countdown.minutes}</h3>
                        <small>Minutes</small>
                    </div>
                    <div class="mx-3">
                        <h3>{countdown.seconds}</h3>
                        <small>Seconds</small>
                    </div>
                </div>
            </div>
            
            <a href="/contact" class="btn btn-light btn-lg">Register Now</a>
        </div>
    </section>

    <section class="featured-speakers py-5">
        <div class="container">
            <h2 class="text-center mb-4">Keynote Speakers</h2>
            <div class="row">
                {#each featuredSpeakers as speaker}
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
                            </div>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </section>
</main>

<Footer />

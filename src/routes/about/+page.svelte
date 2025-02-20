<script>
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
</script>

<Header />

<main class="container py-5">
    <div class="row">
        <div class="col-md-8 offset-md-2">
            <h1 class="text-center mb-4">About Tech Conference 2025</h1>
            
            <section class="mb-4">
                <h2>Our Mission</h2>
                <p>
                    Tech Conference 2025 is a premier gathering of innovative minds, 
                    thought leaders, and technology enthusiasts. Our mission is to 
                    foster collaboration, share cutting-edge insights, and inspire 
                    the next generation of technological advancements.
                </p>
            </section>
            
            <section class="mb-4">
                <h2>Conference Details</h2>
                <ul>
                    <li><strong>Date:</strong> March 15-16, 2025</li>
                    <li><strong>Location:</strong> Silicon Valley Convention Center</li>
                    <li><strong>Expected Attendees:</strong> 1,500+ Tech Professionals</li>
                </ul>
            </section>
            
            <section>
                <h2>Why Attend?</h2>
                <div class="row">
                    <div class="col-md-4">
                        <div class="card mb-3">
                            <div class="card-body">
                                <h5 class="card-title">Networking</h5>
                                <p class="card-text">Connect with industry leaders and peers.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card mb-3">
                            <div class="card-body">
                                <h5 class="card-title">Learning</h5>
                                <p class="card-text">Gain insights from top experts in various tech domains.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card mb-3">
                            <div class="card-body">
                                <h5 class="card-title">Innovation</h5>
                                <p class="card-text">Discover the latest technological trends and innovations.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</main>

<Footer />
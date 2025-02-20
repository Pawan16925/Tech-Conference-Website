<script>
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import { onMount } from 'svelte';

    let name = '';
    let email = '';
    let message = '';
    let formSubmitted = false;

    function handleSubmit(event) {
        event.preventDefault();
        // Simulate form submission
        console.log('Form submitted', { name, email, message });
        formSubmitted = true;
        
        // Reset form
        name = '';
        email = '';
        message = '';
    }

    const socialLinks = [
        { 
            name: 'Twitter', 
            url: 'https://twitter.com/techconference', 
            icon: '🐦' 
        },
        { 
            name: 'LinkedIn', 
            url: 'https://linkedin.com/company/techconference', 
            icon: '💼' 
        },
        { 
            name: 'Facebook', 
            url: 'https://facebook.com/techconference', 
            icon: '👥' 
        }
    ];
</script>

<Header />

<main class="container py-5">
    <div class="row">
        <div class="col-md-6 offset-md-3">
            <h1 class="text-center mb-4">Contact Us</h1>
            
            {#if formSubmitted}
                <div class="alert alert-success">
                    Thank you for your message! We'll get back to you soon.
                </div>
            {/if}
            
            <form on:submit={handleSubmit}>
                <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input 
                        type="text" 
                        class="form-control" 
                        id="name" 
                        bind:value={name} 
                        required
                    >
                </div>
                
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input 
                        type="email" 
                        class="form-control" 
                        id="email" 
                        bind:value={email} 
                        required
                    >
                </div>
                
                <div class="mb-3">
                    <label for="message" class="form-label">Message</label>
                    <textarea 
                        class="form-control" 
                        id="message" 
                        rows="4" 
                        bind:value={message} 
                        required
                    ></textarea>
                </div>
                
                <button type="submit" class="btn btn-primary">Send Message</button>
            </form>
            
            <div class="text-center mt-4">
                <h3>Connect With Us</h3>
                <div class="d-flex justify-content-center">
                    {#each socialLinks as link}
                        <a 
                            href={link.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            class="mx-2 text-decoration-none"
                        >
                            {link.icon} {link.name}
                        </a>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</main>

<Footer />
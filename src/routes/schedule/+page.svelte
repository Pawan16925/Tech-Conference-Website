<script>
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import { scheduleData } from '$lib/data/schedule.js';

    let activeDay = scheduleData[0].day;

    function filterSessions(day) {
        activeDay = day;
    }

    $: filteredSessions = scheduleData.find(schedule => schedule.day === activeDay)?.sessions || [];
</script>

<Header />

<main class="container py-5">
    <h1 class="text-center mb-4">Conference Schedule</h1>
    
    <div class="text-center mb-4">
        {#each scheduleData as schedule}
            <button 
                class="btn mx-2 {activeDay === schedule.day ? 'btn-primary' : 'btn-outline-primary'}"
                on:click={() => filterSessions(schedule.day)}
            >
                {schedule.day} ({schedule.date})
            </button>
        {/each}
    </div>

    <div class="table-responsive">
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Time</th>
                    <th>Session</th>
                    <th>Speaker</th>
                    <th>Track</th>
                </tr>
            </thead>
            <tbody>
                {#each filteredSessions as session}
                    <tr>
                        <td>{session.time}</td>
                        <td>{session.title}</td>
                        <td>{session.speaker}</td>
                        <td>{session.track}</td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</main>

<Footer />
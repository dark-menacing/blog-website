<script lang="ts">
    import type {PageData} from './$types';
    import Blog from './Blog.svelte';

    export let data: PageData
</script>

<h1>Blogs</h1>

<div class="blogs">
    {#each data.blogs as blog}
        <Blog title="{blog.title}"/>
    {/each}
</div>


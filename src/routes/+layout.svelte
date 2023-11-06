<script>
  import {page} from '$app/stores';

  import "../style/style.scss";
</script>

<div class="navbar">
  <a href="/" class:active={$page.url.pathname == '/'}>Home</a>
  <a href="/blogs" class:active={$page.url.pathname == '/blogs'}>Blogs</a>
</div>

<slot />

<footer>Made by <a href="https://github.com/dark-menacing">dark-menacing</a></footer>

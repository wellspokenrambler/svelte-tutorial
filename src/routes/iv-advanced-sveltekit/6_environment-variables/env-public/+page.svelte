<script>
    import { env } from '$env/dynamic/public';
</script>

<div class="absolute inset-0 -z-1" style="background-color: {env.PUBLIC_THEME_BACKGROUND_COLOR}; color: {env.PUBLIC_THEME_FOREGROUND_COLOR};">
    <h1 class="mt-4">Public Environment Variables</h1>
    <p>Background Color: {env.PUBLIC_THEME_BACKGROUND_COLOR}</p>
    <p>Foreground Color: {env.PUBLIC_THEME_FOREGROUND_COLOR}</p>
</div>
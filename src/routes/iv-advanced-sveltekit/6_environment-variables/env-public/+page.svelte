<script>
    import { PUBLIC_THEME_BACKGROUND_COLOR, PUBLIC_THEME_FOREGROUND_COLOR } from '$env/static/public';
</script>

<div class="absolute inset-0 -z-1" style="background-color: {PUBLIC_THEME_BACKGROUND_COLOR}; color: {PUBLIC_THEME_FOREGROUND_COLOR};">
    <h1>Public Environment Variables</h1>
    <p>Background Color: {PUBLIC_THEME_BACKGROUND_COLOR}</p>
    <p>Foreground Color: {PUBLIC_THEME_FOREGROUND_COLOR}</p>
</div>
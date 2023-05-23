<script lang="ts">
  import { Img } from "astro-imagetools/components";
  import type { MarqueeImage } from "@customTypes/marquee/types";

  export const images: MarqueeImage[] = [];
  export const speed: number = 1;
  export const width: number = 190;
  export const height: number = 140;
</script>

<div class="marquee">
  {#each images as image}
    <a href={image.href}>
      <div>
        <Img src={image.src} alt={image.alt} {height} {width} />
      </div>
      <div>
        {image.label}
      </div>
    </a>
  {/each}
</div>

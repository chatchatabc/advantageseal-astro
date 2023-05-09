<script lang="ts">
  import { onMount } from "svelte";

  export let links: Sublink[] = [];

  type Sublink = { name: string; link: string };
  var currentDescription: HTMLDivElement;
  onMount(() => {
    const subLinks = document.querySelectorAll(".subLinks li a");
    const descriptionItems = document.querySelectorAll(
      ".descriptionCollection .descriptionItem"
    );
    descriptionItems[0].classList.toggle("hidden");
    currentDescription = descriptionItems[0] as HTMLDivElement;
    subLinks.forEach((link, index) => {
      link.addEventListener("mouseover", (e) => {
        currentDescription.classList.toggle("hidden");
        currentDescription = descriptionItems[index] as HTMLDivElement;
        currentDescription.classList.toggle("hidden");
      });
    });
  });
</script>

<div
  class="sub-nav flex-1 absolute hidden bg-blue-500 group-hover:flex group-hover:justify-stretch"
>
  <div class="sub-nav-list min-w-[300px] max-w-[300px]">
    <ul class="subLinks divide-y-2 p-[0.5rem]">
      {#each links as sublink}
        <li class="block">
          <a class="py-[1rem] block" href={sublink.link}>
            {sublink.name}
          </a>
        </li>
      {/each}
    </ul>
  </div>
  <div class="sub-nav-details min-w-[300px] max-w-[300px]">
    <slot name="description" />
  </div>
</div>

<script lang="ts">
  import { onMount } from "svelte";

  export let links: Sublink[] = [];
  export let reversed: boolean = false;

  type Sublink = { name: string; link: string };
  var currentDescription: HTMLDivElement;
  onMount(() => {
    const subLinks = document.querySelectorAll(".subLinks li a");
    const descriptionItems = document.querySelectorAll(
      ".descriptionCollection .descriptionItem"
    );
    descriptionItems[0].classList.remove("hidden");
    currentDescription = descriptionItems[0] as HTMLDivElement;
    subLinks.forEach((link, index) => {
      link.addEventListener("mouseover", (e) => {
        currentDescription.classList.add("hidden");
        currentDescription = descriptionItems[index] as HTMLDivElement;
        currentDescription.classList.remove("hidden");
      });
    });
  });
</script>

<div class="relative">
  <div
    class={`sub-nav flex-1 absolute hidden border-b-[5px] border-b-[#0ba0e1] ${
      reversed ? "flex-row-reverse" : "flex-row"
    } group-hover:flex group-hover:justify-stretch bg-white z-[3]`}
  >
    <div
      class={`sub-nav-list min-w-[200px] max-w-[200px] ${
        reversed ? "border-l-[1px]" : "border-r-[1px]"
      } text-[#777]`}
    >
      <ul class="subLinks divide-y-2 p-[0.5rem]">
        {#each links as sublink}
          <li class="block">
            <a
              class="py-[1rem] block text-[#777] hover:text-[#0ba0e1]"
              href={sublink.link}
            >
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
</div>

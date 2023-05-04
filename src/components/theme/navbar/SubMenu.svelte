<script lang="ts">
  export let links: Sublink[] = [];

  type Sublink = { name: string; link: string };
</script>

<div
  class="sub-nav flex-1 absolute hidden min-w-[300px] bg-blue-500 group-hover:flex group-hover:justify-stretch"
>
  <div class="sub-nav-list">
    <ul class=" divide-y-2 p-[0.5rem]">
      {#each links as sublink}
        <li class="block py-[1rem]">
          <a href={sublink.link}>
            {sublink.name}
          </a>
        </li>
      {/each}
    </ul>
  </div>
  <div class="sub-nav-details" />
</div>

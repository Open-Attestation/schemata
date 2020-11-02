<script lang="ts">
  import schemata from "./schemas.json";

  function getName(path) {
    const elements = path.split("/");
    return elements[elements.length - 2];
  }
  function getVersion(path) {
    const elements = path.split("/");
    return elements[elements.length - 1];
  }
  function getDomain(path) {
    const elements = path.split("/");
    return elements
      .slice(0, elements.length - 2)
      .reverse()
      .join(".");
  }
</script>

<style>
  a:visited {
    color: inherit;
  }
  .container {
    max-width: 100%;
  }
  .header-one {
    line-height: 4.8rem;
    letter-spacing: -0.02em;
    color: #2c3549;
  }
  .header-two {
    line-height: 1.8rem;
  }
  .schemata {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 40px;
  }
  .schema-content {
    background-color: #e5e5e5;
  }
  .schema-link:visited {
    color: #3182ce;
  }
  @media (min-width: 640px) {
    .container {
      max-width: 640px;
    }
  }
  @media (min-width: 768px) {
    .container {
      max-width: 768px;
    }
    .schemata {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 1024px) {
    .container {
      max-width: 1024px;
    }
  }
  @media (min-width: 1280px) {
    .container {
      max-width: 1280px;
    }
  }
</style>

<div class="flex flex-col min-h-screen">
  <nav class="py-3 text-white bg-red-800">
    <div class="container mx-auto px-6 md:px-2">
      <div class="flex flex-row flex-grow flex-shrink justify-between">
        <div class="flex self-center"><a href="/">Open<span class="font-bold">Attestation</span></a></div>
      </div>
    </div>
  </nav>
  <main class="flex-1 flex flex-col">
    <section>
      <div class="container mx-auto px-6 md:px-2 py-8">
        <div class="flex flex-wrap items-center">
          <div class="w-full sm:w-2/3">
            <div class="py-12 text-center sm:text-left">
              <div class="font-semibold text-6xl header-one">Schemata</div>
              <div class="font-light text-2xl mt-4 w-full md:w-9/12 lg:w-7/12 header-two">
                Explore the different hosted schemata
              </div>
            </div>
          </div>
          <img class="w-full sm:w-1/3" src="images/undraw_personal_file_222m.png" />
        </div>
      </div>
    </section>
    <section class="schema-content flex-1">
      <div class="container mx-auto p-6 md:px-2 md:px-00 schemata">
        {#each schemata as schema}
          <div>
            <div class="bg-blue-800 text-white text-center p-2 border border-blue-800">
              {getName(schema.path).toUpperCase()}
              v{getVersion(schema.path)}
              <span class="text-gray-300 text-xs">({getDomain(schema.path).toLowerCase()})</span>
            </div>
            <div class="border border-blue-800 border-t-0 text-center p-2 bg-white">
              {#each schema.files as file}
                <div>
                  <a
                    href="https://schemata.openattestation.com/{schema.path}/{file}"
                    target="_blank"
                    class="text-blue-600 schema-link">{file}</a>
                </div>
              {/each}
            </div>
          </div>
        {/each}
      </div>
    </section>
  </main>
  <footer class="py-6 text-white bg-red-800">
    <div class="container mx-auto px-6 md:px-2" />
  </footer>
</div>

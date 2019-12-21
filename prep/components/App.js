import DexHeader from '../components/structure/dex-header.js';
import Home from '../components/content/home.js';

export default {
  name: 'App',
  components: { DexHeader, Home },
  template: `
    <div class="main-container w-11/12 sm:w-3/4 lg:w-3/4 xl:w-2/3 m-auto flex-1">
      <div class="left-gutter inline-block"></div>
      <div class="inline-block min-w-full">
        <main class="flex flex-col">
          <DexHeader />
          <Home />
        </main>
      </div>
    </div>
  `,
};
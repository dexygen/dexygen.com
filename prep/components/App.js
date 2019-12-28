import DexHeader from '../components/structure/dex-header.js';
import DexFooter from '../components/structure/dex-footer.js';
import Home from '../components/content/home.js';

export default {
  name: 'App',
  components: { DexHeader, DexFooter, Home },
  template: `
    <div class="h-screen flex flex-col">
      <div class="w-11/12 sm:w-3/4 lg:w-3/4 xl:w-2/3 m-auto flex-1">
        <div class="app--left-gutter inline-block"></div>
        <main class="app--main inline-block min-w-full">
          <div class="flex flex-col">
            <DexHeader />
            <div class="app--content">
              <Home />
            </div>
          </div>
        </main>
      </div>
      <DexFooter />
    </div>
  `,
};
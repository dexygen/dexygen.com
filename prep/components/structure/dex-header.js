const template = `
  <header>
    <div class="header--upper flex flex-col lg:flex-row lg:justify-between px-2">
      <div class="text-5xl md:text-6xl">
        <span class="tomorrow-sans-font font-bold">Dexygen</span>
      </div>
      <nav class="sans-font lg:mt-8 ml-1 lg:text-center md:text-xl font-semibold">
        <a class="mr-1" href="./index.html">Home</a>
        <a class="mr-1" href="./index.html">About</a>
        <a href="./index.html">Contact</a>
      </nav>
    </div>
    <div class="header--lower flex">
      <img class="inline-block" src="./assets/images/dexygen-min.png" alt=""/>
      <div class="header--tagline-container w-full pl-3 text-lg sm:text-2xl md:text-3xl flex flex-col sm:flex-row sans-font">
          <span>Software:&nbsp;</span>
          <span>Powerful and Simple</span>
      </div>
    </div>
  </header>
`;

export default {
  name: 'DexHeader',
  template: template
};
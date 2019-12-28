const template = `
  <footer class="mt-auto mx-auto mb-0 footer-proper tomorrow-sans-font text-center py-1">
    <div class="text-sm">© 2009-<span>{{copyrightThroughYear}}</span> Dexygen LLC</div>
    <div class="flex justify-center">
      <div class="ml-2">
        <a href="https://dev.to/dexygen" target="_profile">
          <i class="fab fa-dev text-2xl" title="dexygen's DEV Profile"></i>
        </a>
      </div>
      <div class="ml-2">
        <a href="https://github.com/dexygen" target="_profile">
          <i class="fab fa-github text-2xl" title="dexygen's Github Profile"></i>
        </a>
      </div>
      <div class="ml-2">
        <a href="https://www.linkedin.com/company/dexygen/" target="_profile">
          <i class="fab fa-linkedin-in" title="dexygen's company LinkedIn page"></i>
        </a>
      </div>
      <div class="ml-2">
        <a href="https://stackoverflow.com/users/34806/dexygen?tab=profile" target="_profile">
          <i class="fab fa-stack-overflow" title="dexygen's StackOverflow Profile"></i>
        </a>
      </div>
    </div>
  </footer>
`;

export default {
  name: 'DexFooter',
  template: template,
  computed: {
    copyrightThroughYear() {
      return new Date().getFullYear();
    }
  }
};
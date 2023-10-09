export const useLayoutStore = defineStore("layoutStore", {
  state: () => ({
    home: true,
    themes: {},
    lightsOff: false,
    isMobile: false,
    isTablet: false,
    isTouch: false,
    footer: true,
  }),
  actions: {
    setHome(status: boolean) {
      this.home = status;
    },
    setThemes(newThemes: any) {
      this.themes = newThemes;
    },
    toggleLights() {
      this.lightsOff = !this.lightsOff;
    },
    setIsMobile(isMobileDevice: boolean) {
      this.isMobile = isMobileDevice;
    },
    setIsTablet(isTabletDevice: boolean) {
      this.isTablet = isTabletDevice;
    },
    setIsTouch(isTouchScreenDevice: boolean) {
      this.isTouch = isTouchScreenDevice;
    },
    hideFooter() {
      this.footer = false;
    },
    showFooter() {
      this.footer = true;
    },
  },
});

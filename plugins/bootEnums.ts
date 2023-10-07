/**
 * Injects the bootEnums method into the context object
 * @param context - The context object to inject into
 * @param inject - The injection function
 */
export default (context: any, inject: any): void => {
  /**
   * Bootstraps the enums object with i18n support
   * @param enums - The enums object
   * @param i18n - The i18n object
   * @returns - The bootstrapped enums object
   */
  inject('bootEnums', (enums: any, i18n: any): any => {
    const bootstrappedEnums: any = {};

    Object.keys(enums).forEach((enumName: string): void => {
      bootstrappedEnums[enumName] = new Enum(enums[enumName], i18n);
    });

    return bootstrappedEnums;
  });
};

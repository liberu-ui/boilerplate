import Enum from '@liberu-ui/enums';

export default (context: any, inject: any) => {
  inject('bootEnums', (enums: any, i18n: any) => {
    const obj: any = {};

    Object.keys(enums).forEach(
      (enumName: string) => (obj[enumName] = new Enum(enums[enumName], i18n))
    );

    return obj;
  });
};

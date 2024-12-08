declare module 'country-list' {
  interface Country {
    name: string;
    code: string;
  }

  export function getNames(): string[];
  export function getCodes(): string[];
  export function getName(code: string): string | undefined;
  export function getCode(name: string): string | undefined;
  export function getNameList(): Country[];
}

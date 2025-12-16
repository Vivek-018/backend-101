export function sanitizeInputString(input:string):string {
  return  input.replace(/[^a-zA-Z0-9_\s]/g, '');
}
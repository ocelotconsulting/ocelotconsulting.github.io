declare module '*.mdx' {
  let MDXComponent: (props: any) => JSX.Element;
  export let meta: Record<string, any>
  export default MDXComponent;
}
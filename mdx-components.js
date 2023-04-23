// This file is required to use @next/mdx in the `app` directory.
export function useMDXComponents(components) {
  // Allows customizing built-in components, e.g. to add styling.
  return {
    h1: ({ children }) => <h1 className='text-4xl font-bold text-black mb-4'>{children}</h1>,
    h2: ({ children }) => <h2 className='text-3xl font-bold text-black mb-4'>{children}</h2>,
    h3: ({ children }) => <h3 className='text-2xl font-bold text-black mb-4'>{children}</h3>,
    h4: ({ children }) => <h4 className='text-xl font-bold text-black mb-4'>{children}</h4>,
    h5: ({ children }) => <h5 className='text-lg font-bold text-black mb-4'>{children}</h5>,
    p: ({ children }) => <p className='mb-4'>{children}</p>,
    a: ({ href, children }) => <a style={{ color: '#3273dc' }} href={href}>{children}</a>,
    ul: ({ children }) => <ul className='mb-4 list-disc pl-4'>{children}</ul>,
    ol: ({ children }) => <ol className='mb-4 list-decimal pl-4'>{children}</ol>,
    pre: ({ children }) => <pre className='p-4 mb-4 bg-black'>{children}</pre>,
    ...components,
  }
}
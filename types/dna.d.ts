declare module "*.dna" {
  import type { ComponentType } from "react"
  const component: ComponentType<any>
  export default component
  export * from "react"
}

// Support for DNA-Lang specific constructs
declare global {
  namespace JSX {
    interface IntrinsicElements {
      organism: any
      genome: any
      gene: any
      mutation: any
      agent: any
    }
  }
}

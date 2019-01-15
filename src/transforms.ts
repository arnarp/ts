/**
 * Exploration of typescript transforms
 * https://blog.logrocket.com/using-typescript-transforms-to-enrich-runtime-code-3fd2863221ed
 */
import * as ts from "typescript";

export interface TransformerOptions {}

export function transformer(program: ts.Program, opts?: TransformerOptions) {
  function visitor(ctx: ts.TransformationContext, sf: ts.SourceFile) {
    const typeChecker = program.getTypeChecker();

    const visitor: ts.Visitor = (node: ts.Node) => {
      // Implementation here
      return ts.visitEachChild(node, visitor, ctx);
    };

    return visitor;
  }

  return (ctx: ts.TransformationContext) => {
    return (sf: ts.SourceFile) => ts.visitNode(sf, visitor(ctx, sf));
  };
}

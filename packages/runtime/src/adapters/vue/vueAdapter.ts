import { Source } from "@locator/shared";
import type { ComponentInternalInstance } from "vue";
import { TreeNode, TreeNodeComponent } from "../../types/TreeNode";
import { AdapterObject, FullElementInfo, TreeState } from "../adapterApi";
import { goUpByTheTree } from "../goUpByTheTree";
import { HtmlElementTreeNode } from "../HtmlElementTreeNode";
import { getVueComponentBoundingBox } from "./getVNodeBoundingBox";

type VueElement = HTMLElement & {
  __vueParentComponent?: ComponentInternalInstance;
};

export function getElementInfo(found: VueElement): FullElementInfo | null {
  const parentComponent = found.__vueParentComponent;
  if (parentComponent) {
    if (!parentComponent.type) {
      return null;
    }

    const componentBBox = getVueComponentBoundingBox(parentComponent);

    const { __file, __name } = parentComponent.type;
    if (__file && __name) {
      return {
        thisElement: {
          box: found.getBoundingClientRect(),
          label: found.nodeName.toLowerCase(),
          link: {
            column: 1,
            line: 1,
            filePath: __file,
            projectPath: "",
          },
        },
        htmlElement: found,
        parentElements: [],
        componentBox: componentBBox || found.getBoundingClientRect(),
        componentsLabels: [
          {
            label: __name,
            link: {
              column: 1,
              line: 1,
              filePath: __file,
              projectPath: "",
            },
          },
        ],
      };
    }
  }
  return null;
}

export class VueTreeNodeElement extends HtmlElementTreeNode {
  getSource(): Source | null {
    const element = this.element as VueElement;
    const parentComponent = element.__vueParentComponent;
    if (parentComponent && parentComponent.type) {
      const { __file } = parentComponent.type;
      if (__file) {
        return {
          fileName: __file,
          lineNumber: 1,
          columnNumber: 1,
        };
      }
    }
    return null;
  }
  getComponent(): TreeNodeComponent | null {
    return null;
  }
  // getComponent(): TreeNodeComponent | null {
  //   const element = this.element as VueElement;
  //   const parentComponent = element.__vueParentComponent;
  //   if (parentComponent && parentComponent.type) {
  //     const { __name } = parentComponent.type;
  //     if (__name) {
  //       return {
  //         label: __name,
  //         definitionLink: this.getSource() || undefined,
  //       };
  //     }
  //   }
  //   return null;
  // }
}

function getTree(element: HTMLElement): TreeState | null {
  const originalRoot: TreeNode = new VueTreeNodeElement(element);

  return goUpByTheTree(originalRoot);
}

const vueAdapter: AdapterObject = {
  getElementInfo,
  getTree,
};

export default vueAdapter;

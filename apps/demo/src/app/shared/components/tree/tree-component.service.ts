import { Injectable } from '@angular/core';
import { assert, forNext, SmartArray } from '@smarttools/smart-ngrx';

import { VirtualArrayFlagService } from '../../virtual-array-flag.service';
import { CommonSourceNode } from './common-source-node.interface';
import type { TreeComponent } from './tree.component';
import { TreeNode } from './tree-node.interface';

@Injectable()
export class TreeComponentService {
  private expandMap = new Map<string, boolean>();
  private component: TreeComponent | null = null;
  private isVirtual = false;

  constructor(private virtualArrayFlagService: VirtualArrayFlagService) {
  }

  set form(component: TreeComponent) {
    this.component = component;
  }

  toggleExpand(node: TreeNode): void {
    if (this.isExpanded(node)) {
      this.expandMap.delete(node.level + ':' + node.node.id);
      node.isExpanded = false;
    } else {
      this.expandMap.set(node.level + ':' + node.node.id, true);
      node.isExpanded = true;
    }
    this.applyRange();
  }

  applyRange(): void {
    const component = this.component;
    assert(!!component, 'component is null');
    if (component.location() === undefined) {
      return;
    }
    component.fullDataSource = this.transform(
      component.location()!.departments as SmartArray<CommonSourceNode, CommonSourceNode>,
      0,
      component.range.start,
      component.range.end,
    );
    component.dataSource = component.fullDataSource.slice(
      component.range.start,
      component.range.end,
    );
  }

  transform(
    children: SmartArray<CommonSourceNode, CommonSourceNode>,
    level: number,
    startRange: number,
    endRange: number,
  ): TreeNode[] {
    const result: TreeNode[] = [];
    if (children.length === 0) {
      return [];
    }
    forNext(children.rawArray!, (c, i) => {
      let node: CommonSourceNode | string = c;
      if (startRange <= result.length && result.length <= endRange) {
        node = children[i];
      } else {
        // we don't need to do anything with this node
        // but the tree needs to know it is longer so
        // we increment the length.
        result.length++;
        return;
      }
      const r =
        typeof node === 'string'
          ? { node: { id: node, isLoading: true }, name: '', level, hasChildren: false }
          : {
              name: node.name,
              node,
              level,
              hasChildren: Boolean(node.children?.length),
              isExpanded: this.isExpanded({ node, level } as TreeNode),
            };
      result.push(r as TreeNode);
      if (this.isExpanded(r as TreeNode)) {
        const treeNode = children[i] as CommonSourceNode;
        const childNodes = this.transform(
          level === 0 && this.virtualArrayFlagService.virtualArrayFlag ? treeNode.virtualChildren : treeNode.children,
          level + 1,
          startRange - result.length,
          endRange - result.length,
        );
        result.push(...childNodes);
      }
    });
    return result;
  }

  addChild(row: CommonSourceNode, parent: TreeNode): void {
    if (parent.isExpanded === false) {
      this.toggleExpand(parent);
    }

    parent.node.children.addToStore!(row, parent.node);
  }

  deleteNode(node: TreeNode): void {
    // because delete is an optional method,
    // but it actually exist by definition,
    // we can safely assert that it exist.
    node.node.delete!();
  }

  cancelEdit(node: TreeNode): void {
    if (this.component!.addingParent) {
      this.removeChild(node, this.component!.addingParent);
    }
    this.component!.addingParent = null;
    this.component!.editingNode = '';
    this.component!.addingNode = '';
    node.name = node.node.name;
  }

  removeChild(row: TreeNode, parent: TreeNode): void {
    parent.node.children.removeFromStore!(row.node, parent.node);
  }

  private isExpanded(node: TreeNode): boolean {
    return this.expandMap.get(node.level + ':' + node.node.id) ?? false;
  }
}

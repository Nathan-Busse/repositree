import { TreeNode } from '../types';

export function generateTreeText(tree: TreeNode): string {
  const lines: string[] = [];
  
  function traverse(node: TreeNode, prefix: string = '', isLast: boolean = true) {
    if (node.name === 'root') {
      node.children?.forEach((child, index) => {
        traverse(child, '', index === node.children!.length - 1);
      });
      return;
    }

    const connector = isLast ? '└── ' : '├── ';
    const childPrefix = isLast ? '    ' : '│   ';
    
    lines.push(prefix + connector + node.name + (node.type === 'directory' ? '/' : ''));
    
    if (node.children) {
      node.children.forEach((child, index) => {
        traverse(child, prefix + childPrefix, index === node.children!.length - 1);
      });
    }
  }
  
  traverse(tree);
  return lines.join('\n');
}
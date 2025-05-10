
// src/lib/algorithmsData.ts
import { Shuffle, Search, Share2, type LucideIcon, ArrowDownUp, LocateFixed, LogIn, GitMerge, Divide, MoveRight, SearchCode, Network, Link as LinkIcon } from 'lucide-react';
import type { ComponentType } from 'react';

export interface AlgorithmInfo {
  value: string;
  label: string;
  description: string;
  icon?: LucideIcon | ComponentType<{ className?: string }>; // Added icon property
}

export interface AlgorithmCategoryData {
  label: string;
  icon: LucideIcon | ComponentType<{ className?: string }>;
  algorithms: AlgorithmInfo[];
  basePath: string;
}

export const ALGORITHMS_DATA: Record<string, AlgorithmCategoryData> = {
  sort: {
    label: 'Sorting Algorithms',
    icon: Shuffle,
    basePath: '/sort', // Ensured this path is correct
    algorithms: [
      {
        value: 'bubble-sort',
        label: 'Bubble Sort',
        description: "A simple comparison-based algorithm where adjacent elements are repeatedly swapped if they are in the wrong order. Efficient for small datasets or nearly sorted data.",
        icon: ArrowDownUp,
      },
      {
        value: 'selection-sort',
        label: 'Selection Sort',
        description: "An in-place comparison sort algorithm that divides the list into a sorted and an unsorted sublist. It repeatedly selects the smallest (or largest) element from the unsorted sublist and moves it to the sorted sublist.",
        icon: LocateFixed,
      },
      {
        value: 'insertion-sort',
        label: 'Insertion Sort',
        description: "Builds the final sorted array one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.",
        icon: LogIn,
      },
      {
        value: 'merge-sort',
        label: 'Merge Sort',
        description: "A divide-and-conquer algorithm that divides the array into halves, recursively sorts them, and then merges the sorted halves. Known for its stable O(n log n) performance.",
        icon: GitMerge,
      },
      {
        value: 'quick-sort',
        label: 'Quick Sort',
        description: "An efficient, in-place sorting algorithm that uses a divide-and-conquer strategy. It picks an element as a pivot and partitions the given array around the picked pivot.",
        icon: Divide,
      },
    ]
  },
  search: {
    label: 'Searching Algorithms',
    icon: Search,
    basePath: '/search', // Ensured this path is correct
    algorithms: [
      {
        value: 'linear-search',
        label: 'Linear Search',
        description: "Sequentially checks each element of the list until a match is found or the whole list has been searched. Simple but inefficient for large datasets.",
        icon: MoveRight,
      },
      {
        value: 'binary-search',
        label: 'Binary Search',
        description: "An efficient algorithm for finding an item from a sorted list of items. It works by repeatedly dividing in half the portion of the list that could contain the item, until you've narrowed down the possible locations to just one.",
        icon: SearchCode,
      },
    ]
  },
  graph: {
    label: 'Graph Algorithms (MST)',
    icon: Share2,
    basePath: '/graph',
    algorithms: [
      {
        value: 'prims-algorithm',
        label: "Prim's Algorithm",
        description: "A greedy algorithm that finds a minimum spanning tree for a weighted undirected graph. It finds a subset of the edges that forms a tree that includes every vertex, where the total weight of all the edges in the tree is minimized.",
        icon: Network,
      },
      {
        value: 'kruskals-algorithm',
        label: "Kruskal's Algorithm",
        description: "A greedy algorithm that finds a minimum spanning tree for a connected, undirected graph. It finds a subset of the edges that forms a tree that includes every vertex, where the total weight of all the edges in the tree is minimized by sorting edges by weight and adding them if they don't form a cycle.",
        icon: LinkIcon,
      },
    ]
  }
};


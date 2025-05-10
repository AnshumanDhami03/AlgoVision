
'use client';

import * as React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ALGORITHMS_DATA } from '@/lib/algorithmsData'; // Updated import

export default function AlgorithmSelector() {
  const router = useRouter();
  const pathname = usePathname();

  // Extract category and algorithm slug from the path, e.g., /sort/bubble-sort
  const pathSegments = pathname.split('/').filter(Boolean); // Filter out empty strings
  const currentCategory = pathSegments[0] || '';
  const currentAlgorithm = pathSegments[1] || '';
  const currentPath = currentCategory && currentAlgorithm ? `/${currentCategory}/${currentAlgorithm}` : '';


  const handleValueChange = (value: string) => {
    if (value && value !== currentPath) {
        // The value format is "/category/algorithm-slug"
        router.push(value);
    }
  };

  // Find the category of the current algorithm to set the Select value correctly
  let selectValue = '';
  if(currentCategory && currentAlgorithm){
      selectValue = `/${currentCategory}/${currentAlgorithm}`;
  }


  return (
    <Select onValueChange={handleValueChange} value={selectValue}>
      {/* Adjusted width for responsiveness */}
      <SelectTrigger className="w-full max-w-[180px] sm:max-w-[220px] bg-secondary text-secondary-foreground border-secondary hover:bg-secondary/90 text-xs sm:text-sm">
        <SelectValue placeholder="Select Algorithm" />
      </SelectTrigger>
      <SelectContent>
        {Object.entries(ALGORITHMS_DATA).map(([categoryKey, categoryData]) => (
          <SelectGroup key={categoryKey}>
            <SelectLabel className="flex items-center gap-2 text-xs font-semibold"> {/* Reduced font size */}
              <categoryData.icon className="h-4 w-4" /> {categoryData.label}
            </SelectLabel>
            {categoryData.algorithms.map((algo) => (
              <SelectItem key={`${categoryKey}-${algo.value}`} value={`${categoryData.basePath}/${algo.value}`} className="text-xs sm:text-sm"> {/* Responsive text size, using basePath */}
                {algo.label}
              </SelectItem>
            ))}
          </SelectGroup>
        ))}
      </SelectContent>
    </Select>
  );
}

    

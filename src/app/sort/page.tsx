
import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ALGORITHMS_DATA } from '@/lib/algorithmsData';
import { ChevronRight } from 'lucide-react';
// Removed import for VideoPlayer as it's no longer used

export const metadata: Metadata = {
  title: "Sorting Algorithms | AlgoVision",
  description: "Explore and learn about various sorting algorithms like Bubble Sort, Merge Sort, Quick Sort, and more. Understand their mechanisms and visualize their operations.",
};

export default function SortingCategoryPage() {
  const sortCategory = ALGORITHMS_DATA.sort;

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary flex items-center gap-2">
          <sortCategory.icon className="h-8 w-8 sm:h-10 sm:w-10" />
          {sortCategory.label}
        </h1>
        <p className="text-lg text-muted-foreground">
          Dive into the world of sorting algorithms. Understand how data is organized efficiently and see these methods in action step by step.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortCategory.algorithms.map((algo) => (
          <Card key={algo.value} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            {/* Removed VideoPlayer component */}
            <CardHeader className="pt-4">
              <CardTitle className="text-xl flex items-center gap-2">
                {algo.icon && <algo.icon className="h-5 w-5 text-muted-foreground" />}
                {algo.label}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription className="text-sm text-muted-foreground">{algo.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href={`${sortCategory.basePath}/${algo.value}`}>
                  Visualize {algo.label}
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}


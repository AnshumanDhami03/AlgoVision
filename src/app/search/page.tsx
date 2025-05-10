
import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ALGORITHMS_DATA } from '@/lib/algorithmsData';
import { ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: "Searching Algorithms | AlgoVision",
  description: "Discover searching algorithms such as Linear Search and Binary Search. Learn how they efficiently find elements in data structures and see them in action.",
};

export default function SearchingCategoryPage() {
  const searchCategory = ALGORITHMS_DATA.search;

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary flex items-center gap-2">
          <searchCategory.icon className="h-8 w-8 sm:h-10 sm:w-10" />
          {searchCategory.label}
        </h1>
        <p className="text-lg text-muted-foreground">
          Learn how different algorithms locate data within collections. Explore their strategies and visualize their search processes.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> {/* Adjusted grid for fewer items */}
        {searchCategory.algorithms.map((algo) => (
          <Card key={algo.value} className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                {algo.icon && <algo.icon className="h-5 w-5 text-muted-foreground" />}
                {algo.label}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground">{algo.description}</p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href={`${searchCategory.basePath}/${algo.value}`}>
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

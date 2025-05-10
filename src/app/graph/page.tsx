
import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ALGORITHMS_DATA } from '@/lib/algorithmsData';
import { ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: "Graph Algorithms | AlgoVision",
  description: "Dive into graph algorithms like Prim's and Kruskal's for finding Minimum Spanning Trees. Understand their logic and visualize their step-by-step execution.",
};

export default function GraphCategoryPage() {
  const graphCategory = ALGORITHMS_DATA.graph;

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary flex items-center gap-2">
          <graphCategory.icon className="h-8 w-8 sm:h-10 sm:w-10" />
          {graphCategory.label}
        </h1>
        <p className="text-lg text-muted-foreground">
          Explore algorithms that operate on graph structures, focusing on Minimum Spanning Trees. Visualize how these algorithms build optimal path networks.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> {/* Adjusted grid for fewer items */}
        {graphCategory.algorithms.map((algo) => (
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
                <Link href={`${graphCategory.basePath}/${algo.value}`}>
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

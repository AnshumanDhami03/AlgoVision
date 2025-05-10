
import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ALGORITHMS_DATA } from '@/lib/algorithmsData';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image'; // Import next/image
import React from 'react'; // Import React

// VideoPlayer component to handle hover video playback
const VideoPlayer = ({ videoUrl, posterUrl }: { videoUrl: string; posterUrl: string }) => {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => console.log("Video play failed:", error));
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // Reset video to start
    }
  };

  return (
    <div 
      className="relative w-full h-40 rounded-t-md overflow-hidden group cursor-pointer bg-muted"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        src={videoUrl}
        loop
        muted
        playsInline
        preload="none" // Changed from auto to none
        poster={posterUrl} // Use poster for initial display
      />
      {/* Static image as a fallback or initial display, shown when video is not playing or loading */}
      <Image
        src={posterUrl}
        alt="Algorithm animation placeholder"
        layout="fill"
        objectFit="cover"
        className="transition-opacity duration-300 group-hover:opacity-0"
        data-ai-hint="algorithm animation"
      />
       <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <ChevronRight className="h-12 w-12 text-white opacity-70 transform scale-0 group-hover:scale-100 transition-transform duration-300 ease-out" />
      </div>
    </div>
  );
};

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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {searchCategory.algorithms.map((algo) => (
          <Card key={algo.value} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            {algo.videoUrl && (
              <VideoPlayer videoUrl={algo.videoUrl} posterUrl={`https://picsum.photos/seed/${algo.value}/400/200`} />
            )}
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

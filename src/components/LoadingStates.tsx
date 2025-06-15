
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Heart, Activity, Brain } from "lucide-react";

const LoadingStates = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-50/60 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400/15 to-purple-400/15 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-green-400/15 to-emerald-400/15 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-7xl relative z-10">
        {/* Loading Header */}
        <div className="text-center mb-20">
          <div className="relative inline-block">
            <div className="flex items-center justify-center mb-8">
              <div className="relative group">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 via-purple-500 to-emerald-500 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/30 animate-glow">
                  <Heart className="h-12 w-12 text-white animate-pulse drop-shadow-lg" />
                </div>
                <div className="absolute -top-2 -right-2">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>

            <Skeleton className="h-16 w-96 mx-auto mb-6" />
            <Skeleton className="h-8 w-64 mx-auto mb-4" />
            <Skeleton className="h-6 w-80 mx-auto" />
          </div>
        </div>

        {/* Loading Tabs */}
        <div className="flex justify-center mb-12">
          <div className="grid grid-cols-4 bg-white/90 backdrop-blur-xl border-0 shadow-2xl rounded-3xl p-3 ring-1 ring-black/5">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center gap-3 px-8 py-4">
                <Skeleton className="h-5 w-5 rounded-full" />
                <Skeleton className="h-4 w-16" />
              </div>
            ))}
          </div>
        </div>

        {/* Loading Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {[...Array(3)].map((_, i) => (
            <Card key={i} className="loading-shimmer border-0 shadow-xl">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Skeleton className="h-12 w-12 rounded-2xl" />
                  <div className="space-y-2">
                    <Skeleton className="h-5 w-32" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Skeleton className="h-20 w-full mb-4" />
                <Skeleton className="h-10 w-full" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Loading Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-10">
            <Card className="loading-shimmer">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Activity className="h-6 w-6 text-blue-500 animate-pulse" />
                  <Skeleton className="h-6 w-48" />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <Skeleton className="h-24 w-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-10">
            <Card className="loading-shimmer">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Brain className="h-6 w-6 text-purple-500 animate-pulse" />
                  <Skeleton className="h-6 w-48" />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <Skeleton className="h-32 w-full" />
                <Skeleton className="h-10 w-full" />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Loading Indicator */}
        <div className="fixed bottom-8 right-8 z-50">
          <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-white/20">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-6 h-6 border-2 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
              </div>
              <span className="text-sm font-medium text-gray-700">Loading your health dashboard...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingStates;

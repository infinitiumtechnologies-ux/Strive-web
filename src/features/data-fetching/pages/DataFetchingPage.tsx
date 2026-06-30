import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useQuery } from '@tanstack/react-query';
import { RefreshCw, AlertTriangle, ChevronLeft, ChevronRight, CheckCircle2, Circle } from 'lucide-react';
import { todoService } from '../services/todoService';
import { Card } from '../../../shared/ui/Card';
import { Button } from '../../../shared/ui/Button';
import { Skeleton } from '../../../shared/ui/Skeleton';

export const DataFetchingPage: React.FC = () => {
  const [page, setPage] = React.useState(1);
  const [triggerError, setTriggerError] = React.useState(false);

  const { data, isLoading, isError, error, refetch, isFetching } = useQuery({
    queryKey: ['todos', page, triggerError],
    queryFn: () => todoService.getTodos(page, 5, triggerError),
    retry: false,
  });

  return (
    <>
      <Helmet>
        <title>API Fetching | StriveWheels</title>
        <meta
          name="description"
          content="TanStack Query API integration demo with caching, pagination, skeleton screens, and error bounds."
        />
      </Helmet>

      <div className="space-y-6">
        {/* Title / Description */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-white tracking-tight">API Data Fetching</h1>
            <p className="text-slate-400 text-sm mt-1">
              Demonstrates TanStack Query query caching, page pagination, dynamic skeletons, and interceptor-based responses.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant={triggerError ? 'danger' : 'outline'}
              size="sm"
              onClick={() => {
                setTriggerError(!triggerError);
                setPage(1);
              }}
            >
              <AlertTriangle className="h-4 w-4 mr-1.5" />
              {triggerError ? 'Disable Error Simulation' : 'Simulate API Error'}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => refetch()}
              isLoading={isFetching && !isLoading}
              className="flex items-center gap-1.5"
            >
              {!isFetching && <RefreshCw className="h-4 w-4" />}
              Refresh Cache
            </Button>
          </div>
        </div>

        {/* Content Area */}
        {isLoading ? (
          <div className="space-y-4" data-testid="todos-loading">
            {[...Array(5)].map((_, idx) => (
              <Card key={idx} className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3 w-2/3">
                  <Skeleton variant="circular" className="h-5 w-5 shrink-0" />
                  <div className="space-y-2 w-full">
                    <Skeleton variant="text" className="h-4 w-3/4" />
                    <Skeleton variant="text" className="h-3 w-1/4" />
                  </div>
                </div>
                <Skeleton variant="text" className="h-6 w-16" />
              </Card>
            ))}
          </div>
        ) : isError ? (
          <Card
            className="border-red-950 bg-red-950/20 p-8 flex flex-col items-center text-center max-w-xl mx-auto my-8"
            data-testid="error-container"
          >
            <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-500 rounded-full mb-4">
              <AlertTriangle className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-semibold text-red-200">API Fetching Failed</h3>
            <p className="text-red-400/80 text-sm mt-2 max-w-md">
              {error instanceof Error
                ? error.message
                : 'An error occurred while calling the remote endpoint.'}
            </p>
            <div className="flex gap-4 mt-6">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setTriggerError(false);
                }}
              >
                Clear Error
              </Button>
              <Button size="sm" onClick={() => refetch()}>
                Retry Request
              </Button>
            </div>
          </Card>
        ) : (
          <div className="space-y-4" data-testid="todos-list">
            {data && data.length > 0 ? (
              data.map((todo) => (
                <Card key={todo.id} hoverEffect className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-3 pr-4">
                    {todo.completed ? (
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
                    ) : (
                      <Circle className="h-5 w-5 text-slate-600 shrink-0" />
                    )}
                    <span
                      className={`text-sm font-medium ${
                        todo.completed ? 'text-slate-500 line-through' : 'text-slate-200'
                      }`}
                    >
                      {todo.title}
                    </span>
                  </div>
                  <span
                    className={`text-xs px-2.5 py-1 rounded-full font-semibold border ${
                      todo.completed
                        ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20'
                        : 'bg-amber-500/10 text-amber-500 border-amber-500/20'
                    }`}
                  >
                    {todo.completed ? 'Completed' : 'Pending'}
                  </span>
                </Card>
              ))
            ) : (
              <Card className="text-center p-8 text-slate-500">No items found.</Card>
            )}

            {/* Pagination Controls */}
            <div className="flex items-center justify-between border-t border-slate-800 pt-4 mt-6">
              <span className="text-xs text-slate-500">
                Viewing page <strong className="text-slate-300 font-semibold">{page}</strong> (Cached)
              </span>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setPage((p) => Math.max(p - 1, 1))}
                  disabled={page === 1}
                  className="px-2"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setPage((p) => p + 1)}
                  disabled={data && data.length < 5}
                  className="px-2"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

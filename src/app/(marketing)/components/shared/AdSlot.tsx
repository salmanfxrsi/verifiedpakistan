'use client';

interface AdSlotProps {
  id: string;
  variant: 'leaderboard' | 'horizontal' | 'square';
}

export default function AdSlot({ id, variant }: AdSlotProps) {
  // Map layouts to dynamic styling classes based on position variant
  const variantStyles = {
    leaderboard: 'w-full max-w-5xl min-h-[90px] md:min-h-[120px] my-4',
    horizontal: 'w-full max-w-7xl min-h-[100px] my-8',
    square: 'w-full h-full min-h-[250px] lg:min-h-[300px]',
  };

  return (
    <div className={`mx-auto flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 ${variantStyles[variant]}`}>
      {/* Tiny Regulatory Compliance Label */}
      <span className="text-[8px] font-mono font-bold tracking-[0.25em] text-zinc-400 dark:text-zinc-600 uppercase mb-1.5 select-none">
        ADVERTISEMENT // SLOT {id}
      </span>

      {/* The Ad Container Box */}
      <div className="w-full h-full bg-zinc-100/80 dark:bg-zinc-950 border border-dashed border-zinc-200 dark:border-zinc-900 rounded-sm flex items-center justify-center transition-colors duration-300">
        
        {/* Placeholder Content - Swap this inner div out for your actual Google AdSense, 
            Ezoic, or Direct Sponsor Script tag later */}
        <div className="text-center p-6 space-y-1">
          <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            Sponsorship Matrix Area
          </p>
          <p className="text-[9px] font-mono text-zinc-400/60 dark:text-zinc-600">
            Responsive Container Size: {variant === 'square' ? '300x250' : 'Flexible Banner'}
          </p>
        </div>

      </div>
    </div>
  );
}
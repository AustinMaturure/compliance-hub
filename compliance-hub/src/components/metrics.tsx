import { useEffect, useRef, useState } from 'react';

type MetricItem = {
  title: string;
  target: number;
  suffix: string;
};

const metricItems: MetricItem[] = [
  {
    title: 'Years of Experience',
    target: 10,
    suffix: '+',
  },
  {
    title: 'Customer Satisfaction',
    target: 100,
    suffix: '%',
  },
  {
    title: 'Clients That Trust Us',
    target: 8,
    suffix: '+',
  },
];

function MetricCard({ title, target, suffix }: MetricItem) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (!entry?.isIntersecting) return;
        setIsVisible(true);
        observer.unobserve(entry.target);
      },
      {
        threshold: 0.6,
      }
    );

    observer.observe(card);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setProgress(1);
      return;
    }

    const durationMs = 1600;
    const start = performance.now();
    let animationFrame = 0;

    const animate = (now: number) => {
      const elapsed = now - start;
      const rawProgress = Math.min(elapsed / durationMs, 1);
      // Ease-out curve for a more natural finish.
      const easedProgress = 1 - Math.pow(1 - rawProgress, 3);
      setProgress(easedProgress);

      if (rawProgress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible]);

  const formatMetricValue = () => {
    const currentValue = Math.round(target * progress);
    return `${currentValue}${suffix}`;
  };

  return (
    <div
      ref={cardRef}
      className="motion-reveal lift-card flex items-center justify-between rounded-xl bg-[#395b50]/10 p-6"
    >
      <h3 className="cabinet max-w-[65%] text-lg font-semibold leading-snug text-[#1f2d29] md:text-xl">
        {title}
      </h3>

      <p className="cabinet text-3xl font-bold text-[#395b50] md:text-4xl">
        {formatMetricValue()}
      </p>
    </div>
  );
}

export function Metrics() {

  return (
    <section className="container mx-auto px-2 ">
     <div className="flex flex-col gap-4">
      {metricItems.map((metric) => (
        <MetricCard key={metric.title} {...metric} />
      ))}
</div>
    </section>
  )
}
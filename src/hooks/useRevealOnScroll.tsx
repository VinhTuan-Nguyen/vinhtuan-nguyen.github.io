import { RefObject, useEffect, useState } from 'react';

// This hook observes an element and returns true when it becomes visible in the viewport
// It uses Intersection Observer API to detect visibility changes
export function useRevealOnScroll<T extends HTMLElement>(
    ref: RefObject<T>,
    threshold = 0.2
): boolean {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (!ref.current) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.intersectionRatio >= threshold) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: [0, threshold, 1] }
        );
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, [ref, threshold]);

    return visible;
}
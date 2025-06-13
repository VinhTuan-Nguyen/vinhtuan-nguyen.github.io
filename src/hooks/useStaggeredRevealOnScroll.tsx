import { useEffect, useRef, useState } from 'react';

export function useStaggeredRevealOnScroll(length: number, threshold = 0.2, delay = 150) {
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [visible, setVisible] = useState<boolean[]>(Array(length).fill(false));

    useEffect(() => {
        setVisible(Array(length).fill(false));
        const observers: IntersectionObserver[] = [];

        for (let i = 0; i < length; i++) {
            if (!itemRefs.current[i]) continue;
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.intersectionRatio >= threshold) {
                        setTimeout(() => {
                            setVisible(prev => {
                                const next = [...prev];
                                next[i] = true;
                                return next;
                            });
                        }, delay * i);
                        observer.disconnect();
                    }
                },
                { threshold }
            );
            observer.observe(itemRefs.current[i]!);
            observers.push(observer);
        }

        return () => {
            observers.forEach(o => o.disconnect());
        };
    }, [length, threshold, delay]);

    return { visible, itemRefs };
}
"use client";

import { useState } from 'react';
import Image from 'next/image';
import styles from './ToolIcon.module.css';

const CATEGORY_COLORS = {
    'image-ai': ['#FF9A9E', '#FECFEF'],
    'text-ai': ['#a18cd1', '#fbc2eb'],
    'video-ai': ['#84fab0', '#8fd3f4'],
    'audio-ai': ['#fccb90', '#d57eeb'],
    'code-ai': ['#e0c3fc', '#8ec5fc'],
    'business-ai': ['#4facfe', '#00f2fe'],
    'default': ['#6366F1', '#A855F7']
};

export default function ToolIcon({ src, name, category, size = 48 }) {
    const [error, setError] = useState(false);

    if (!src || error) {
        const colors = CATEGORY_COLORS[category] || CATEGORY_COLORS.default;
        const initial = name ? name.charAt(0).toUpperCase() : '?';

        return (
            <div
                className={styles.fallback}
                style={{
                    width: size,
                    height: size,
                    background: `linear-gradient(135deg, ${colors[0]}, ${colors[1]})`
                }}
            >
                {initial}
            </div>
        );
    }

    return (
        <Image
            src={src}
            alt={name}
            width={size}
            height={size}
            className={styles.icon}
            onError={() => setError(true)}
            unoptimized
        />
    );
}

'use client';
import classNames from 'classnames';
import { default as NextImage, StaticImageData } from 'next/image';
import { CSSProperties } from 'react';

import { useIntersection } from '@/hooks/intersection-observer';

import styles from './styles.module.css';

interface ImageLoaderProps {
  width?: number;
  height?: number;
  className?: string;
  src: string | StaticImageData;
  fill?: boolean;
  style?: CSSProperties;
  alt: string;
  priority?: boolean;
  unoptimized?: boolean;
}

export function ImageLoader({
  width,
  height,
  style,
  src,
  fill,
  className,
  alt,
  priority,
  unoptimized,
}: Readonly<ImageLoaderProps>) {
  const [isIntersecting, ref] = useIntersection({ delay: 0.1 });

  const imageStyles = classNames(className, {
    [styles.imageLoading]: !isIntersecting,
    [styles.imageSuccess]: isIntersecting,
  });

  return (
    <NextImage
      className={imageStyles}
      ref={ref}
      priority={priority}
      fill={fill}
      width={width ?? 400}
      height={height ?? 400}
      style={style}
      unoptimized={unoptimized}
      src={src}
      alt={alt}
    />
  );
}

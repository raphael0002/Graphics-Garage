import { ImageLoaderProps } from "next/image";

export const customImageLoader = ({
  src,
  width,
  quality,
}: ImageLoaderProps) => {
  const params = [`w=${width}`, `q=${quality || 75}`];
  if (src.startsWith("http")) {
    return `${src}?${params.join("&")}`;
  }
  return `/_next/image?url=${encodeURIComponent(src)}&${params.join("&")}`;
};

export const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
        <linearGradient id="g">
            <stop stop-color="#f4f4f5" offset="20%" />
            <stop stop-color="#e4e4e7" offset="50%" />
            <stop stop-color="#f4f4f5" offset="70%" />
        </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="#f4f4f5" />
    <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
    <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

export const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

export const getImageProps = (src: string, width: number, height: number) => ({
  src,
  width,
  height,
  loading: "lazy" as const,
  placeholder: "blur" as const,
  blurDataURL: `data:image/svg+xml;base64,${toBase64(shimmer(width, height))}`,
});

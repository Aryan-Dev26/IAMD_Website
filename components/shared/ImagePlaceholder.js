'use client';
import Image from 'next/image';
import { getGradientPlaceholder } from '@/lib/utils/imageHelpers';

/**
 * ImagePlaceholder Component
 * Displays an image with fallback gradient placeholder
 * 
 * @param {string} src - Image source URL
 * @param {string} alt - Alt text for accessibility
 * @param {string} type - Type of gradient fallback (hero, service, team, etc.)
 * @param {string} className - Additional CSS classes
 * @param {boolean} fill - Whether to use fill layout
 * @param {number} width - Image width (if not using fill)
 * @param {number} height - Image height (if not using fill)
 * @param {boolean} priority - Whether to prioritize loading
 */
const ImagePlaceholder = ({
  src,
  alt,
  type = 'hero',
  className = '',
  fill = false,
  width,
  height,
  priority = false,
  sizes = '100vw',
}) => {
  if (!src) {
    // Show gradient placeholder if no image
    return (
      <div className={`${getGradientPlaceholder(type)} ${className} flex items-center justify-center`}>
        <div className="text-white text-center p-4">
          <p className="text-sm opacity-75">Image placeholder</p>
        </div>
      </div>
    );
  }

  const imageProps = {
    src,
    alt,
    className: `${className} object-cover`,
    priority,
  };

  if (fill) {
    imageProps.fill = true;
    imageProps.sizes = sizes;
  } else {
    imageProps.width = width;
    imageProps.height = height;
  }

  return <Image {...imageProps} />;
};

export default ImagePlaceholder;

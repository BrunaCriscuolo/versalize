
import { Image as I } from './styles';

import { Images } from '../../../variables';

const { error } = Images;

export const Image = ({ alt, src, width, height, preview = false, className }) => (
  <I
    width={width}
    height={height}
    preview={preview}
    src={src}
    alt={alt}
    className={className}
    fallback={error}
  />
);

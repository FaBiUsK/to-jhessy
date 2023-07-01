import React from "react";
import PhotoAlbum, { RenderContainer } from "react-photo-album";

import * as S from "./styles";

import photos from "./photos";

const renderContainer: RenderContainer = ({
  containerProps,
  children,
  containerRef,
}) => (
  <S.PhotoFrame>
    <div ref={containerRef} {...containerProps}>
      {children}
    </div>
  </S.PhotoFrame>
);

const Gallery: React.FC = () => {
  return (
    <PhotoAlbum
      photos={photos}
      layout="columns"
      spacing={10}
      renderContainer={renderContainer}
      columns={3}
    />
  );
};

export default Gallery;

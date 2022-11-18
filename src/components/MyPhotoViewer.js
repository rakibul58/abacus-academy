import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const MyPhotoViewer = ({children , src}) => {
    return (
        <PhotoProvider>
            <PhotoView src={src}>
                {children}
            </PhotoView>
        </PhotoProvider>
    );
};

export default MyPhotoViewer;
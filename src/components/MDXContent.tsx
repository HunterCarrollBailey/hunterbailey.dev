"use client"; // Mark this as a client component

import React from 'react';
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote';

interface MDXContentProps {
    source: MDXRemoteProps['source'];
}

const MDXContent: React.FC<MDXContentProps> = ({ source }) => {
    return <MDXRemote {...source} />;
};

export default MDXContent;

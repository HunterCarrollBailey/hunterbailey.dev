"use client";

import React from 'react';
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote';

// Define the props type for the MDXContent component
interface MDXContentProps {
    content: MDXRemoteProps; // This should match the serialized MDX content type
}

const MDXContent: React.FC<MDXContentProps> = ({ content }) => {
    return <MDXRemote {...content} />;
};

export default MDXContent;

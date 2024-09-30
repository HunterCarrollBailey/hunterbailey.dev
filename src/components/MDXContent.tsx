"use client";

import React from 'react';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

interface MDXContentProps {
    content: MDXRemoteSerializeResult,
    className?: string,
}

const MDXContent: React.FC<MDXContentProps> = ({ content }) => {
    return <MDXRemote {...content} />;
};

export default MDXContent;

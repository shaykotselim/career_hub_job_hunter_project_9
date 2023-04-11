import React from 'react';
import BlogQuestions from './BlogQuestions';
import BlogBanner from './BlogBanner';

const Blog = () => {
    return (
        <div>
            <div>
                <BlogBanner/>
            </div>
            <div>
                <BlogQuestions/>
            </div>
        </div>
    );
};

export default Blog;
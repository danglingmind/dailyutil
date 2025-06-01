import fs from 'fs';
import path from 'path';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for our application',
};

export default function PrivacyPolicy() {
  // Read the markdown file from the filesystem
  const mdContent = fs.readFileSync(
    path.join(process.cwd(), 'app/(standalone)/privacy-policy/privacy-policy.md'),
    'utf8'
  );

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <article className="prose lg:prose-xl">
        <MDXRemote 
          source={mdContent} 
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
            },
          }}
        />
      </article>
    </div>
  );
} 
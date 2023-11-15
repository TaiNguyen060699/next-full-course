async function fetchPosts(promise: Promise<Post[]>) {
  try {
    const posts = await promise;
    return posts.map(post => (
      <article key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <br />
      </article>
    ));
  } catch (error) {
    console.error('Error fetching posts:', error);
    return <p>Error fetching posts.</p>;
  }
}

export default function UserPosts({ promise }: Props) {
  const content = fetchPosts(promise);
  return content;
}
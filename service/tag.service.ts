import { IBlog } from '@/types'
import request, { gql } from 'graphql-request'
const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!

export const getBlogsByTag = async (slug: string) => {
	const query = gql`
		query GetBlogsByTag($slug: String!) {
			tag(where: { slug: $slug }) {
				blogs {
					author {
						name
						image {
							url
						}
						bio
					}
					content {
						html
					}
					createdAt
					image {
						url
					}
					slug
					tags {
						name
						slug
					}
					title
				}
				name
			}
		}
	`
	const { tag } = await request<{ tag: { blogs: IBlog[]; name: string } }>(
		graphqlAPI,
		query,
		{
			slug,
		}
	)
	return tag
}

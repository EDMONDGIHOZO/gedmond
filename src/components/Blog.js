import React, { useState, useEffect } from "react";
import sanityClient from "../client";
import { Link } from "react-router-dom";

export default function Blog() {
	// get the data
	const [postData, setPost] = useState(null);

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "post"]{title, slug, mainImage{asset->{_id, url}, alt}}`
			)
			.then((data) => setPost(data))
			.catch((err) => console.error(err));
	});

	return (
		<main className="bg-red-200 min-h-screen p-12">
			<section className="container mx-auto">
				<h1 className="text-4xl"> Blog posts</h1>
				<h2>Welcome to my blog posts </h2>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{postData &&
						postData.map((post, index) => (
							<article>
								<Link to={"/post/" + post.slug.current} key={post.slug.current}>
									<span className="block h-64 relative rounded shadow leading-snug my-5 border-t-8 border-pink-400">
										<img
											src={post.mainImage.asset.url}
											alt={post.mainImage.alt}
											className="w-full h-full rounded-r object-cover absolute"
										/>
										<span className="block relative h-full flex justify-end items-end pr-4 pb-4">
											<h3 className="text-white font-bold text-lg font-bold px-3 py-4 bg-pink-400 rounded bg-opacity-75">
												{post.title}
											</h3>
										</span>
									</span>
								</Link>
							</article>
						))}
				</div>
			</section>
		</main>
	);
}
